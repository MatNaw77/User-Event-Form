import { Paper, Grid, TextField, FormControl, FormLabel, InputAdornment, Button, Container} from "@material-ui/core";
import { useStyles } from "./styles";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import React from 'react';
  import 'date-fns';
  import DateFnsUtils from '@date-io/date-fns';
  import EmailIcon from '@material-ui/icons/Email';

export default function EventForm() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        console.log(date)
        setSelectedDate(date);
      };

      const handleSubmit = () => {
          console.log('wyslij')
      }

    return (
        <Grid container className={classes.root}>
            <Paper className={classes.paper}>
            <Container fixed>
                <FormControl >
                    <FormLabel style={{marginLeft: "2vw", marginTop: '3vh', fontSize: '3vh'}}>Add new event</FormLabel>
                    <TextField size='small' required className={classes.textField} id="outlined-basic" label="Fist Name" variant="outlined" />
                    <TextField size='small' required className={classes.textField} id="outlined-basic" label="Second Name" variant="outlined" />
                    <TextField
                        required
                        className={classes.textField}
                        id="input-with-icon-textfield"
                        label="Email address"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                        }}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            className={classes.textField}
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </FormControl>
                </Container>
            </Paper>
        </Grid>
    );
}
