
import download from "downloadjs";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 import { useEffect, useState } from 'react';
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DownloadData = () => {




    const [userData, setUserData] = useState([]);
    const [downloadData, setDownloadData] = useState([]);
    useEffect(() => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://summerinternshipproject.pythonanywhere.com/getcsv/", requestOptions)
            .then(response => response.json())
            .then(result => setUserData(result))
            .catch(error => console.log('error', error));

        // console.log(userData)
    }, [])

        const handleClick = (e) => {
        var myHeaders = new Headers();

        const id = e.target.value;
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://summerinternshipproject.pythonanywhere.com/download/?user=${id}`, requestOptions)
            .then(response => response.text())
            .then(result => download(result, "data.csv", "text/csv"))
            .catch(error => console.log('error', error));
    
            console.log(downloadData);
        }











      console.log(userData);






  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell> */}
            <StyledTableCell align="right">Download Csv</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user) => (
            <StyledTableRow key={user.name}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.calories}</StyledTableCell> */}
              {/* <StyledTableCell align="right">{row.fat}</StyledTableCell> */}
              <StyledTableCell align="right">{user.email}</StyledTableCell>
              <StyledTableCell align="right">


              <Button sx={{ m: 1 }} variant="contained" color="primary" size="large" 
              onClick={handleClick} value={user.uid}>Download</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DownloadData;

