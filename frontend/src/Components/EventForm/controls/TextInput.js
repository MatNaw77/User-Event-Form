import { TextField } from '@material-ui/core';
import { useStyles } from '../styles';

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