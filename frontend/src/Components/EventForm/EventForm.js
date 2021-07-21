import {
  Paper,
  Grid,
  FormControl,
  FormLabel,
  Button,
  Container,
  CircularProgress,
} from '@material-ui/core';
import { useStyles } from './styles';
import { useState } from 'react';
import EmailInput from './controls/EmailInput';
import TextInput from './controls/TextInput';
import DatePicker from './controls/DatePicker';
import Alert from '@material-ui/lab/Alert';
import { sendFrom } from '../../functions/sendForm';
import { grey } from '@material-ui/core/colors';

const initialValues = {
  firstName: '',
  secondName: '',
  email: '',
  date: '',
}

export default function EventForm() {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const validate = () => {
    let temp = {
      firstName: values.firstName ? '': 'This field is required.',
      secondName: values.secondName ? '': 'This field is required.',
      email: (/^$|.+@.+..+/).test(values.email) ? '': 'Email is not valid.',
      date: values.date ? '': 'This field is required.',
    };

    setErrors({
      ...temp
    });

    return Object.values(temp).every(x => x === '');
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(values);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()){
      setLoading(true);
      sendFrom(values, setLoading);
      setResult(3);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Container fixed>
          <FormControl margin='normal'>
            <FormLabel className={classes.header}>Add new event</FormLabel>
            <TextInput 
                name='firstName'
                label='First Name'
                value={values.firstName}
                onChange={handleInputChange} 
                error={errors.firstName}
            />
            <TextInput 
                name='secondName'
                label='Second Name'
                value={values.secondName}
                onChange={handleInputChange} 
                error={errors.secondName}
            />
            <EmailInput 
                name='email'
                label='Email Address'
                value={values.email}
                onChange={handleInputChange} 
                error={errors.email}
            />
            <DatePicker 
                name='date'
                label='Date'
                value={values.date}
                onChange={handleInputChange} 
                error={errors.date}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={handleSubmit}
            >
              Submit
              {loading && <CircularProgress size={24} style={{ color: grey[500] }}/>}
            </Button>
            {result === 2 && <Alert severity="error">An error occured during adding to database!</Alert>}
            {result === 3 && <Alert severity="success">An event has been added to database!</Alert>}

            <FormLabel className={classes.footer}>* required field</FormLabel>
          </FormControl>
        </Container>
      </Paper>
    </Grid>
  );
}