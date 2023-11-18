import React, { useEffect, useState } from 'react'
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
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';


const Title = styled('h1')({

  fontSize: "2.5rem",
  display: "flex",
  alignItem: "center",
  justifyContent: "center",

});




function QuestionBankQuestions() {
  const navigate = useNavigate();
  var ques = 0;


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

  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [question_text, setquestion_text] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correct_option, setcorrect_option] = useState("");
  const [questionMarks, setquestionMarks] = useState("");
  const [questionTimer, setquestionTimer] = useState(10);


  var params = useParams();

  
   var nextCo = "temp";
   var nextLev = "temp1"
   if(params.type === "code1") {
    nextCo = "code2";
  }
  else if (params.type === "code2") {
    if (params.lev === "easy") {
      nextLev = "medium";
    }
    else if (params.lev === "medium") {
      nextLev = "hard";
    }
   }
  
  const marks = parseFloat(questionMarks);
  const question_time = parseInt(questionTimer);

  const handleChange = (e) => {
    setSelectedQuestion(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    ques++;
    const data = { question_text, option1, option2, option3, option4, correct_option, marks };

    console.log(data);
    fetch('https://assesment-web.onrender.com/question/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log('posted succesfully');
    })


    setSelectedQuestion("")
    setquestion_text("")
    setOption1("")
    setOption2("")
    setOption3("")
    setOption4("")
    setcorrect_option("")
    setquestionMarks("")
    

    if(ques === 5 && nextCo === "code2")
    {
      navigate(`/code/${params.lev}/${nextCo}`)
    }
    else if(ques === 5 && params.type === "code2") {
      if(params.lev === "hard") {
        navigate("/languageSelection");
      }
      else {
        navigate(`/levels/${nextLev}`);
      }
    }
    
  };


  return (
    // <Grid container spacing={0} sx={{ backgroundColor: "Lightblue" }}>
    //   <Container className='container-question-bank' maxWidth="sm" sx={{ mb: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 5, mt: 4 }}>
    //     <FormControl className="Bx" sx={{ m: 1, minWidth: 250 }} >
    //       <InputLabel id="demo-simple-select-helper-label">Qusetions</InputLabel>
    //       <Select labelId="demo-simple-select-helper-label"
    //         id="demo-simple-select-helper" onChange={handleChange} value={selectedQuestion}>
    //         {questions.map(item => (
    //           <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
    //         ))}
    //       </Select>
    //     </FormControl>
    //     <p>{selectedQuestion}</p>
    //     <br></br>
    //     <br></br>
    //     <TextField type="text" 

    //     value={question_text}

    //     className="Bx" sx={{ m: 1, minWidth: 500 }} id="outlined-basic" label="Question" multiline maxRows={100} variant="filled" onChange={e => setquestion_text(e.target.value)} />
    //     <p>{question_text}</p>
    //     <br></br><br></br>

    //     <TextField type="text" 
    //     value={option1}
    //     className="Bx" sx={{ m: 1, minWidth: 250 }} 
    //id="outlined-basic" label="Option 1" required multiline maxRows={100} 
    // variant="filled" onChange={e => setOption1(e.target.value)} />
    //     <p>{option1}</p>
    //     <TextField 
    //     value={option2}
    //     type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 2" required multiline maxRows={100} variant="filled" onChange={e => setOption2(e.target.value)} />
    //     <p>{option2}</p>
    //     <br></br>
    //     <TextField type="text"
    //     value={option3}
    //     className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 3" required multiline maxRows={100} variant="filled" onChange={e => setOption3(e.target.value)} />
    //     <p>{option3}</p>
    //     <TextField type="text"
    //     value={option4}
    //     className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Option 4" required multiline maxRows={100} variant="filled" onChange={e => setOption4(e.target.value)} />
    //     <p>{option4}</p>
    //     <br></br><br></br>
    //     <TextField 

    //     value={correct_option}
    //     className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Correct Answer" variant="filled" onChange={e => setcorrect_option(e.target.value)} />
    //     <p>{correct_option}</p>
    //     <br></br> <br></br>
    //     <TextField 
    //     value={questionMarks}
    //     type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Mark" required multiline maxRows={100} variant="filled" onChange={e => (setquestionMarks(e.target.value))} />
    //     <p>{questionMarks}</p>
    //     <br></br> <br></br>

    //     <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} >
    //       Submit
    //     </Button>
    //     <br></br> <br></br>
    //   </Container>
    // </Grid>


    <Container maxWidth="sm" sx={{
      height: "150vh", display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>


      <Box sx={{ m: 5 }}>
        <Title>Question Bank Questions</Title>
      </Box>

      <Paper elevation={8} sx={{ minWidth: "100%", maxHeight: "100%" }}>
        <Box sx={{ minWidth: "50%", p: 3, mt: 4 }}>



          <TextField
            id="outlined-select-currency"
            select
            label="Questions"
            onChange={handleChange} value={selectedQuestion}
            helperText="Please Select a Question Number"
            fullWidth
            variant="filled"
            sx={{ mb: 2 }}
          >
            {questions.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
            ))}
          </TextField>


          <TextField type="text"
            fullWidth
            variant="filled"
            sx={{ mb: 2 }}
            value={question_text}
            helperText="Please Type a Question"
            label="Type Question"
            required
            onChange={e => setquestion_text(e.target.value)} />


          <Box sx={{ display: "flex", justifyContent: "space-between" }}>



            <TextField type="text"
              value={option1}
              helperText="Please Provide option1"
              
              label="Option 1" required
              variant="filled"
              sx={{ mb: 2 }}
              onChange={e => setOption1(e.target.value)} />


            <TextField type="text"
              value={option2}
              helperText="Please Provide option2"
              label="Option 2" required
              variant="filled"
              sx={{ mb: 2 }}
              onChange={e => setOption2(e.target.value)} />


          </Box>


          <Box sx={{ display: "flex", justifyContent: "space-between" }}>



            <TextField type="text"
              value={option3}
              helperText="Please Provide option3"
              label="Option 3" required
              variant="filled"
              sx={{ mb: 2 }}
              onChange={e => setOption3(e.target.value)} />


            <TextField type="text"
              value={option4}
              helperText="Please Provide option4"
              label="Option 4" required
              variant="filled"
              sx={{ mb: 2 }}
              onChange={e => setOption4(e.target.value)} />


          </Box>



            <TextField type="text"
              value={correct_option}
               label="Correct Option" 
              variant="filled" 
              sx={{ mb: 2 }}
              helperText="Please Provide a Correct option"
              fullWidth
              required
              onChange={e => setcorrect_option(e.target.value)} />



       <TextField 
         value={questionMarks}
         type="text"  
          label="Marks" 
          required 
        variant="filled" 
        sx={{ mb: 2 }}
              helperText="Please Provide Marks"
              fullWidth
         onChange={e => (setquestionMarks(e.target.value))} />

          {/* <TextField type="text"   
           label="Code Instruction" 
           multiline maxRows={100} variant="filled" 
           fullWidth helperText="Please Provide Instruction"
           sx={{mb:2}}
           onChange={e => setcode_text(e.target.value)} /> */}







         
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

export default QuestionBankQuestions;