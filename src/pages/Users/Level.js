import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


import Modal from '@mui/material/Modal';
import { useDispatch } from "react-redux";
import Instruction from "../../components/Instruction";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffffff',
  border: '1px solid #000',
  borderRadius:"10px",
  boxShadow: 24,
  outline:"none",
  p: 4,
};


const Level = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let params = useParams();

  //const lev = flow;

  
return (

<Container maxWidth="xl" sx={{backgroundColor:"#f5f5f5" ,
 height:"100vh" ,
 display:"flex",
 justifyContent:"center",
 alignItems:"center"}}>

<Box  >       
<Card sx={{ maxWidth: 355 ,minHeight:200,boxShadow:5}} >
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" sx={{color:"green"}}>
          Level {params.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This Level contains 2 codes and each code have maximum of 5 questions respectively.
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small"  onClick={handleOpen}>Start</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color="warning.main">
            Are you Ready to Start ?
          </Typography>
          <Link to={`/codeRead/${params.type}/code0`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="success" size="medium" sx={{m:2}} >Confirm</Button>
            </Link>
          <Button variant="contained" color="warning" size="medium"  sx={{m:2}} onClick={handleClose} >Back</Button>
        </Box>
      </Modal>
        {/* <Button size="small">Instructions</Button> */}
        <Button size="small"><Instruction/></Button>
      </CardActions>
    </Card>
    </Box>    
</Container>



);



}


export default Level;