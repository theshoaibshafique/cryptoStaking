import { makeStyles } from '@material-ui/core/styles';
const hexaSecondary = '/images/crypto/hexa-secondary.svg';
const hexaAccent = '/images/crypto/hexa-accent.svg';

const decorationStyles = makeStyles(theme => ({
  decoBg: {
    position: 'absolute',
    left: 0,
    top: theme.spacing(5),
    width: '100%',
    height: '100%',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '&:before': {
      content: '""',
      width: 80,
      height: 80,
      position: 'absolute',
      top: 300,
      left: -10,
      background: `url(${hexaAccent}) no-repeat`
    },
    '&:after': {
      content: '""',
      width: 80,
      height: 80,
      position: 'absolute',
      top: 100,
      right: -30,
      background: `url(${hexaSecondary}) no-repeat`
    }
  },
  extendDeco: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    '& svg': {
      position: 'absolute',
      fill: '#A9A9A9',
      opacity: 0.2,
      width: 300,
      height: 300,
      transform: 'rotate(30deg) scale(0.75)',
      transformOrigin: 'top center'
    }
  },
  top: {},
  bottom: {},
  hexa: {
    '&$top': {
      top: 0,
      left: 40,
    },
    '&$bottom': {
      right: 0,
      bottom: -220
    }
  }
}));

export default decorationStyles;
