import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

import AdminLanguage from "../../components/AdminLanguage";

export default function Language() {
  return (
    <Grid container spacing={0} sx={{ backgroundColor: "lightblue" }}>
      <Container className="language" maxWidth="sm" sx={{ mb: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 5, mt: 4 }} >
        <Typography>Experimental Language</Typography>
        <AdminLanguage/>
        <Typography>other Language</Typography>
        <AdminLanguage/>
        <AdminLanguage/>
        <AdminLanguage/>
        <AdminLanguage/>
      </Container>
    </Grid>
  );
}