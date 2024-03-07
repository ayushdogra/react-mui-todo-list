import React, { useState } from "react";
import { FormControlLabel, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField } from "@mui/material";
import { Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import {FormControl} from "@mui/material";
import {FormLabel} from "@mui/material";
import { useHistory } from "react-router-dom";

const classes = {
  form: {
    marginBottom: 5,
    marginTop: 5,
    display: "block",
  },
};

export default function Create() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method : 'POST',
        headers : {"Content-type" : "application/json"},
        body : JSON.stringify({title, details, category})
      }).then(()=> history.push('/'))
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          sx={classes.form}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          sx={classes.form}
          label="Details"
          multiline
          minRows={4}
          variant="outlined"
          fullWidth
          required
          error={detailsError}
        />
        <FormControl sx={classes.form}>
        <FormLabel>Notes Category</FormLabel>
        <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
          <FormControlLabel value="todos" control={<Radio/>} label="Todo"/>
          <FormControlLabel value="money" control={<Radio/>} label="Money"/>
          <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
          <FormControlLabel value="work" control={<Radio/>} label="Work"/>
        </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="error"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
