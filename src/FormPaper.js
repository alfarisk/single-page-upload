import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Form from './Form';



function FormPaper() {

  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      pt: 5,
      '& > :not(style)': {
        m: 1
      },
    }}
    >
        <Paper 
        sx={{
            height: 400,
            width: 400
        }}
        elevation={3}
        >
        <Form />   
        </Paper>
    </Box>
  );
}
export default FormPaper;
