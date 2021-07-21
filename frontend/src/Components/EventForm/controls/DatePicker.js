import { TextField,   InputAdornment, } from '@material-ui/core';
import { useStyles } from '../styles';

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
                    <InputAdornment position='start'/>
                ),
            }}
            {...(error && {error:true,helperText:error})}
        />
    );
}