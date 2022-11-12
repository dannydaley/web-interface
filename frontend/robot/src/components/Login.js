import { Container, Box } from "@mui/system";
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: ''            
  }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
}
onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
    
      
}

onSubmitSignIn = () => {
  fetch('http://localhost:3001' + '/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          'email': this.state.signInEmail,
          'password': this.state.signInPassword
      })
  })
  .then(response => response.json())
  .then(data => {
      if (data.status === 'success') {            
          this.props.updateSession(data.firstName, data.lastName, data.username, data.profilePicture, data.coverPicture);
          this.props.onRouteChange('home')}
      }
  )
}


  render() {

    return(
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'
    }}>
        <Container maxWidth="xs" 
        sx={{width: '900px',
        padding: '30px',
         backgroundColor: 'white',
          borderRadius: '10px', height: '300px', display: 'flex', flexDirection: 'row', justifyContent: 'center'
          }}>           
            <Box
      component="form"
      sx={{height: '300px',
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <div style = {{display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <TextField
          
          id="outlined-required"
          label="email"
          defaultValue="email"
          helperText="Incorrect entry."
          onChange={this.onEmailChange}
        />
        <TextField
          
          id="outlined-required"
          type="password" 
          label="password"
          defaultValue=""
          onChange={this.onPasswordChange}
        />
        
         <Button variant="contained"
                                     onSubmit={()=> this.onSubmitSignIn()}                            
                                     onClick={() => this.onSubmitSignIn()}>Login</Button>
         
            
         
         
        </div>
      <div>
        
      </div>
      </Box>
        </Container>
        </div>
    )
}

  }