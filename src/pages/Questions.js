import * as React from 'react';

import { createTheme ,ThemeProvider} from '@mui/material/styles';

import Timer from '../components/Timer';
import Grid from '@mui/material/Grid';

import Question from "../components/Question"
import { Button, Typography } from '@mui/material';

import { Box, Container } from "@mui/system";
import SliderQuestion from './SliderQuestion';


const theme = createTheme({
    palette: {
      primary: {
        main: "#42a5f5",
      },
      secondary: {
        main:"#ba68c8",
      }
    },
  });
  

const Questions = ()=>{



  


    return (
    
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg" sx={{bgcolor:"primary.main",height:"100vh",mt:4,mb:2,borderRadius:2,boxShadow:7}}>

     {/* <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Typography variant="h3">Questions</Typography>
      
       <Typography variant="h6">Timer</Typography>
     </Box> */}

     <Grid container spacing={2}  >
        
        <Grid item xs={8}  >
        <Typography variant="h3" sx={{color:"#ffffff"}}>Questions</Typography>

        </Grid>

        <Grid item xs={4}  >
        
        <Typography sx={{textAlign:"center",color:"#ffffff"}} variant="h6">Timer</Typography>
        <Timer/>
          
        </Grid>

      </Grid>
       

       <SliderQuestion />


       <Box  sx={{bgcolor: '#fffde7', width:"100%",
        height:100,
        boxShadow: 5,borderRadius:"8px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        mt:3}}>
        
        
        <Button variant="contained" size="large" color="secondary" sx={{mr:2}} >Back</Button>
      
       

       <Button variant="contained" color="success" size="large" sx={{ml:2}} >Submit & next</Button>
        
        </Box>

    </Container>

    </ThemeProvider>
    );
}

export default Questions;