import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Cube from "./Cube";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={7}>
        <Grid item xs={12}>
         
        </Grid>

        <Grid item xs={12}>
         
          <Cube/>
            
          
         
        </Grid>
      </Grid>
    </Box>
  );
}