import { TextField,   InputAdornment, } from '@material-ui/core';
import { useStyles } from '../styles';
import EmailIcon from '@material-ui/icons/Email';
import PropTypes from 'prop-types';

export default function EmailInput ({name, label, value, error, onChange }) { 
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
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <EmailIcon />
                    </InputAdornment>
                ),
            }}
            {...(error && {error:true,helperText:error})}
        />
    );
}

EmailInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value : PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};