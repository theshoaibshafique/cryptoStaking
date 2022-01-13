import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
const decoLight = '/images/crypto/deco-footer-light.svg';
const decoDark = '/images/crypto/deco-footer-dark.svg';


const footerStyles = makeStyles(theme => ({
  extend: {},
  footerCounter: {
    position: 'relative',
    paddingTop: 320,
    marginTop: theme.spacing(-40),
    background: theme.palette.type === 'dark' ? `linear-gradient(120deg, ${darken(theme.palette.primary.main, 0.6)}, ${darken(theme.palette.secondary.main, 0.6)})` : `linear-gradient(120deg, ${lighten(theme.palette.primary.main, 0.9)}, ${lighten(theme.palette.secondary.main, 0.9)})`,
    '&$extend': {
      marginTop: theme.spacing(-30),
    }
  },
  deco: {
    content: '""',
    overflow: 'hidden',
    backgroundImage: `url(${theme.palette.type === 'dark' ? decoDark : decoLight})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '350px',
    [theme.breakpoints.down('xs')]: {
      height: 120,
    },
    '@media (min-width: 1400px)': {
      backgroundPosition: '0 -70px'
    }
  },
  action: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    position: 'relative',
    paddingBottom: theme.spacing(7),
    '& h4': {
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    }
  },
}));

export default footerStyles;
