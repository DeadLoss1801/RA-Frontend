import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';

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

const AdminLogin = () => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const submitForm = (e) =>
  {
    e.preventDefault();
    console.log("hello Admin");
    console.log(username);
    console.log(password);
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={0} >
        <Container className='container' maxWidth="sm" sx={{ mb: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 5, mt: 4 }}>
          <form className={classes.root} onSubmit="">
            <h1>Admin Dashboard</h1>
            <TextField
              label="Username"
              variant="filled"
              type="text"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div>
              <Button variant="contained" onClick="">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" onClick={submitForm}>
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