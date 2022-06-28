import React, { useState } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import Card from "../../components/Layout"


import Layout from "../../components/Layout";

import Button from '@mui/material/Button';
import { SettingsRemote } from "@material-ui/icons";

import { Link } from "react-router-dom";


const Experiment = (props) => {



  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [time, setTime] = useState("");
  const [lastused, setLastused] = useState("");


  const handleLevel = (newval) => {

    setLevel(newval);
  }

  const handleDuration = (newval) => {

    setDuration(newval);
  }

  const handleTime = (newval) => {

   setTime(newval);
  }
  const handleLastused = (newval) => {

    setLastused(newval);
  }


  console.log(level,duration,time,lastused);

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




          <Layout  onChangeLevel={handleLevel}  
                   level={level}

          onChangeDuration={handleDuration} 
          duration={duration}

          onChangeTime={handleTime}
          time={time}


          onChangeLastused={handleLastused}
          lastused={lastused}
          
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




          <Layout></Layout>

          <Layout></Layout>

          <Layout></Layout>

          <Layout></Layout>








        </Box>






        <Box sx={{
          display: "flex",
          justifyContent: 'center',

          width: '100%',
          height: 40,
          border: 0,
          margin: "2rem 0",
          borderRadius: '16px',
          // bgcolor:"info.main",

          padding: "5px",

        }} >

 
          <Button variant="contained" size="large" color="secondary" sx={{ mr: 2 }} >Back</Button>
       <Link to={"/level/Easy"}><Button variant="contained" color="success" size="large" sx={{ml:2}} >Next</Button></Link>
      </Box>
   
      



          {/* <Button variant="contained" color="success" size="large" sx={{ ml: 2 }}  >Next</Button>
        </Box> */}





      </Container>


    </>
  );


}

export default Experiment;