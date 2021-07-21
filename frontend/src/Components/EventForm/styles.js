import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 10,
        height: '100vh',
        width: '100cw'
      },
      paper: {
        marginTop: '25vh',
        marginLeft: '41.25vw',
        minWidth: 300,
        minHeight: 400,
        height: '50vh',
        width: '17.5vw',
        
      },
      textField: {
        marginLeft: '2vw',
        marginRight: '2vw',
        marginTop: '2vh'
      },
      button: {
        width: '75%',
        height:'5%',
        marginLeft: '2vw',
        marginRight: '2vw',
        marginTop: '3vh'
      }
}));

export { useStyles };