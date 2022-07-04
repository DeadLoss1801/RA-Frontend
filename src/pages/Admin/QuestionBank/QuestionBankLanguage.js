import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import {
//   MenuItem,
//   makeStyles,
//   IconButton,
//   Input,
// } from "@material-ui/core";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Container, MenuItem, Typography } from "@mui/material";
import QuestionBankLevel from './QuestionBankLevel';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

function QuestionBankLanguage() {

  const navigate = useNavigate();
  const options = [
    {
      name: 'C++',
      value: '2',
    },
    // {
    //   name: 'C',
    //   value: 'C',
    // },
    // {
    //   name: 'Java',
    //   value: 'Java',
    // },
    // {
    //   name: 'Python',
    //   value: 'Python',
    // },
    // {
    //   name: 'Javascript',
    //   value: 'Javascript',
    // },
  ];

  const [Language, setLanguage] = useState("");
  const [admin_programming_language, setadmin_programming_language] = useState("");
  const handleChange = (e) => {
    setadmin_programming_language(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    // var formdata = new FormData();
    // formdata.append("admin_programming_language", "1");

    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };

    // fetch("https://summerinternshipproject.pythonanywhere.com/questionbank/", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));


// const data={admin_programming_language}

// fetch("https://summerinternshipproject.pythonanywhere.com/questionbank/", 
// {
//   method: 'POST', 
//   // credentials:'same-origin',
//   headers: {
//     'Content-Type': 'application/json'
   
//   },
//   body:      JSON.stringify(data),
// })
// .then(res=>console.log("success"))
// .catch(error => console.log(error));

    navigate('/levels/easy');
  }

  const Title = styled('h1')({

    fontSize: "3rem",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",

  });

  return (
    <>


      <Container maxWidth="sm" sx={{
        height: "100vh", display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}>


        <Box sx={{ m: 5 }}>
          <Title>Question Bank</Title>
        </Box>

        <Paper elevation={6} sx={{ minWidth: "70%", minHeight: "50%" }}>
          <Box sx={{ minWidth: "50%", p: 3, mt: 4 }}>


            
            <TextField
              id="outlined-select-currency"
              select
              label="Language"
              onChange={handleChange} value={admin_programming_language}
              helperText="Please Select a Language"
              fullWidth
            >
              {options.map(item => (
                <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>

              )
              )}
            </TextField>


            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
              <Button type="submit" variant="contained" color="primary" size="large" onClick={handleSubmit} >
                Next
              </Button>
            </Box>


          </Box>

        </Paper>





      </Container>



    </>
  )
}


export default QuestionBankLanguage;