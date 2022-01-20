import { makeStyles } from "@material-ui/core/styles";
const stakingStyles = makeStyles((theme) => ({
  wrap: {
    margin: theme.spacing(0, 1),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0, 16),
    },
  },
  paper: {
    position: "relative",

    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    padding: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 4),
    },
    // "& img": {
    //   width: "50%",
    //   contain: "cover",
    //   marginBottom: "10px",
    // },
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
    },
    //width: "100%",
  },
  chartContainer: {
    background: theme.palette.primary.main,
    borderRadius: "10px",
    height: "100%",
    padding: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 4),
    },
  },
  chartHeaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chart: {
    height: "200px",
    marginTop: "20px",
  },
  chartHeader: {
    display: "flex",
    flexDirection: "column",
  },
  chartHeader2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  heading: {
    color: "#cec1e6",
    textTransform: "uppercase",
  },
  headingValue: {
    color: "#fff",
    fontSize: 26,
    // lineHeight: "56px",
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
      //lineHeight: "48px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
      //lineHeight: "36px",
    },
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: theme.spacing(2),
    gap: "80px",
    [theme.breakpoints.down("md")]: {
      gap: "40px",
      //lineHeight: "48px",
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: theme.palette.secondary.main,
    },
  },
  values: {
    color: theme.palette.primary.main,
    fontSize: 24,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      //lineHeight: "48px",
    },
  },
  values2: {
    color: theme.palette.secondary.main,
    fontSize: 24,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      //lineHeight: "48px",
    },
  },
}));

export default stakingStyles;
