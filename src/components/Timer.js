import React from "react";
import Paper from '@mui/material/Paper';
import {  Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const Timer = (props)=>{

  const [time, setTime] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var params = useParams();

  const isButtonPressed = useSelector(state=>state.isButtonPressed);
  // console.log(isButtonPressed);
  

  var levelNext = "dummy";
  if(params.test === "second") {
    if(params.type === "Easy") {
      levelNext = "Medium";
    }
    if(params.type === "Medium") {
      levelNext = "Hard";
    }
    
  }
  
  const startingMin = props.limit;
  let t = startingMin * 60;
  var rc_time = 0;

  useEffect(() => {
    let interval;
    if(!isButtonPressed) {
      interval = setInterval(() => {
        let hours = Math.floor(t / 3600);
      let minutes = Math.floor(t / 60);
      let seconds = t % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      hours = hours < 10 ? '0' + hours : hours;
      
      console.log(t);
      
      t--;

      rc_time = startingMin*60 - t;
      console.log(rc_time, " line 57");

      if(params.option === "code0" || params.option === "code1") {
        dispatch({type: "SENDING_CODE_READING_TIME", val: rc_time});
      }
      else if(params.test === "first" || params.test === "second") {
        dispatch({type: "SENDING_QUESTION_ANSWERING_TIME", val: rc_time});
      }
            
      setTime(hours + " : " + minutes + " : " + seconds);

      if(t <= 0) {
        clearInterval(interval);
        setTime("Time up");
        if(params.option === "code0" || params.option === "code1") {
          navigate(`/quiztime/${props.typ}/${props.nex}`);
        }
        else if(params.test === "first") {
          navigate(`/codeRead/${props.typ}/code1`);
        }
        else {
          if(params.type === "Hard") {
            navigate("/");  
          }
          else {
            navigate(`/level/${levelNext}`);
          }
        }
      }

      }, 1000);
    }
    else if(isButtonPressed) {
      
      clearInterval(interval);
      dispatch({type: "BUTTON_CLICKED"});
      
    }
    return () => clearInterval(interval);
  }, [isButtonPressed])


    return (
      
     
        <Paper elevation={3}  sx={{width:"80%",height:50,display:"flex",
         alignItems:"center",justifyContent:"center",m:"auto"}} >
         {/* <Box sx={{p:1}}>

         <Typography variant="body1">23</Typography>
         <Typography variant="subtitle2" >hours</Typography>
         </Box>
           <Typography variant="h4">:</Typography>   */}
         <Box  sx={{p:1}}>

         <Typography variant="body1">{time}</Typography>
         {/* <Typography variant="subtitle2" >minutes</Typography> */}
         </Box>

         {/* <Typography variant="h4">:</Typography> 
         
         <Box  sx={{p:1}}>

         <Typography variant="body1">44</Typography>
         <Typography variant="subtitle2" >seconds</Typography>
         </Box> */}

         </Paper>

    );
}

export default Timer;