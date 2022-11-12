import { Container, Box } from "@mui/system";
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginPage() {

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
        />
        <TextField
          
          id="outlined-required"
          type="password" 
          label="password"
          defaultValue="Hello World"
        />
        
         <Button variant="contained">Login</Button>
         
            
         
         
        </div>
      <div>
        
      </div>
      </Box>
        </Container>
        </div>
    )
}