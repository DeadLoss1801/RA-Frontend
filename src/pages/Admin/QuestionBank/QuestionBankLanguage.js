import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import {
//   MenuItem,
//   makeStyles,
//   IconButton,
//   Input,
// } from "@material-ui/core";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Container, MenuItem, Typography } from "@mui/material";
import QuestionBankLevel from "./QuestionBankLevel";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";

function QuestionBankLanguage() {
  const navigate = useNavigate();
  const options = [
    { name: "C++", value: '1' },
    { name: "Python", value: '2' },
    { name: "Javascript", value: '3' },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // const [Language, setLanguage] = useState("");
  // const [admin_programming_language, setAdmin_programming_language] =useState("");
  // const handleChange = (e) => {
  //   setadmin_programming_language(e.target.value)
  // }
  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { admin_programming_language: selectedLanguage };

    try {
      const response = await fetch(
        "https://assesment-web.onrender.com/questionbank/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Language posted successfully to the API");
        // Redirect to the appropriate route after successful API call
        navigate("/levels/easy");
      } else {
        console.error("Failed to post language to API");
      }
    } catch (error) {
      console.error("Error posting language to API:", error);
    }
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ m: 5 }}>
          <h1>Question Bank</h1>
        </Box>

        <Paper elevation={6} sx={{ minWidth: "70%", minHeight: "50%" }}>
          <Box sx={{ minWidth: "50%", p: 3, mt: 4 }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Language"
              onChange={handleChange}
              value={selectedLanguage}
              helperText="Please Select a Language"
              fullWidth
            >
              {options.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default QuestionBankLanguage;
