import { Container ,Box} from "@mui/system";
import React from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { createTheme ,ThemeProvider} from '@mui/material/styles';

import { Button, Typography } from "@mui/material";
import Timer from "../components/Timer";

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



const Image = styled('img')({
 
  objectFit: 'cover',  
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width:"80%"


});


const Read =()=>{

return (
  <ThemeProvider theme={theme}>
    <Container  maxWidth="lg" >
    
    <Box  sx={{m:2,pb:4}}>
      <Grid container spacing={2} >
        
        <Grid item xs={8}  >
          <Box sx={{bgcolor: '#212121', width:"100%",
          height:500,
          overflow:"auto",
          border:"0",
          borderRadius:"1%",
          boxShadow: 5,
          }}  >
          
          <Image  src="https://www.journaldev.com/wp-content/uploads/2012/12/compile-run-java-program-from-java-program-eclipse.jpg"></Image>
          
          </Box>
        </Grid>
        <Grid item xs={4}>
        <Box   sx={{bgcolor: 'secondary.light', width:"100%",
        height:500,
         boxShadow: 5,
         borderRadius:"2%",
         }}>
         
         <Typography variant="h4" sx={{color: "#ffffff",fontWeight: 'Regular' ,p:3}}>Timer</Typography>
         
           <Timer/> 
         

         </Box>
        </Grid>
        <Grid item xs={12}>
        <Box  sx={{bgcolor: '#fffde7', width:"100%",
        height:100,
        boxShadow: 5,borderRadius:"8px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"}}>
        
        
        <Button variant="contained" size="large" color="secondary" sx={{mr:2}} >Back</Button>
      
       

       <Button variant="contained" color="success" size="large" sx={{ml:2}} >Next</Button>
        
        </Box>
        </Grid>


      </Grid>
      
      </Box>
    

     
    </Container>

   </ThemeProvider>

)


}

export default Read;
