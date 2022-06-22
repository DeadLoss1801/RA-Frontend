import React, { useState } from 'react'
import {
  MenuItem,
  makeStyles,
  IconButton,
  Input,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Container, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function QuestionBankCode() {

  const codes = [
    {
      name: 'code1',
      value: 'code1',
    },
    {
      name: 'code2',
      value: 'code2',
    },
  ]



  // const [code,setCode] = useState("");
  const [selectedcode, setSelectedCode] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [codeTimer, setCodeTimer] = useState("");
  const [questionTimer, setQuestionTimer] = useState("");
  const [codeInstruction, setCodeInstruction] = useState("");

  
  const handleImage = (e) =>
  {
    setSelectedImage(e.target.files[0]);
    setIsImageSelected(true);   
  }

  const handleSubmit = () =>
  {
    console.log(selectedImage);
	};
  

  return (

    <Grid container spacing={0} sx={{ backgroundColor: "Lightblue" }}>
      <Container className='container-question-bank' maxWidth="sm" sx={{ mb: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 5, mt: 4 }}>
        <FormControl className="Bx" sx={{ m: 1, minWidth: 250 }} >
          <InputLabel id="demo-simple-select-helper-label">Code</InputLabel>
          <Select labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper" onChange={e => setSelectedCode(e.target.value)} value={selectedcode}>
            {codes.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
            ))}
          </Select>
          <p>{selectedcode}</p>
        </FormControl>
        <br></br>
        <br></br>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 500 }} id="outlined-basic" label="Code Instruction" multiline maxRows={100} variant="filled" onChange={e => setCodeInstruction(e.target.value)} />

        <p>{codeInstruction}</p>
        <br></br><br></br>

        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Code Timer" required multiline maxRows={100} variant="filled" onChange={e => setCodeTimer(e.target.value)} />
        <p>{codeTimer}</p>
        <TextField type="text" className="Bx" sx={{ m: 1, minWidth: 250 }} id="outlined-basic" label="Question Timer" required multiline maxRows={100} variant="filled" onChange={e => setQuestionTimer(e.target.value)} />
        <p>{questionTimer}</p>
        <br></br>
        <br></br>

        <input accept="image/*" type="file" id="select-image" onChange={handleImage} />
        {isImageSelected ? (
				<div>
					<p>Filename: {selectedImage.name}</p>
					<p>Filetype: {selectedImage.type}</p>
					<p>Size in bytes: {selectedImage.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedImage.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) :  (
				<p>Select a file to show details</p>
			)}
        <label htmlFor="select-image">
        </label>
        <br></br>
        <br></br>
        {/* <Link to={"/question"}> */}
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
            Next
          </Button>
        {/* </Link> */}
        <br></br> <br></br>
      </Container>
    </Grid>
  )
}

export default QuestionBankCode;