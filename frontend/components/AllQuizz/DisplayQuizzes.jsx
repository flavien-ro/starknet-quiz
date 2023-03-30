import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const DisplayQuizzes = ({ allQuizz }) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "25px" }}>
      {allQuizz.map((quiz, index) => {
        return (
          <div
            style={{
              width: "100%",
              border: "1px solid lightgray",
              padding: "20px",
              marginBottom: "25px",
              borderRadius: "10px",
            }}
            key={index}
          >
            <Typography
              variant="h2"
              style={{ fontSize: "35px", fontWeight: "bold" }}
            >
              {quiz.title}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "20px" }}>
              {quiz.description}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#28a428", fontWeight: "bold" }}
              >
                <RocketLaunchIcon style={{ marginRight: "5px" }} />
                Launch Quiz
              </Button>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default DisplayQuizzes;
