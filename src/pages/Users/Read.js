import { Container ,Box} from "@mui/system";
import React, { useContext } from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { createTheme ,ThemeProvider} from '@mui/material/styles';

import { Button, Typography, useStepContext } from "@mui/material";
import Timer from "../../components/Timer";
import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


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

const Read = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [codedata, setCodedata] = useState(null);
  //const [isLoading, setIsLaoding] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const mainUrl = "https://summerinternshipproject.pythonanywhere.com";

  var levv = useParams();
  var lev = useParams();
  if(lev.type === "Easy") {
    lev = 1;
  }
  else if(lev.type === "Medium") {
    lev = 2;
  }
  else {
    lev = 3;
  }

  var codeno = useParams();
  var quizNext = "dummy";
  if(codeno.option === "code0") {
    codeno = 0;
    quizNext = "first";
  }
  else {
    codeno = 1;
    quizNext = "second";
  }

  useEffect(() => {
    fetch(`https://summerinternshipproject.pythonanywhere.com/getcode/?level=${lev}&code=${codeno}`)
        .then(res => {
            return res.json();
        })
        .then(dta => {
            console.log(dta);
            setCodedata(dta);
            //setIsLaoding(false);
            setIsValid(true);
        })
   //getcodeData();
    console.log(codedata);
   },[]);

  // if(isLoading) {
  //   return <h2> LOading .... </h2>
  // }
  var url = "jsm";
  var c_time = 4;
  var qs_time = 0;
  if(codedata != null) {
    //setCodedata(codedata.code_image);
    url = mainUrl + codedata.code_image; 
    c_time = codedata.code_time;
    qs_time = codedata.question_time;
    dispatch({type: "SENDING_QUESTION_TIME", val: qs_time});
    console.log(codedata.code_time);
    // console.log(codedata.code_image);
  }


const handleNext = () => {
  dispatch({type: "BUTTON_CLICKED"});
}

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
          
          <Image  src={codedata && url} alt="code"></Image>
          
          </Box>
        </Grid>
        <Grid item xs={4}>
        <Box   sx={{bgcolor: 'secondary.light', width:"100%",
        height:500,
         boxShadow: 5,
         borderRadius:"2%",
         }}>
         
         <Typography variant="h4" sx={{color: "#ffffff",fontWeight: 'Regular' ,p:3}}>Timer</Typography>
         
           {isValid && <Timer limit={c_time} typ={levv.type} nex={quizNext} />} 
           
           
         </Box>
        </Grid>
        <Grid item xs={12}>
        <Box  sx={{bgcolor: '#fffde7', width:"100%",
        height:100,
        boxShadow: 5,borderRadius:"8px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"}}>
        
        
        {/* <Button variant="contained" size="large" color="secondary" sx={{mr:2}} >Back</Button> */}
      
       

       <Link to={`/quiztime/${levv.type}/${quizNext}`} >
                      <Button variant="contained" color="success" 
                      size="large" sx={{ml:2}} 
                      onClick={handleNext}
                      >Next</Button>
                      </Link>
        
        </Box>
        </Grid>


      </Grid>
      
      </Box>
    

     
    </Container>

   </ThemeProvider>

)


}

export default Read;
