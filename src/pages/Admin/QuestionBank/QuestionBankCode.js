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
import { Link, useNavigate, useParams } from 'react-router-dom';

function QuestionBankCode() {

  const navigate = useNavigate();


  const codes = [
    {
      name: 'code1',
      value: 'code1',
    },
    {
      name: 'code2',
      value: 'code2',
    },
  ]

 var params = useParams();
 var nextCode = "dummy";

 if(params.type==="code1")
 {
  nextCode = "code2";
 }
 else if(params.type === "code2")
 {
  nextCode= "code3";
 }
 


  // const [code,setCode] = useState("");
  const [selectedcode, setSelectedCode] = useState("");
  const [code_image, setcode_image] = useState();
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [codeTimer, setcodeTimer] = useState();
  const [questionTimer, setquestionTimer] = useState();
  const [code_text, setcode_text] = useState("");
  const [fqblid, setfqblid] = useState(1);

  const code_time = parseInt(codeTimer);
  const question_time = parseInt(questionTimer);
  //var num = 1;
  

  const handleImage = (e) => {
    setcode_image(e.target.files[0]);
   
    setIsImageSelected(true);

  }
  console.log(code_image);
  const handleSubmit = (e) => {
    e.preventDefault();
    // var formdata = new FormData();
    // formdata.append("code_text", code_text);
    // formdata.append("code_time", code_time);
    // formdata.append("question_time", question_time);
    // formdata.append("code_image", code_image);

    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };

    // fetch("https://summerinternshipproject.pythonanywhere.com/code/", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

    
      navigate(`/question/${params.lev}/${params.type}/1`)
    
  };


  return (
    
    <Grid container spacing={0} sx={{ backgroundColor: "Lightblue" }}>
      <Container className='container-question-bank' maxWidth="sm" sx={{ mb: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 5, mt: 4 }}>
        <FormControl className="Bx" sx={{ m: 1, minWidth: 250 }} >
          <InputLabel id="demo-simple-select-helper-label">Code</InputLabel>
          <Select labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper" onChange={e => setSelectedCode(e.target.value)} value={selectedcode}>
            {codes.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
            ))}
          </Select>
          <p>{selectedcode}</p>
        </FormControl>
        <br></br>
        <br></br>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 500 }} id="outlined-basic" label="Code Instruction" multiline maxRows={100} variant="filled" onChange={e => setcode_text(e.target.value)} />

        <p>{code_text}</p>
        <br></br><br></br>

        <TextField type="number" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Code Timer" required multiline maxRows={100} variant="filled" onChange={e => setcodeTimer(e.target.value)} />
        <p>{codeTimer}</p>
        <TextField type="number" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Question Timer" required multiline maxRows={100} variant="filled" onChange={e => setquestionTimer(e.target.value)} />
        <p>{questionTimer}</p>
        <br></br>
        <br></br>

        <input type="file" id="select-image" onChange={handleImage} />

        <label htmlFor="select-image">
        </label>
        <br></br>
        <br></br>
        
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Next
        </Button>
       
        <br></br> <br></br>
      </Container>
    </Grid>
  )
}

export default QuestionBankCode;