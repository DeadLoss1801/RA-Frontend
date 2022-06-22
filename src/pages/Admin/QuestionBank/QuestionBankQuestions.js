import React, { useState } from 'react'
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

  const questions = [
    {
      name: 'question1',
      value: 'question1',
    },
    {
      name: 'question2',
      value: 'question2',
    },
    {
      name: 'question3',
      value: 'question3',
    },
    {
      name: 'question4',
      value: 'question4',
    },
    {
      name: 'question5',
      value: 'question5',
    },
  ]

  const [selectedQuestion,setSelectedQuestion] = useState("");
  const [selectedQuestionText,setSelectedQuestionText] = useState("");
  const [option1,setOption1] = useState("");
  const [option2,setOption2] = useState("");
  const [option3,setOption3] = useState("");
  const [option4,setOption4] = useState("");
  const [correctOption,setCorrectOption] = useState("");
  const [marks,setMarks] = useState("");

  const handleChange = (e) =>
  {
    setSelectedQuestion(e.target.value);
  }

  return (
    <Grid container spacing={0} sx={{backgroundColor:"Lightblue"}}>
        <Container className='container-question-bank' maxWidth="sm"  sx={{mb:4,textAlign:"center",backgroundColor:"white" , borderRadius:2 , boxShadow:5 , mt:4}}>
        <FormControl className="Bx" sx={{ m: 1, minWidth: 250 }} >
          <InputLabel  id="demo-simple-select-helper-label">Qusetions</InputLabel>
          <Select labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper" onChange={handleChange} value={selectedQuestion}>
            {questions.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <p>{selectedQuestion}</p>
        <br></br>
        <br></br>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 500}} id="outlined-basic" label="Question"  multiline maxRows={100} variant="filled"  onChange={e => setSelectedQuestionText(e.target.value)}/>
        <p>{selectedQuestionText}</p>
        <br></br><br></br>
      
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 1" required multiline maxRows={100}  variant="filled" onChange={e => setOption1(e.target.value)}/>
        <p>{option1}</p>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 2" required multiline maxRows={100} variant="filled"  onChange={e => setOption2(e.target.value)}/>
        <p>{option2}</p>
        <br></br>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 3" required multiline maxRows={100} variant="filled" onChange={e => setOption3(e.target.value)}/>
        <p>{option3}</p>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 4" required multiline maxRows={100} variant="filled" onChange={e => setOption4(e.target.value)}/>
        <p>{option4}</p>
        <br></br><br></br>
        <TextField className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Correct Answer" variant="filled"  onChange={e => setCorrectOption(e.target.value)} />
        <p>{correctOption}</p>
        <br></br> <br></br>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Mark" required multiline maxRows={100} variant="filled" />
        <p>{marks}</p>
        <br></br> <br></br>
       
        <Button type="submit" variant="contained" color="primary" onChange={e => (setMarks(e.target.value))}>
            Submit
          </Button>
          <br></br> <br></br>
        </Container>
    </Grid>
  )
}

export default QuestionBankQuestions;