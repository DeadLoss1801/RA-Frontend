import React, { createContext, useEffect } from "react";
import { Box, Container, experimentalStyled, Grid, Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';
import styled from 'styled-components';

//const Lev = createContext();

const Section=styled.section`
display:flex;
margin:2rem;
`

const Layout = (props)=>{

  // const handleChangeLevel = (event) => {
  //   setLevel(event.target.value);
    
  // };

  // const handleChangeDuration = (event) => {
  //   setDuration(event.target.value);
  // };  

  // const handleChangeDate = (e) => {
  //   setLast_used(e.target.value);
    //return last_used;
//    handleHelp();
  //}

  // const data = {programming_language, level, duration, time, last_used};
  // console.log(data);
  // const handleDate = async e => {
    // e.preventDefault();
    // await handleChangeDate(e);
    //const checking = last_used === "" ? false : true;
    //const handleHelp = () => {
      //const data = {programming_language, level, duration, time, last_used};
      //const rel = await last_used;
    //   handleChangeDate(e);
    //   const newLast_used = last_used;    
    //   props.onhelper(newLast_used);  
    // }
    // if(checking) {
    //   handleHelp();
    // }
    // else {
    //   handleChangeDate(e);
    // }
    //handleHelp();
    
  //}

  // const newDate = last_used;
  // const handleHelpAgain = () => {
  //   const newData = {programming_language, level, duration, time, newDate}
  //   props.onhelper(newData); 
  // }    
    
  // console.log(data);
  
  // <Lev.Provider value="4">
  //   <Experiment />
  // </Lev.Provider>

  
  
  


return (
  <Section>

  
<Grid container spacing={2}  style={{padding:"10px",marginTop:"10px"}}>
<Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} style={{ padding: 6, height: 70 }}>
            <Typography variant="subtitle2">Language Name</Typography>
            <FormControl
              sx={{ m: 1, minWidth: 170 }}
              size="small"
            >
              <InputLabel id="demo-select-language">Select Language</InputLabel>
              <Select
                labelId="demo-select-language"
                id="demo-select-language"
                value={props.selectedLanguage}
                label="Language"
                onChange={(e) => { props.onLanguageChange(e.target.value) }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="C++">C++</MenuItem>
                <MenuItem value="Python">Python</MenuItem>
                <MenuItem value="JavaScript">JavaScript</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>

{/* <Grid item xs={2.4}> */}

{/* <Paper elevation={3} style={{padding:6,height:70}}>
 
<Typography variant="subtitle2" >Language Name</Typography> 
<FormControlLabel sx={{ m: 1, minWidth: 170 }} value="C++" control={<Radio />} label={props.lang} />

</Paper>  */}


{/* </Grid> */}

<Grid item xs={12} md={6} lg={3}>

<Paper elevation={3} style={{padding:6,height:70}}>
 
<Typography variant="subtitle2" >Level</Typography> 
<FormControl sx={{ m: 1, minWidth: 170,
'@media (min-width:600px)': {
  minWidth: "10vw",
},


}} size="small">
      <InputLabel id="demo-select-small">Level</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={props.level}
        defaultValue={"None"}
        label="Level"
        onChange={(e) => {props.onChangeLevel(e.target.value)}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="1">Novice</MenuItem>
        <MenuItem  value="2">Intermediate</MenuItem>
        <MenuItem  value="3">Advance</MenuItem>
      </Select>
    </FormControl>

</Paper> 

  </Grid>


  <Grid item xs={12} md={6} lg={3}>
 
  <Paper elevation={3} style={{padding:6,height:70}}>
 
<Typography variant="subtitle2" >Duration</Typography> 
<FormControl sx={{ m: 1, minWidth: 170,

'@media (min-width:600px)': {
  minWidth: "10vw",
},}} size="small">
      <InputLabel id="demo-select-small">Duration</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={props.duration}
        
        label="duration"
        onChange={(e) => {props.onChangeDuration(e.target.value)}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="1"> &lt; 1 years</MenuItem>
        <MenuItem  value="2">1 - 3 years</MenuItem>
        <MenuItem  value="3">&gt; 3years</MenuItem>
      </Select>
    </FormControl>

</Paper> 


  </Grid>
  <Grid item xs={12} md={6} lg={3}>
    
  <Paper elevation={3} style={{padding:6,height:70}}>
 
 <Typography variant="subtitle2" >Time</Typography> 
 <TextField id="outlined-basic" type="number" 
 value={props.time} onChange={(e) => {props.onChangeTime(e.target.value)}} 
 label="Time(in months)" InputProps={{inputProps:{max: 10000, min:0}}}
 variant="outlined" size="small" sx={{ m: 1, minWidth: 170,
 
  '@media (min-width:600px)': {
    minWidth: "10vw",
  },}} />
 
 </Paper> 

  </Grid>

  <Grid item xs={12} md={6} lg={3}>
  <Paper elevation={3} style={{padding:6,height:70}}>

  <Typography variant="subtitle2" >Last Used</Typography>  
  <TextField
        id="date"
        //onClick={handleDate}
        label="LastUsed"
        type="date"
        size="small"
        value={props.last_used}
        onChange={(e) => {props.onChangeDate(e.target.value)}}
        className="date"
        sx={{ m: 1, minWidth: 170,
          '@media (min-width:600px)': {
            minWidth: "10vw",
          },
        }}
        
        InputLabelProps={{
          shrink: true,
        }}

      />

      </Paper>

 
  </Grid>
</Grid>

 
</Section>
)


}
export default Layout;
//export {Lev};