import React from "react";

import { Box } from "@mui/system";

import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import RadioGroup from '@mui/material/RadioGroup';


const Question3 = () =>{

return (

    <Box sx={{mt:2}}>
      
    <Paper elevation={3} sx={{width:"100%",height:350}}>
     <Box sx={{p:3}}>
     <Typography variant="h6" >loremjnmc  dnmnmfnmdf ndsmnmdn</Typography>
     <Box sx={{ typography: 'subtitle2',mt:2 }}>
     
     <FormControl>
    <FormLabel id="demo-controlled-radio-buttons-group">Choose a correct option</FormLabel>
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
    //   value={value}
    //   onChange={handleChange}
    >
      <FormControlLabel value="option1" control={<Radio />} label="option1" />
      <FormControlLabel value="option2" control={<Radio />} label="option2" />
      <FormControlLabel value="option3" control={<Radio />} label="option3" />
      <FormControlLabel value="option4" control={<Radio />} label="option4" />
    </RadioGroup>
  </FormControl>

    


     </Box>

     </Box>

    </Paper>
    

   </Box>


);



}

export default Question3;