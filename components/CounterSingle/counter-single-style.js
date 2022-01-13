import { makeStyles } from "@material-ui/core/styles";

const counterStyles = makeStyles((theme) => ({
  counterWrap: {
    position: "relative",
    margin: theme.spacing(0, 0),
    textAlign: "center",
    "& h4": {
      color:
        theme.palette.type === "dark"
          ? theme.palette.light
          : theme.palette.dark,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        fontSize: 36,
      },
    },
    "& h2": {
      color:
        theme.palette.type === "dark"
          ? theme.palette.text.secondary
          : theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightLight,
      // marginBottom: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        fontSize: 36,
      },
    },
  },
}));

export default counterStyles;
