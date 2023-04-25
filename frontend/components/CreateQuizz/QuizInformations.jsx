import React from "react";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";

import styles from "./createQuizz.module.css";

const QuizInformations = ({ title, setTitle, description, setDescription }) => {
  return (
    <div style={{ marginBottom: "25px 0" }}>
      <Typography variant="h2" className={styles.quizTitle}>
        <div className={styles.icon}>
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
        inputProps={{ maxLength: 100 }}
        helperText={`${title.length}/${100}`}
        required
      />
      <TextField
        style={{ width: "100%" }}
        id="outlined-multiline-static"
        label="Tell the participants what this quiz is about"
        multiline
        value={description}
        inputProps={{ maxLength: 225 }}
        helperText={`${description.length}/${225}`}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      />
    </div>
  );
};

export default QuizInformations;
