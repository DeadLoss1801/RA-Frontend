import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import { useState } from 'react';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

const API_BASE_URL = process.env.REACT_APP_API;

function QuestionBankLevel() {

  const navigate = useNavigate();
  const levels = [
    {
      name: 'Easy',
      value: "1",
    },
    {
      name: 'Medium',
      value: "2",
    },
    {
      name: 'Hard',
      value: "3",
    },
  ];

  var params = useParams();
  var nextLev = "dummy";

  if(params.lev === "easy")
  {
    nextLev = "medium";
  }
  else if(params.lev === "medium")
  {
    nextLev = "hard";
  }
  
  const [qlevel, setQlevel] = useState("")

  const handleChange = (e) => {
    setQlevel(e.target.value)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify({
    //   "qlevel": "1",
    //   "fqbid": 0
    // });

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };
    // fetch("https://assesment-web.onrender.com/questionbanklevel/", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

      const data = { qlevel };

      fetch(`${API_BASE_URL}/questionbanklevel/`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
       
        const questionBankId = data?.question_bank_level_id;
    
       
        if (questionBankId) {
          localStorage.setItem('question_bank_id', questionBankId);
        }
      })
      .catch(error => {
        console.error('Error fetching question bank data:', error);
      });
    
      
      navigate(`/code/${params.lev}/code1`);
    };
  
  const Title = styled('h1')({

    fontSize: "3rem",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",

  });




  return (
    // <Grid container spacing={0} sx={{ backgroundColor: "Lightblue" }}>
    //   <Container className='container-question-bank' maxWidth="sm" sx={{ mb: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 5, mt: 4 }}>
    //     <FormControl sx={{ m: 1, minWidth: 250 }}   >
    //       <InputLabel id="demo-simple-select-helper-label">Level</InputLabel>
    //       <Select className="Bx" labelId="demo-simple-select-helper-label"
    //         id="demo-simple-select-helper" onChange={handleChange} value={selectedLevel}>
    //         {levels.map(item => (
    //           <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
    //         )
    //         )}
    //       </Select>
    //       <p>{selectedLevel}</p>
    //     </FormControl>
    //     <br></br>
    //     <br></br>
        
    //     <Button type="submit" variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleSubmit}>
    //       Next
    //     </Button>
    
    //   </Container>
    // </Grid>


    <Container maxWidth="sm" sx={{
      height: "100vh", display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>


      <Box sx={{ m: 5 }}>
        <Title>Question Level</Title>
      </Box>

      <Paper elevation={6} sx={{ minWidth: "70%", minHeight: "50%" }}>
        <Box sx={{ minWidth: "50%", p: 3, mt: 4 }}>



          <TextField
            
            select
            label="Level"
            onChange={handleChange} value={qlevel}
            helperText="Please Select a Level"
            fullWidth
          >
            {levels.map(item => (
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


  )
}

export default QuestionBankLevel;