import React from "react";
// import { makeStyles } from '@material-ui/styles';
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    paper: {
        position: 'absolute',
        width: 570,
        // Color: theme.palette.background.paper,
        backgroundColor:"white",
        boxShadow: 15,
        padding:40
        // padding: theme.spacing(2, 4, 3),
    },
}));
export default function Instruction() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
               Instructions
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 style={{marginBottom:"1rem"}}>Instructions</h2>
                    <p>
                    Welcome to the Code Comprehension Assessment Portal! Here are some important instructions to follow:
</p>
<p>


1. Please note that each question on this assessment is compulsory, and you cannot skip any of them.
</p>
<p>


2. Once you proceed to the next question by clicking "Next," you won't be able to go back to the previous question. Therefore, make sure to review your answers carefully before moving forward.
</p>
<p>


3. You will find a "Submit" button at the end of the assessment. Click on it only when you have completed all the questions and are ready to submit your responses.
</p>
<p>
4. Read each question thoroughly and take your time to understand the code snippets provided before attempting an answer.
                    </p>
                    <p>
                        5. click anywhere on the screen to continue.
                    </p>
                    
                </div>
            </Modal>
        </div>
    );
}