import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
  MenuItem,
  makeStyles,
  IconButton,
  Input,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Container, Typography } from "@mui/material";
import QuestionBankLevel from './QuestionBankLevel';


function QuestionBankLanguage() {

  const navigate  = useNavigate();
  const options = [
    {
      name: 'C++',
      value: '1',
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
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (e) => {
    setSelectedValue(e.target.value)
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

      navigate('/levels/easy');
  }

  

  return (
    <>
  
      <Grid container spacing={0} sx={{ backgroundColor: "Lightblue" }}>
      <Container className='container-question-bank' maxWidth="sm" sx={{ mb: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 5, mt: 4 }}>
        <Typography>QuestionBank</Typography>
        <FormControl sx={{ m: 1, minWidth: 250 }}   >
          <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
          <Select className="Bx" labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper" onChange={handleChange} value={selectedValue}>
            {options.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>

            )
            )}
          </Select>
          <p>{selectedValue}</p>
        </FormControl>
        <br></br>
        <br></br>

      
        <Button type="submit" variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleSubmit} >
          Next
        </Button>

        
       
      </Container>
    </Grid>
   
   
    </>
  )
}

export default QuestionBankLanguage;