import { makeStyles } from '@material-ui/core/styles';

const titleStyles = makeStyles(theme => ({
  left: {
    textAlign: 'left',
    '&:after': {
      left: 0,
    }
  },
  right: {
    textAlign: 'right',
    '&:after': {
      right: 0,
    }
  },
  center: {
    textAlign: 'center',
    '&:after': {
      left: '50%',
      marginLeft: -35,
    }
  },
  deco: {
    '& svg': {}
  },
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    '& h4': {
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 36,
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px',
      }
    },
  }
}));

export default titleStyles;
