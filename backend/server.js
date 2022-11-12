var express = require('express');
const app = express();
var dotenv = require('dotenv').config();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
var path = require('path');

app.get('/', (req, res, next) => {
    res.send("server is running");
  });



 // 3001 is the port number in my case.
 app.listen(3001, function() {
    console.log("Server is running on port " + 3001);
});  