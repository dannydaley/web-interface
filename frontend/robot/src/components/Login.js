import { Container, Box } from "@mui/system";
import * as React from 'react';

import TextField from '@mui/material/TextField';
export default function LoginPage() {

    return(
        <Container maxWidth="xs">
            <h1>YOOOOOO</h1>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
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
    )
}