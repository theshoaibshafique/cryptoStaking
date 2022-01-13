import { makeStyles } from '@material-ui/core/styles';
const hexaSecondary = '/images/crypto/hexa-secondary.svg';
const hexaAccent = '/images/crypto/hexa-accent.svg';

const downloadStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    borderRadius: theme.rounded.medium,
    color: theme.palette.common.white,
    display: 'flex',
    position: 'relative',
    marginTop: theme.spacing(20),
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('sm')]: {
      height: 240,
      padding: theme.spacing(3),
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    '& > div': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    '&:before': {
      content: '""',
      width: 48,
      height: 48,
      position: 'absolute',
      top: -20,
      left: 240,
      background: `url(${hexaSecondary}) no-repeat`,
      backgroundSize: '100%'
    },
    '&:after': {
      content: '""',
      width: 48,
      height: 48,
      position: 'absolute',
      bottom: -10,
      right: -20,
      background: `url(${hexaAccent}) no-repeat`,
      backgroundSize: '100%'
    },
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 28,
      [theme.breakpoints.up('md')]: {
        fontSize: 36
      }
    },
    '& figure': {
      border: `6px solid ${theme.palette.common.white}`,
      background: theme.palette.common.white,
      overflow: 'hidden',
      borderRadius: theme.rounded.medium,
      width: 174,
      height: 325,
      boxShadow: theme.shade.light,
      position: 'relative',
      top: -80,
      marginRight: theme.spacing(5),
      '& img': {
        width: '100%',
      }
    }
  },
  btnArea: {
    marginTop: theme.spacing(4),
    display: 'flex',
    '& a': {
      display: 'block',
      flex: 1,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('xs')]: {
        margin: '0 2px',
      }
    },
    '& img': {
      maxWidth: '100%'
    }
  }
}));

export default downloadStyles;
