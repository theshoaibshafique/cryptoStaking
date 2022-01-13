import { makeStyles } from "@material-ui/core/styles";

const chooseUsStyles = makeStyles((theme) => ({
  chooseUs: {
    position: "relative",
    display: "block",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      paddingBottom: theme.spacing(8),
    },
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    //height: 174,

    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(4, 0, 0, 0),
      width: 250,
    },
    "& span": {
      color: theme.palette.primary.main,
      fontSize: 88,
    },
    "& h6": {
      fontWeight: theme.typography.fontWeightBold,
    },
    "& p": {
      fontSize: "13px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },
}));

export default chooseUsStyles;
