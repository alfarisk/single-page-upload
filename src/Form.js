import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PhotoIcon from '@mui/icons-material/Photo';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();
const baseURL = "http://localhost:3000/v1"

export default function Form() {
  const [post, setPost] = React.useState("handleSubmit");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const config = {
      headers: {
        'Authorization': ``,
        'Content-Type': 'multipart/form-data'
      }
    }
    axios.post(`${baseURL}/administrasi/absensi`, data, config).then((response) => {
      setPost(response.data);
    }).catch(error => {
      console.log(error.response.data)
      setPost(error.response.data);
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PhotoIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Upload Photo
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="image" name="image" type="file" />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Upload</Button>
            <Typography id="response">
              {post.message}
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}