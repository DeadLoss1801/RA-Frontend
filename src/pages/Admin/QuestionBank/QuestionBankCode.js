import React from 'react'
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
import { Link } from 'react-router-dom';

function QuestionBankCode() {
  return (
    <Grid container spacing={0} sx={{backgroundColor:"Lightblue"}}>
        <Container className='container-question-bank' maxWidth="sm"  sx={{mb:4,textAlign:"center",backgroundColor:"white" , borderRadius:2 , boxShadow:5 , mt:4}}>
        <FormControl className="Bx" sx={{ m: 1, minWidth: 250 }} >
          <InputLabel  id="demo-simple-select-helper-label">Code</InputLabel>
          <Select labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"  onChange="">
            <MenuItem value="Question1">Code1</MenuItem>
            <MenuItem value="Question2">Code2</MenuItem>
            
          </Select>
        </FormControl>
        <br></br>
        <br></br>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 500}} id="outlined-basic" label="Code Instruction"  multiline maxRows={100} variant="filled" />
        <br></br><br></br>
      
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Code Timer" required multiline maxRows={100}  variant="filled" />
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Question Timer" required multiline maxRows={100} variant="filled" />
        <br></br>
        <br></br>
        
        <input accept="image/*" type="file" id="select-image" />
  <label htmlFor="select-image">
    {/* <Button variant="contained" color="primary">
      Upload Image
    </Button> */}
  </label>
        <br></br>
        <br></br>
        <Link to={"/question"}>
        <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
          </Link>
          <br></br> <br></br>
        </Container>
    </Grid>
  )
}

export default QuestionBankCode;