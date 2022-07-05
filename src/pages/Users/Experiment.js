import React, { useContext } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";


import Layout from "../../components/Layout";
import Button from '@mui/material/Button';
import { useEffect } from "react";
import OtherLayout from "../../components/OtherLayout";

import {Link} from "react-router-dom" 
import {useNavigate} from "react-router-dom"

const Experiment = () => {

  const [plang, setPlang] = React.useState(null);
  const [level, setLevel] = React.useState('');
  const [strtime, setStrTime] = React.useState(0);
  const [last_used, setLast_used] = React.useState('');
  const [duration, setDuration] = React.useState('');

  const programming_language = "2";

  //console.log(level);

  useEffect(() => {
    fetch('https://summerinternshipproject.pythonanywhere.com/expertise/')
        .then(res => {
            return res.json();
        })
        .then(dta => {
            console.log(dta);
            setPlang(dta);
        })
  },[]);

  if(plang != null) {
    //if(plang[0].programming_language === 1) {
      plang[0].programming_language = "C++";
  }
  //console.log(levName);

  const handleLevel = (newLev) => {
    setLevel(newLev);
  }
  const handleDuration = (newDur) => {
    setDuration(newDur);
  }
  const handleTime = (newTime) => {
    setStrTime(newTime);
  }
  const handleDate = (newDate) => {
    setLast_used(newDate);
  }

  const time = parseInt(strtime);

  const navigate=useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const expertiseData = {programming_language, level, duration, time, last_used};
    const emptyData = { ffuid: null, ffqbid: null };

    console.log(expertiseData);
    fetch('https://summerinternshipproject.pythonanywhere.com/expertise/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify(expertiseData)
                }).then(() => {
                    console.log('Done successfully');
                })

                fetch('https://summerinternshipproject.pythonanywhere.com/evaluation/', {
                  method: 'POST',
                  headers: { "Content-Type": "application/json" }, 
                  body: JSON.stringify(emptyData)
              }).then(() => {
                  console.log('Initialized evaluation');
              })

       navigate("/level/Easy");


  }

  return (
<>

    <Container maxWidth="lg">

      <Box sx={{
        width: '100%',
        height: 200,
        border: 0,
        margin: "2rem 0",
        borderRadius: '16px',
        
        bgcolor: 'info.main',
        padding: "5px"
      }} >


        <Typography variant="h4" component="h2" marginLeft={2} marginTop={3} color="common.white">

          Experimental Language
        </Typography>




        <Layout lang={plang && plang[0].programming_language} 
        level={level} onChangeLevel={handleLevel}
        duration={duration} onChangeDuration={handleDuration}
        time={strtime} onChangeTime={handleTime}
        last_used={last_used} onChangeDate={handleDate}       
        
        ></Layout>




      </Box>


      <Box sx={{
        width: '100%',
        height: 600,
        border: 0,
        margin: "2rem 0",
        borderRadius: '16px',
        
        bgcolor: 'info.main',
        padding: "5px"
      }} >


        <Typography variant="h4" component="h2" marginLeft={2} marginTop={3} color="common.white">

          Other Language
        </Typography>




        {/* <Layout lang="Java"></Layout>

        <Layout lang="Python"></Layout>

        <Layout lang="C"></Layout>

        <Layout lang="Javascript"></Layout> */}
        

       <OtherLayout lang="JAVA"/>
       <OtherLayout lang="Python"/>
       <OtherLayout lang="Javascript"/  >
       <OtherLayout lang="Ruby"  />





      </Box>






      <Box sx={{
        display:"flex",
        justifyContent: 'center',
        
        width: '100%',
        height: 40,
        border: 0,
        margin: "2rem 0",
        borderRadius: '16px',
        // bgcolor:"info.main",
        
        padding: "5px",
        
      }} >
       
       <Link to={"/register"} style={{ textDecoration: 'none' }}>
       <Button variant="contained" size="large" color="secondary" sx={{mr:2}} >Back</Button>
       </Link>
      {/* <Link to={"/level/Easy"}> */}
       
      <Button variant="contained" color="success" size="large" sx={{ml:2}} onClick={handleSubmit} >Next</Button>
      {/* </Link> */}
      </Box>
   
      



    </Container>
       

</>

  );


}

export default Experiment;