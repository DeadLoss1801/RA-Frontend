
import React from "react";

import { Box } from "@mui/system";

import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import RadioGroup from '@mui/material/RadioGroup';


const Question = (props) => {



    const [value, setValue] =React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  


    return (
       

     <Box sx={{mt:2}}>
      
     <Paper elevation={3} sx={{width:"100%",height:350}}>
      <Box sx={{p:3}}>
      <Typography variant="h6" >{props.item.ques}</Typography>
      <Box sx={{ typography: 'subtitle2',mt:2 }}>
      
      <FormControl>
     <FormLabel id="demo-controlled-radio-buttons-group">Choose a correct option</FormLabel>
     <RadioGroup
       aria-labelledby="demo-controlled-radio-buttons-group"
       name="controlled-radio-buttons-group"
       value={value}
       onChange={handleChange}
     >
       <FormControlLabel value={props.item.option1} control={<Radio />} label={props.item.option1} />
       <FormControlLabel value={props.item.option2} control={<Radio />} label={props.item.option2} />
       <FormControlLabel value={props.item.option3} control={<Radio />} label={props.item.option3} />
       <FormControlLabel value={props.item.option4} control={<Radio />} label={props.item.option4} />
     </RadioGroup>
   </FormControl>

     


      </Box>

      </Box>

     </Paper>
     

    </Box>



    );
}

export default Question;