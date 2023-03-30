import React from "react";
import Header from "@/components/Header/Header";

import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";

const createQuizz = () => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: "50px" }} maxWidth="xl">
        <Typography
          variant="h1"
          style={{ fontWeight: "bold", fontSize: "40px" }}
        >
          Create your Quizz
        </Typography>
      </Container>
    </>
  );
};

export default createQuizz;
