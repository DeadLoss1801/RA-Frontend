import React from "react";

import { Box } from "@mui/system";

import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import RadioGroup from '@mui/material/RadioGroup';
import { useState } from "react";


const Question5 = (props) =>{

// const [value,setValue] = useState("");
// console.log(value);
const handleChange = (e)=>{

    // setValue(e.target.value);

    props.onChangeResponse5(e.target.value);
}

return (

    <Box sx={{mt:2}}>
      
    <Paper elevation={3} sx={{width:"100%",height:350}}>
     <Box sx={{p:3}}>
     <Typography variant="h6" >{`Q.5  ${props.item.question_text}`}</Typography>
     <Box sx={{ typography: 'subtitle2',mt:2 }}>
     
      <FormControl>
        
        <FormLabel id="question1-response">Choose a correct option</FormLabel>
        <RadioGroup  aria-labelledby="question1-response"
         name="question1-container"
         value={props.response5}
         onChange={handleChange}
         >
        
        <FormControlLabel control={<Radio />}   label={props.item.option1}  value={props.item.option1}     />
        <FormControlLabel control={<Radio />}   label={props.item.option2}  value={props.item.option2}     />
        <FormControlLabel control={<Radio />}   label={props.item.option3}  value={props.item.option3}     />
        <FormControlLabel control={<Radio />}   label={props.item.option4}  value={props.item.option4}     />     

        </RadioGroup>
        
      </FormControl> 

    


     </Box>

     </Box>

    </Paper>
    

   </Box>


);



}

export default Question5;