import React from 'react'

import {Link} from 'react-router-dom';
import { Box, Container } from '@mui/system';
import {styled} from '@mui/system';



const ParentBox = styled('div')({
  backgroundColor: "#fefefe",
  padding: "100px",
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  border:"1px solid black",
  borderRadius: "10px",
 

});


const ParentButton = styled('button')({
 
    width: "100%",
    backgroundColor: "#f1356d",
    color: "#fff",
    border: "0",
    marginTop: "20px",
    marginBottom: "20px",

    borderRadius: "1.5rem",
    padding: "10px",
    cursor: "pointer",
    fontSize: "1.5rem",
    
    
      "&:hover": {
        backgroundColor: '#8B0000'
      }
    

     
    

});






const Title = styled('h1')({
 
  fontSize:"4rem",
  display:"flex",
  alignItem:"center",
  justifyContent:"center",
  






});




const Home = () => {

  const home_img="https://images.appypie.com/wp-content/uploads/2020/10/05111505/school-website-builder.svg";
  // sx={{display:"flex",justifyContent:"center",
  // alignItems:"center",m:3}}
  return (
    <Container maxWidth="xl" sx={{height:"100vh",}}>
     
     <Box sx={{m:3,p:1}}>
      <Title>Fully Automated Online Assessment System</Title>
     
     </Box>

     <Box sx={{display:"flex",justifyContent:"space-between"}}>

      
     <Box>
      <img  style={{width:"80%"}} src={home_img}></img>
     </Box>


     <Box sx={{m:"auto"}}>
         <Link to={"/login"} >
        <ParentButton admin>Admin</ParentButton>
        </Link>
        
        <Link to={"/register"} >
        <ParentButton participant style={{backgroundColor:"#006400",}} >Participant</ParentButton>
        </Link>
     </Box>


     


     </Box>
     
   

     
     
     
     {/* <Box sx={{width:500,boxShadow:3}} >

     <ParentBox >
      
        
      
      </ParentBox>
      
     </Box>

     */}
  
     
    </Container>
    
  )
}

export default Home;