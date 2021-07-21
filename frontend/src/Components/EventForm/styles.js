import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
  root: {
    flexGrow: 10,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    minHeight: '480px',
    minWidth: '350px',
    height: '55%',
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
    marginTop: '9%',
  },

  textField: {
    marginTop: '7%',
  },
  
  button: {
    width: '100%',
    height: '5%',
    marginTop: '7%'
  },
}));

export { useStyles };
