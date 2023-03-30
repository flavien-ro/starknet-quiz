import React from "react";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";

const QuizInformations = ({ title, setTitle, description, setDescription }) => {
  return (
    <div style={{ marginBottom: "25px 0" }}>
      <Typography
        variant="h2"
        style={{
          fontSize: "30px",
          marginBottom: "50px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px",
            borderRadius: "50%",
            backgroundColor: "#d6f5d6",
            marginRight: "15px",
          }}
        >
          <InfoIcon style={{ color: "#28a428" }} />
        </div>
        Quiz informations
      </Typography>
      <TextField
        style={{ width: "100%", marginBottom: "25px" }}
        id="standard-basic"
        label="What is the title of your quiz?"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        style={{ width: "100%" }}
        id="outlined-multiline-static"
        label="Tell the participants what this quiz is about"
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      />
    </div>
  );
};

export default QuizInformations;
