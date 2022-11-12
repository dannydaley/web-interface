var express = require('express');
const app = express();
var dotenv = require('dotenv').config();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
var path = require('path');

// Session setup
var session = require('cookie-session');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var userSession = {
  secret: "myMegaSecret",
  keys: ['key1', 'key2', 'key3'],
  originalMaxAge: 0,
  maxAge:0,
  resave: true,
  saveUninitialized: true,  
  cookie: {
    httpOnly: true,    
    secure: false,
    maxAge: 30  
  }
};

app.use(cookieParser());
app.use(session(userSession));

//#region SECURITY
// set up crypto middleware for hashing password and checking password hahses
let crypto = require('crypto');

// number of iterations to jumble the hash
const iterations = 1000;

//set up char length of hash
const hashSize = 64;

// which hashing algorithm will be used
const hashAlgorithm = 'sha256';

// create a hash salt/pepper
const generatePepper = crypto.randomBytes(256).toString('hex');

//this function returns a hash of the password, combined with the pepper and the salt.
function passwordHash(thePassword, theSalt) {  
  const pepper = "7439329de19addde9c46147765b39e0ac0577b7e73534210ea8a721cad50e7393f5f68d3a26550b5d50ff6deeae37b179c06a4abab4c58e039fd8c279d9ddbd84f06c8eb17d7abf063438df3dd0ca12b32c923fea05569bc319403c0983ffdec4b5f7e9bcf8c333e39e2f6c8fde97173c6b8be8616001202e0b533f5078889084ea061d434181276405038a5624189eec9c3049917fad498484bb33291181e77b99e27a170d68c65d2a6449cd0bdbc0cfb54c3cc7e00ed891fc6ffb3af0de4201bb45c09b5a21ba6ccd8d658216dd41a529549a1a6bd5d3589da4df590246c8f6ad6944cb18d0a70c1cbff3dea635e08f93cae606d0ec43ba6996fa396834067";
   return crypto.pbkdf2Sync(thePassword, pepper + theSalt, iterations, hashSize, hashAlgorithm).toString('hex');
}

// SQLite 3 setup for test db while in development
var sqlite3 = require('sqlite3').verbose();

// set up variable for access to database
let SQLdatabase = new sqlite3.Database('./SQLdatabase.db');

// set app.locals database to the initialised variable
app.locals.SQLdatabase = SQLdatabase;

const FIND_USER = "SELECT * FROM users WHERE email = ?";
const SIGN_UP_USER = "INSERT INTO users (email, username, firstName,lastName, password, passwordSalt) VALUES(?,?,?,?,?,?)";


// app.get('/', (req, res, next) => {
//     res.send("server is running");
//   });


// users table setup endpoint
// users table setup endpoint
app.get('/usersSetup', (req, res, next) => {
    SQLdatabase.serialize(() => {
      //delete the table if it exists..   
      SQLdatabase.run('DROP TABLE IF EXISTS users');
      //recreate the users table  
      SQLdatabase.run('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username varchar(255) UNIQUE, firstName varchar(255), lastName varchar(255), email varchar(255) UNIQUE, password varchar(255), passwordSalt varchar(512))', (err, rows) => {
          if (err) console.log(err);
          console.log(rows)
      });
    // respond with success page
    res.send("user-db-done");
  });
})


app.post('/signUp', (req, res) => {  
    //set up variables from the request for better readability
    let { signUpEmail, signUpUserName,signUpFirstName, signUpLastName, signUpPassword, confirmSignUpPassword } = req.body;
    //if both password fields match
    if (signUpPassword === confirmSignUpPassword) {
      //generate salt to store
      let passwordSalt = generatePepper;
      //generate password to store, using password from the confirm field, and the generated salt
      let storePassword = passwordHash(confirmSignUpPassword, passwordSalt);
      //Create a new user in the user database with the fields from the form, the default profile picture and the generated password hash and salt
      SQLdatabase.run(SIGN_UP_USER, [ signUpEmail, signUpUserName, signUpFirstName, signUpLastName, storePassword, passwordSalt], (err, rows) => {
        if (err) {
          console.log("failed to add user to database")
          console.log(err)
          // if username already exists in database
          if (err.message === "SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username") {
            console.log("USERNAME ALREADY EXISTS");
            res.json("duplicate username");
            return
          };
          // if email already exists in database
          if (err.message === "SQLITE_CONSTRAINT: UNIQUE constraint failed: users.email") {
            console.log("EMAIL ALREADY EXISTS");
            res.json("duplicate email");
            return;
          };
          // if any other error case, respond with status and error message
          res.status(500).send(err.message);
          return;
        };
        //respond with success 
        res.json('sign up success');   
      });
    //response if password fields dont match    
    } else {    
      res.json("PASSWORDS DONT MATCH");
    };
  });

  app.get('/getAllUsers', (req, res, next) => {
    // grab all user data
    SQLdatabase.get("SELECT * FROM users", [], (err, userData) => {
      // if error
      if (err) {
        // respond with error status and error message
        res.status(500).send(err.message);
        return;
      };
      // respond with userData on success
      res.send(userData);
    });
  });


  //sigin endpoint
  app.post('/signin', (req, res) => {  
    // pull data from request body for better readbility
    let { email, password } = req.body;
    // search if user exists using email address
    SQLdatabase.get(FIND_USER, email, (err, userData) => {
      if (err) {
        console.log("error at database");
        res.status(500).send(err)
      }
      //assign any returned rows to user variable
      let user = userData  
      //if a user exists, and their stored password matches the output of the hashing function
      // with their password entry..  
      if (user!== undefined && user.password === passwordHash(password, user.passwordSalt)) {
        // create empty session data to be populated
        req.session.userData = {};
        // apply user data to session variables
        req.session.userData.isSignedIn = true;
        req.session.userData.userFirstName = user.firstName;
        req.session.userData.userLastName=  user.lastName;
        req.session.userData.loggedInUsername= user.username;
        req.session.userData.userProfilePicture= user.profilePicture;
        req.session.userData.userCoverPicture= user.coverPicture;
        //respond with user data on succesful login
        res.json({
          status: 'success',
          isSignedIn: req.session.userData.isSignedIn,
          firstName: req.session.userData.userFirstName,
          lastName: req.session.userData.userLastName,
          username: req.session.userData.loggedInUsername,
          profilePicture: req.session.userData.userProfilePicture,
          coverPicture: req.session.userData.userCoverPicture
        });
      // otherwise, credentials are invalid
      } else {
        //respond with failure message
        res.json({
        status: 'failed',
        message: 'incorrect email or password'
        });
      };  
    });
  });
  
  app.post('/signout', (req, res) => {
    // delete session
    req.session = null;
    // respond with success
    res.json("success");
  });


 // 3001 is the port number in my case.
 app.listen(3001, function() {
    console.log("Server is running on port " + 3001);
});  