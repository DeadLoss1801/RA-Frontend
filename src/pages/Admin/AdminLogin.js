import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Box } from '@mui/system';
import {Paper} from '@mui/material';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
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



 const dispatch = useDispatch();

const img_url="data:image/png;base64,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";

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
        
        dispatch({type:"ADMIN_NAVBAR"});



      });
    } else {
      swal("Failed", response.ans, "error");
    }
  }




  const Image = styled("img")({
    borderRadius:"50%",
    maxWidth:"15%",
    maxHeight:"15%"
   
   });
   
   const Description = styled("h2")({
   
   fontSize:"2.5rem",
  //  textAlign:"center",
  //  transform: "scale(1, 1.5)",
  //  letterSpacing:2
   
     
   })

  return (
   
    <Container maxWidth="sm"  >

      <Box >
    
      <Box sx={{display:"flex",mt:4,ml:8,mb:2}}>
      <Image src={img_url}></Image>
      <Box sx={{display:"flex",alignItems:"center",
      justifyContent:"center",ml:2}}>
      <Description>IIIT VADODARA</Description>
      </Box>
      
      </Box> 
     


      {/* <Grid container spacing={0} > */}
        {/* <Container className='container' maxWidth="sm" 
        sx={{ mb: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 5, mt: 4 }}> */}
          
         <Box sx={{m:4,p:1,
  
         backgroundColor:"white",borderRadius: 2, boxShadow: 5,}}>
         <Paper elevation={5}>
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
          </Paper>
          </Box>



          </Box>
          
        {/* </Container> */}
      {/* </Grid> */}
    </Container>
   
    
  );
};

export default AdminLogin;