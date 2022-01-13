import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

const decoBottomLight = '/images/crypto/deco-banner-light.svg';
const decoBottomDark = '/images/crypto/deco-banner-dark.svg';

const heroBanner = makeStyles(theme => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
    background: theme.palette.type === 'dark' ? `linear-gradient(120deg, ${darken(theme.palette.primary.main, 0.6)}, ${darken(theme.palette.secondary.main, 0.6)})` : `linear-gradient(120deg, ${lighten(theme.palette.primary.main, 0.9)}, ${lighten(theme.palette.secondary.main, 0.9)})`,
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(20)
    },
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${theme.palette.type === 'dark' ? decoBottomDark : decoBottomLight})`,
      backgroundPosition: 'bottom left',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      left: 0,
      bottom: 0,
    }
  },
}));

export default heroBanner;
