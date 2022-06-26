import React from 'react'

import {Link} from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { styled } from '@mui/system';



const ParentBox = styled('div')({
  backgroundColor: "#f1f1f1",
  padding: "100px",
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  borderRadius: "10px",
  

});


const ParentButton = styled('button')({
 
    width: "100%",
    backgroundColor: "#f1356d",
    color: "#fff",
    border: "0",
    marginTop: "20px",
    marginBottom: "20px",

    borderRadius: "8px",
    padding: "10px",
    cursor: "pointer",
    fontSize: "15px",

});




const Home = () => {
  return (
    <Container minWidth="md" sx={{display:"flex",justifyContent:"center",alignItems:"center",m:3}}>
     <Box sx={{width:500,boxShadow:7}}>

     <ParentBox>
      
        <ParentButton>Admin</ParentButton>
        <Link  to={"/register"}>
        <ParentButton>Participant</ParentButton>
        </Link>
        
        
      
      </ParentBox>
      
     </Box>
  
     
    </Container>
    
  )
}

export default Home;