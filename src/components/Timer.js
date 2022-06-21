import React from "react";
import Paper from '@mui/material/Paper';
import {  Typography } from "@mui/material";
import { Box } from "@mui/system";


const Timer = ()=>{

    return (
     
        <Paper elevation={3}  sx={{width:"80%",height:50,display:"flex",
         alignItems:"center",justifyContent:"center",m:"auto"}} >
         <Box sx={{p:1}}>

         <Typography variant="body1">23</Typography>
         <Typography variant="subtitle2" >hours</Typography>
         </Box>
           <Typography variant="h4">:</Typography>  
         <Box  sx={{p:1}}>

         <Typography variant="body1">59</Typography>
         <Typography variant="subtitle2" >minutes</Typography>
         </Box>

         <Typography variant="h4">:</Typography> 
         
         <Box  sx={{p:1}}>

         <Typography variant="body1">44</Typography>
         <Typography variant="subtitle2" >seconds</Typography>
         </Box>

         

         </Paper>

    );
}

export default Timer;