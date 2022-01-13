import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  counterWrap: {
    position: 'relative'
  },
  text: {},
  counterItem: {
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
    '& svg': {
      width: 80,
      height: 80,
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(2),
      }
    },
    '& $text': {
      '& h4': {
        fontWeight: 'bold',
      }
    }
  },
  dark: {
    background: theme.palette.primary.main,
    '& $counterItem': {
      color: theme.palette.common.white,
      '& svg': {
        fill: theme.palette.common.white,
      }
    }
  },
  primary: {
    fill: theme.palette.primary.main
  },
  secondary: {
    fill: theme.palette.secondary.main
  },
  accent: {
    fill: theme.palette.accent.main
  },
}));

export default counterStyles;
