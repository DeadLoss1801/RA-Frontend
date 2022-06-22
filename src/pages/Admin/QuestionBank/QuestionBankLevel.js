import React from 'react'
import { Link } from 'react-router-dom';
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
  import {useState} from 'react';

function QuestionBankLevel() {

   
  const levels = [
    {
      name: 'Easy',
      value: 'Easy',
    },
    {
      name: 'Medium',
      value: 'Medium',
    },
    {
      name: 'Hard',
      value: 'Hard',
    },
  ];


  const [Level,setLevel] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("")

  const handleChange = (e) =>
  {
    setSelectedLevel(e.target.value)
  }

  return (
    <Grid container spacing={0} sx={{backgroundColor:"Lightblue"}}>
        <Container className='container-question-bank' maxWidth="sm"  sx={{mb:4,textAlign:"center",backgroundColor:"white" , borderRadius:2 , boxShadow:5 , mt:4}}>
        <FormControl sx={{ m: 1, minWidth: 250}}   >
          <InputLabel id="demo-simple-select-helper-label">Level</InputLabel>
          <Select className="Bx" labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper" onChange={handleChange}  value={selectedLevel}>
            {levels.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>        
            )
            )}
          </Select>
          <p>{selectedLevel}</p>
        </FormControl>
        <br></br>
        <br></br>
        <Link to={"/code"} >
        <Button type="submit" variant="contained" color="primary" sx={{mb:2}}>
            Next
          </Button>
          </Link>
        </Container>
    </Grid>
  )
}

export default QuestionBankLevel;