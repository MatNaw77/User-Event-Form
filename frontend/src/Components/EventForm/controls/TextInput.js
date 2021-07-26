import { TextField } from '@material-ui/core';
import { useStyles } from '../styles';
import PropTypes from 'prop-types';

export default function TextInput ({name, label, error=null, value, onChange }) { 
    const classes = useStyles();

    return (
        <TextField
            required
            size='small'
            variant='outlined'
            className={classes.textField}
            name={name}
            id={name}
            label={label}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />

    );
}

TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value : PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};