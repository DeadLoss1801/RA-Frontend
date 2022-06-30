import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },

  },
}));




async function loginUser(credentials) {
  return fetch('https://summerinternshipproject.pythonanywhere.com/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const AdminLogin = () => {
  const classes = useStyles();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('token' in response) {
      swal("Success", response.ans, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('token', response['token']);
        // localStorage.setItem('user', JSON.stringify(response['user']));
        // window.location.href = "/";
        navigate("/languageSelection");
      });
    } else {
      swal("Failed", response.ans, "error");
    }
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={0} >
        <Container className='container' maxWidth="sm" sx={{ mb: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 5, mt: 4 }}>
          <form className={classes.root}  onSubmit={handleSubmit} >
            <h1>Admin Dashboard</h1>
            <TextField
              label="Username"
              variant="filled"
              type="text"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="off" 
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <div>
              <Button variant="contained" onClick="">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
        </Container>
      </Grid>
    </Container>
  );
};

export default AdminLogin;