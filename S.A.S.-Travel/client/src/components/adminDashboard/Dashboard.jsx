import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';

import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import { Typography } from "@mui/material";


export default function SimpleContainer() {

  const [users, setUsers] = React.useState(null);
  const [response, setResponse] = React.useState(null);
  const [postCount, setPostCount] = React.useState(null);
  const [posts, setPosts] = React.useState(null);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  React.useEffect(() => {
    //get all users
    axios.get("http://localhost:5000/api/users").then((response) => {
      setUsers(response.data);
    });


  }, [response]);
  React.useEffect(() => {
    //get all posts
    axios.get(`http://localhost:5000/api/posts/userposts`).then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });

    //get post count
    axios.get("http://localhost:5000/api/posts/postCount").then((response) => {
      setPostCount(response.data);

    });

  }, []);

  const deleteUser = (id) => {
    console.log(id)
    axios.delete(`http://localhost:5000/api/users/${id}`).then((response) => {
      setResponse(response.data)
    });
  }


  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {/* onClick show all users /delete btn for each user to delete the user */}
                <Item>users</Item>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* onClick show total number of posts */}
                <Item>posts</Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  <Box sx={{ bgcolor: "", height: "" }}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            
                            <TableCell align="right">Delete</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {users && users.map((row, index) => (
                            <TableRow
                              key={row._id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {index + 1}
                              </TableCell>
                              <TableCell align="right">{row.name}</TableCell>
                              <TableCell align="right">{row.email}</TableCell>
                              
                              <TableCell align="right">
                                <Button onClick={() => deleteUser(row._id)}>Delete</Button>
                              </TableCell>
                            </TableRow>
                          ))}

                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>

                  <Box sx={{ bgcolor: "#008080", padding: '20px', color: 'white' }}>
                    <Typography variant="h4"  >Estimated Post Count : {postCount && postCount}</Typography>
                  </Box>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell align="right">location</TableCell>
                          <TableCell align="right">AuthorID</TableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {posts && posts.map((row, index) => (
                          <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {index + 1}
                            </TableCell>
                            <TableCell align="right">{row.location}</TableCell>
                            <TableCell align="right">{row.authorID}</TableCell>


                          </TableRow>
                        ))}

                      </TableBody>
                    </Table>
                  </TableContainer>


                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}