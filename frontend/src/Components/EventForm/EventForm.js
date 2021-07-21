import {
  Paper,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  InputAdornment,
  Button,
  Container,
  FormHelperText,
} from "@material-ui/core";
import { useStyles } from "./styles";
import React from "react";
import EmailIcon from "@material-ui/icons/Email";

export default function EventForm() {
  const classes = useStyles();
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = (event) => {
    
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = () => {
    console.log("wyslij");
  };

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Container fixed>
          <FormControl margin="normal">
            <FormLabel className={classes.header}>Add new event</FormLabel>
            <TextField
              size="small"
              required
              className={classes.textField}
              id="firstName"
              label="Fist Name"
              variant="outlined"
            />
            <FormHelperText error>eror</FormHelperText>
            <TextField
              size="small"
              required
              className={classes.textField}
              id="secondName"
              label="Second Name"
              variant="outlined"
            />
            <FormHelperText error>eror</FormHelperText>
            <TextField
              required
              size="small"
              className={classes.textField}
              id="email"
              variant="outlined"
              label="Email address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormHelperText error>eror</FormHelperText>
            <TextField
              required
              id="date"
              size="small"
              label="Date"
              type="date"
              onChange={handleDateChange}
              variant="outlined"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <FormLabel className={classes.footer}>* required field</FormLabel>
          </FormControl>
        </Container>
      </Paper>
    </Grid>
  );
}