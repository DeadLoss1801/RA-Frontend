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

function QuestionBankQuestions() {
  return (
    <Grid container spacing={0} sx={{backgroundColor:"Lightblue"}}>
        <Container className='container-question-bank' maxWidth="sm"  sx={{mb:4,textAlign:"center",backgroundColor:"white" , borderRadius:2 , boxShadow:5 , mt:4}}>
        <FormControl className="Bx" sx={{ m: 1, minWidth: 250 }} >
          <InputLabel  id="demo-simple-select-helper-label">Qusetions</InputLabel>
          <Select labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"  onChange="">
            <MenuItem value="Question1">Question1</MenuItem>
            <MenuItem value="Question2">Question2</MenuItem>
            <MenuItem value="Question3">Question3</MenuItem>
            <MenuItem value="Question4">Question4</MenuItem>
            <MenuItem value="Question5">Question5</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <br></br>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 500}} id="outlined-basic" label="Question1"  multiline maxRows={100} variant="filled" />
        <br></br><br></br>
      
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 1" required multiline maxRows={100}  variant="filled" />
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 2" required multiline maxRows={100} variant="filled" />
        <br></br>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 3" required multiline maxRows={100} variant="filled" />
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 4" required multiline maxRows={100} variant="filled" />
        <br></br><br></br>
        <TextField className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Correct Answer" variant="filled" />
      
        <br></br> <br></br>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Mark" required multiline maxRows={100} variant="filled" />
        
        <br></br> <br></br>
       
        <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <br></br> <br></br>
        </Container>
    </Grid>
  )
}

export default QuestionBankQuestions;