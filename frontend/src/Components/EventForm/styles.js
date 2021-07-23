import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles( () => ({
  root: {
    flexGrow: 10,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    minHeight: '410px',
    minWidth: '350px',
    maxHeight: '100%',

    width: '20%',
    textAlign: 'center',
  },
  header: {
    marginTop: '5%',
    marginBottom: '9%',
    fontSize: 27,
    color: '#000',
  },
  footer: {
    fontSize: 10,
    marginTop: '5%',
  },

  textField: {
    marginTop: '7%',
  },
  
  button: {
    width: '100%',
    height: '5%',
    marginTop: '7%'
  },

  iconProcess: {
    color: grey[500]
  }
}));

export { useStyles };
