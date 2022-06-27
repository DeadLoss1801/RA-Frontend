import React from "react";
import Paper from '@mui/material/Paper';
import {  Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import { ReadContext } from "../timeContext/checkTime";
// import {TimeContext} from "../timeContext/checkTime";

const Timer = (props)=>{

  // const b = useContext(TimeContext);
  // const b1 = useContext(ReadContext);
  
  const [time, setTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const startingMin = props.limit;
    let t = startingMin * 60;
    // console.log(startingMin);
    let x = setInterval(function() {

      let hours = Math.floor(t / 3600);
      let minutes = Math.floor(t / 60);
      let seconds = t % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      hours = hours < 10 ? '0' + hours : hours;
      
      // console.log(t);
      
      t--;
      
      //console.log(b.counterTime);      
      // if(b.counterTime === "true") {
      //   clearInterval(x);
      //   var record_time = startingMin - t;
      //   console.log("LastTime:",t);
      //   b1.counterReadDispatch(record_time);
        
      //   // b.counterDispatch("false");
      // }
      // else {
      
      setTime(hours + " : " + minutes + " : " + seconds);
      
      //console.log(t);
      
      if(t <= 0) {
        clearInterval(x);
        setTime("Time up");

        // console.log(props.typ);
        // navigate(`/quiztime/${props.typ}/${props.nex}`);
        // setOpen(true);
        //history.push("/quiztime");
        //browserHistory.push("/quiztime");
      
      }
    }, 1000)
    //b.counterDispatch("false");
    //console.log("is reaching!");

  }, [])

  
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