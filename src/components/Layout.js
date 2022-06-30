import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';


const Layout = (props)=>{


  
  // const handleChangeLevel = (event) => {
  //   setLevel(event.target.value);
  // };

  // const [duration, setDuration] = React.useState('');

  // const handleChangeDuration = (event) => {
  //   setDuration(event.target.value);
  // };  

return (

<Grid container spacing={2}  style={{padding:"10px",marginTop:"10px"}} >

<Grid item xs={2.4}>

<Paper elevation={3} style={{padding:6,height:70}}>
 
<Typography variant="subtitle2" >Language Name</Typography> 
<FormControlLabel sx={{ m: 1, minWidth: 170 }} value="female" control={<Radio />} label="C++" />

</Paper> 


</Grid>

<Grid item xs={2.4}>

<Paper elevation={3} style={{padding:6,height:70}}>
 
<Typography variant="subtitle2" >Level</Typography> 
<FormControl sx={{ m: 1, minWidth: 170 }} size="small">
      <InputLabel id="demo-select-small">Level</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={props.level}
        
        label="Level"
        onChange={(e)=> { props.onChangeLevel(e.target.value) }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Novice</MenuItem>
        <MenuItem  value={2}>Intermediate</MenuItem>
        <MenuItem  value={3}>Advance</MenuItem>
      </Select>
    </FormControl>

</Paper> 

  </Grid>


  <Grid item xs={2.4}>
 
  <Paper elevation={3} style={{padding:6,height:70}}>
 
<Typography variant="subtitle2" >Duration</Typography> 
<FormControl sx={{ m: 1, minWidth: 170 }} size="small">
      <InputLabel id="demo-select-small">Duration</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={props.duration}
        
        label="duration"
        onChange={(e)=>{props.onChangeDuration(e.target.value)}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}> &lt; 1 years</MenuItem>
        <MenuItem  value={2}>1 - 3 years</MenuItem>
        <MenuItem  value={3}>&gt; 3years</MenuItem>
      </Select>
    </FormControl>

</Paper> 


  </Grid>
  <Grid item xs={2.4}>
    
  <Paper elevation={3} style={{padding:6,height:70}}>
 
 <Typography variant="subtitle2" >Time</Typography> 
 <TextField id="outlined-basic" 
 label="Outlined"
  variant="outlined" 
 size="small" sx={{ m: 1, minWidth: 170 }} 
 value={props.time}
 onChange={(e)=>{props.onChangeTime(e.target.value)}}
 
 />
 
 </Paper> 

  </Grid>

  <Grid item xs={2.4}>
  <Paper elevation={3} style={{padding:6,height:70}}>

  <Typography variant="subtitle2" >Last Used</Typography>  
  <TextField
        id="date"
        label="LastUsed"
        type="date"
        size="small"
        sx={{ m: 1, minWidth: 170 }}
        
        InputLabelProps={{
          shrink: true,
        }}
        
        value={props.lastused}
        onChange={(e)=>{props.onChangeLastused(e.target.value)}}
      />

      </Paper>



 
  </Grid>
</Grid>

 

)

}

export default Layout;