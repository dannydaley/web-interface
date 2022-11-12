import { Container, Box } from "@mui/system";
import * as React from 'react';

import TextField from '@mui/material/TextField';
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
      <div >
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
      
      </div>
      <div>
        
      </div>
      </Box>
        </Container>
        </div>
    )
}