import { TextField,   InputAdornment, } from '@material-ui/core';
import { useStyles } from '../styles';
import EmailIcon from '@material-ui/icons/Email';

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