import { TextField,   InputAdornment, } from '@material-ui/core';
import { useStyles } from '../styles';
import DateRange from '@material-ui/icons/DateRange';
import PropTypes from 'prop-types';

export default function DatePicker ({name, label, value, error, onChange }) { 
    const classes = useStyles();

    return (
        <TextField
            required
            size='small'
            type='date'
            variant='outlined'
            className={classes.textField}
            name={name}
            id={name}
            label={label}
            value={value}
            onChange={onChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start' >
                        <DateRange />
                    </InputAdornment>
                ),
            }}
            {...(error && {error:true,helperText:error})}
        />
    );
}

DatePicker.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value : PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};