import React from 'react'
import {Link} from 'react-router-dom';
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
  return (
    <Grid container spacing={0} sx={{backgroundColor:"Lightblue"}}>
        <Container className='container-question-bank' maxWidth="sm"  sx={{mb:4,textAlign:"center",backgroundColor:"white" , borderRadius:2 , boxShadow:5 , mt:4}}>
        <Typography>QuestionBank</Typography>
        <FormControl sx={{ m: 1, minWidth: 250}}  >
          <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
          <Select className="Bx" labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper" onChange="" >
            <MenuItem value="C">C</MenuItem>
            <MenuItem value="C++">C++</MenuItem>
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value="Python">Python</MenuItem>
            <MenuItem value="JavaScript">JavaScript</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <br></br>
        
        <Link to={"/level"} >
        <Button type="submit" variant="contained" color="primary" sx={{mb:2}}>
            Next
          </Button>
          </Link>
        </Container>
    </Grid>
  )
}

export default QuestionBankLanguage;