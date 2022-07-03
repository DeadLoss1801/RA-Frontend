import { Container, Box, Title, Paper, Button, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import React from 'react'

function DownloadData() {
  const [userData,setUserData] = useState([]);

   useEffect(() => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://summerinternshipproject.pythonanywhere.com/demographic/", requestOptions)
      .then(response => response.json())
      .then(result => setUserData(result))
      .catch(error => console.log('error', error));
   
     console.log(userData)
   }, [])
   






    const Title = styled('h1')({

        fontSize: "3rem",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",

    });

    const handleClick = () =>
    {
        
    }
    return (
        <>
            <Container maxWidth="sm" sx={{
                height: "100vh", display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}>

                <Box sx={{ m: 5 }}>
                    <Title>Download Data</Title>
                </Box>

                {/* <Paper elevation={6} sx={{
                    minWidth: "90%", minHeight: "70%", height: 500,
                    overflow: "auto",
                }}> */}
                   
                    {userData.map((item =>
                    
                        <Paper sx={{ m: 2, display: "flex", backgroundColor: "lightblue", height: "10%" }}>
                        <Typography sx={{ m: 1, ml: 3, mr: 30 }}>{item.name}</Typography>
                        <Button sx={{ m: 1 }} variant="contained" color="primary" size="large" onClick={handleClick}>Download</Button>
                        </Paper>
                        
                    ))}
                        
                  

                    
               
            </Container>
        </>
    )
}

export default DownloadData