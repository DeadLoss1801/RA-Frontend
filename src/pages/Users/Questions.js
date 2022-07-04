import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Timer from '../../components/Timer';
import Grid from '@mui/material/Grid';

import Question from "../../components/Question"
import { Button, Typography } from '@mui/material';

import { Box, Container } from "@mui/system";
import SliderQuestion from './SliderQuestion';
import Question1 from './UsersQuestions/Question1';
import Question2 from './UsersQuestions/Question2';
import Question3 from './UsersQuestions/Question3';
import { useEffect } from 'react';
import { useState } from 'react';
import Question4 from './UsersQuestions/Question4';
import Question5 from './UsersQuestions/Question5';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";




const theme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
    },
    secondary: {
      main: "#ba68c8",
    }
  },
});






const Questions = () => {

  const dispatch = useDispatch();
  const [response1,setResponse1] = useState(null);
  const [response2,setResponse2] = useState(null);
  const [response3,setResponse3] = useState(null);
  const [response4,setResponse4] = useState(null);
  const [response5,setResponse5] = useState(null);
  const [isValid, setIsValid] = useState(false);

 
  const timeAllotedForQuestions = useSelector(state => state.timeAllotedForQuestions);
  const recordedTimes = useSelector(state => state.recordedTimes);
  const recordedTimes1 = useSelector(state => state.recordedTimes1);


  console.log(`Response 1  =   ${response1}`);
  console.log(`Response2  = ${response2}`);
   console.log(`Response 3 =   ${response3}`);
   console.log(`Response4  = ${response4}`);
   console.log(`Response 5  =   ${response5}`);


  var leve = useParams();
  var levelNext = "dummy";
  if(leve.test === "second") {
    if(leve.type === "Easy") {
      levelNext = "Medium";
    }
    if(leve.type === "Medium") {
      levelNext = "Hard";
    }
    
  }

  var lev = useParams();
  if(lev.type === "Easy") {
    lev = 1;
  }
  else if(lev.type === "Medium") {
    lev = 2;
  }
  else {
    lev = 3;
  }

  var codeno = useParams();
  if(codeno.test === "first") {
    codeno = 0;
  }
  else {
    codeno = 1;
  }

  const response1Handler = (choosen_option)=>{

        setResponse1(choosen_option);
        

  }

  const response2Handler = (choosen_option)=>{

    setResponse2(choosen_option);
    

}

const response3Handler = (choosen_option)=>{

  setResponse3(choosen_option);
  

}

const response4Handler = (choosen_option)=>{

  setResponse4(choosen_option);
  

}

const response5Handler = (choosen_option)=>{

  setResponse5(choosen_option);
  

}


  const [items, setItems] = useState([]);
  const [valid,setValid] = useState(false);

  async function getData() {

    let updated = [];
    for (let val = 0; val <= 4; val++) {
      const response = await fetch(`https://summerinternshipproject.pythonanywhere.com/getquestion/?question=${val}`);
      const data = await response.json();

      updated.push(data);

      // console.log(updated.length);

    }


    setItems(updated);
    setValid(true);
    setIsValid(true);


  }
  useEffect(() => {


    
  
    getData();


    

  },[]);




  const handleSubmit = ()=>{
   
    dispatch({type: "BUTTON_CLICKED"});
    if(leve.test === "second" && leve.type === "Hard") {
      dispatch({ type: "SETTING_REGISTERED_NAME", val: "" });
    }
     let response = [response1,response2,response3,response4,response5];

     fetch(`https://summerinternshipproject.pythonanywhere.com/time/?level=${lev}&code_no=${codeno}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          question_read_time: (recordedTimes1/60).toFixed(1),
          code_read_time: (recordedTimes/60).toFixed(1)
      })
    });

    for(var x=0;x<=4;x++)
    {

    fetch(`https://summerinternshipproject.pythonanywhere.com/score/?level=${lev}&code_no=${codeno}&question_no=${x}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
          // fevid:0,
          // fqid:0,
          selected_answer: response[x],
          // marks:0,
          // decision:"1"
       
      })
    });


    // console.log(response[x]);

  }


  }

  return (

    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ bgcolor: "primary.main", height: "325vh", mt: 4, mb: 2, borderRadius: 2, boxShadow: 7 }}>

        {/* <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Typography variant="h3">Questions</Typography>
      
       <Typography variant="h6">Timer</Typography>
     </Box> */}

        <Grid container spacing={2}  >

          <Grid item xs={8}  >
            <Typography variant="h3" sx={{ color: "#ffffff" }}>Questions</Typography>

          </Grid>

          <Grid item xs={4}  >

          <Typography sx={{textAlign:"center",color:"#ffffff"}} variant="h6">Timer</Typography>
        {isValid && <Timer limit={timeAllotedForQuestions} autoSubmit={handleSubmit} />}
          
        </Grid>

        </Grid>


        {/* <SliderQuestion /> */}
     

      {valid && <Question1 response1={response1} onChangeResponse1={response1Handler}  item={items[0]} />}  
        
         {valid && <Question2 item={items[1]}  response2={response2}  onChangeResponse2={response2Handler} />} 

        {valid && <Question3 item={items[2]} response3={response3}  onChangeResponse3={response3Handler}/>}
        

        {valid && <Question4 item={items[3]}  response4={response4}  onChangeResponse4={response4Handler} />} 

{valid && <Question5 item={items[4]} response5={response5}  onChangeResponse5={response5Handler}/>}


        <Box sx={{
          bgcolor: '#fffde7', width: "100%",
          height: 100,
          boxShadow: 5, borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3
        }}>


          <Button variant="contained" size="large" color="secondary" sx={{ mr: 2 }} >Back</Button>



         

       <Link to={leve.test === "second" ? (leve.type === "Hard" ? "/" : `/level/${levelNext}`) : `/codeRead/${leve.type}/code1`}>
        <Button variant="contained" color="success" size="large" sx={{ml:2}} onClick={handleSubmit} >Submit & next</Button>
        </Link>
        
        </Box>

      </Container>

    </ThemeProvider>
  );
}

export default Questions;