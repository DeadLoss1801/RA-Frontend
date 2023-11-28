import { Container, Box } from "@mui/system";
import React, { useContext } from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Button, Typography, useStepContext } from "@mui/material";
import Timer from "../../components/Timer";
import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ClipLoader, ScaleLoader } from "react-spinners";



import { Paper } from '@mui/material';

const API_BASE_URL = process.env.REACT_APP_API;
const theme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
    },
    secondary: {
      main: "#ba68c8",
    }
  },
});



const Image = styled('img')({

  objectFit: 'cover',
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "80%"


});

const Read = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [codedata, setCodedata] = useState(null);
  //const [isLoading, setIsLaoding] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);

  const mainUrl = `${API_BASE_URL}`;

  var levv = useParams();
  var lev = useParams();
  if (lev.type === "Easy") {
    lev = 1;
  }
  else if (lev.type === "Medium") {
    lev = 2;
  }
  else {
    lev = 3;
  }

  var codeno = useParams();
  var quizNext = "dummy";
  if (codeno.option === "code0") {
    codeno = 0;
    quizNext = "first";
  }
  else {
    codeno = 1;
    quizNext = "second";
  }
  const ffuid = localStorage.getItem("user_id");

  useEffect(() => {
    fetch(`${API_BASE_URL}/getcode/?level=${lev}&code=${codeno}&ffuid=${ffuid}`)
      .then(res => {
        return res.json();
      })
      .then(dta => {
        console.log(dta);
        setCodedata(dta);
        //setIsLaoding(false);
        setIsValid(true);
        setLoading(false);
      })
    //  getcodeData();
    console.log(codedata);
  }, []);

  // if(isLoading) {
  //   return <h2> LOading .... </h2>
  // }
  var url = "jsm";
  var c_time = 4;
  var qs_time = 0;
  if (codedata != null) {
    //setCodedata(codedata.code_image);
    url = mainUrl + codedata.code_image;
    c_time = codedata.code_time;
    qs_time = codedata.question_time;
    dispatch({ type: "SENDING_QUESTION_TIME", val: qs_time });
    console.log(codedata.code_time);
    // console.log(codedata.code_image);
  }


  const handleNext = () => {
    dispatch({ type: "BUTTON_CLICKED" });
  }

  return (


    <ThemeProvider theme={theme}>

      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        {
          loading ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}> <ScaleLoader loading={loading} size={100} /> </Box>


            : <Box sx={{ m: 2, pb: 4 }}>
              <Grid container spacing={2} >

                <Grid item xs={8}  >
                  <Paper elevation={5}>
                    <Box sx={{
                      bgcolor: '#212121', width: "100%",
                      height: 500,
                      overflow: "auto",
                      border: "0",
                      borderRadius: "1%",
                      boxShadow: 5,
                    }}  >

                      <Image src={codedata && url} alt="code"></Image>

                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={4}>
                  <Paper elevation={5}>
                    <Box sx={{
                      bgcolor: 'white', width: "100%",
                      height: 500,
                      boxShadow: 5,
                      borderRadius: "2%",
                    }}>

                      <Typography variant="h4" sx={{ color: "#000000", fontWeight: 'Regular', p: 3 }}>Timer</Typography>

                      {isValid && <Timer limit={c_time} nex={quizNext} />}

                      <Box sx={{
                        color: "#000000", display: "flex", alignItems: "flexStart",

                        border: "1px solid gray", maxWidth: "80%",
                        minHeight: "40%", overflow: "auto", p: 3, m: 5,
                        boxShadow: 3, borderRadius: "10px",
                        backgroundColor: "#f5f5f5"
                      }}>
                        <Typography variant="subtitle1">{isValid && codedata.code_text}</Typography>

                      </Box>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={5}>
                    <Box sx={{
                      bgcolor: "white", width: "100%",
                      height: 100,
                      boxShadow: 5, borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>


                      {/* <Button variant="contained" size="large" color="secondary" sx={{mr:2}} >Back</Button> */}



                      <Link to={`/quiztime/${levv.type}/${quizNext}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="success"
                          size="large" sx={{ ml: 2 }}
                          onClick={handleNext}
                        >Next</Button>
                      </Link>

                    </Box>

                  </Paper>
                </Grid>


              </Grid>

            </Box>

        }

      </Container>



    </ThemeProvider>


  )
}

export default Read;
