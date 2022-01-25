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
    height: 320,

    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(4, 0, 0, 0),
      width: 250,
      height: 274,
    },
    "& span": {
      color: theme.palette.primary.main,
      fontSize: 88,
      [theme.breakpoints.down("md")]: {
        fontSize: 68,
      },
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
