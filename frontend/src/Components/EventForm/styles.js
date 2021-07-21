import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    minHeight: "450px",
    minWidth: "350px",
    height: "55%",
    width: "20%",
    textAlign: "center",
  },
  header: {
    marginTop: "5%",
    marginBottom: "9%",
    fontSize: 27,
    color: "#000",
  },
  footer: {
    fontSize: 10,
    marginTop: "9%",
  },

  textField: {
    width: "100%",

    marginTop: "3%",
  },
  button: {
    width: "100%",
    height: "5%",
    marginTop: "7%",
    // marginLeft: '1%',
    // marginRight: '1%',
    // marginTop: '3%'
  },
}));

export { useStyles };
