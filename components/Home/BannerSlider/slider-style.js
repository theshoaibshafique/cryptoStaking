import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken, fade } from '@material-ui/core/styles/colorManipulator';
const decoBottomLight = '/images/crypto/deco-banner-light.svg';
const decoBottomDark = '/images/crypto/deco-banner-dark.svg';

const sliderStyle = makeStyles(theme => ({
  bannerWrap: {
    '& ul[class*="slick-dots"]': {
      zIndex: 1,
      bottom: 0
    }
  },
  root: {
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: theme.palette.type === 'dark' ? `linear-gradient(120deg, ${darken(theme.palette.primary.main, 0.6)}, ${darken(theme.palette.secondary.main, 0.6)})` : `linear-gradient(120deg, ${lighten(theme.palette.primary.main, 0.9)}, ${lighten(theme.palette.secondary.main, 0.9)})`,
    paddingBottom: 320,
    marginBottom: -320,
    [theme.breakpoints.down('sm')]: {
      marginBottom: -400
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
  slider: {
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('sm')]: {
        zIndex: 1
      }
    }
  },
  centerContent: {},
  slide1: {},
  slide2: {},
  slide3: {},
  img: {
    display: 'flex'
  },
  slide: {
    [theme.breakpoints.up('md')]: {
      height: 500,
      paddingTop: theme.spacing(5),
    },
    [theme.breakpoints.up('lg')]: {
      height: 600,
      paddingTop: theme.spacing(10)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(15, 0, 10, 0),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(15, 0, 5)
    },
    '& img': {
      margin: '0 auto',
      maxHeight: 350,
      position: 'relative',
      marginTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        maxWidth: '100%'
      },
      [theme.breakpoints.down('xs')]: {
        maxHeight: 230
      }
    },
    '&$centerContent': {
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(20)
      }
    }
  },
  imgSlide1: {
    [theme.breakpoints.down('lg')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    },
    [theme.breakpoints.down('sm')]: {
      right: 0
    },
  },
  imgSlide2: {
    [theme.breakpoints.between('md', 'xl')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    }
  },
  carousel: {
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      zIndex: 5
    },
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      marginTop: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        width: '50%'
      },
    }
  },
  backgroundBanner: {
    position: 'absolute',
    zIndex: 3,
    left: theme.direction === 'rtl' ? -280 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -280,
    '& img': {
      maxHeight: 320,
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      left: theme.direction === 'rtl' ? -380 : 'auto',
      right: theme.direction === 'rtl' ? 'auto' : -380,
      bottom: 0
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  slideNavGroup: {
    position: 'relative',
    zIndex: 20,
  },
  cur: {},
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    direction: 'ltr',
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4)
    }
  },
  button: {},
  btnArea: {
    '& $button': {
      fontSize: 18,
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxWidth: 300,
        marginBottom: theme.spacing(2),
      }
    }
  },
  slideNav: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 1080,
    margin: '0 auto',
  },
  active: {},
  btnNav: {
    padding: theme.spacing(1, 2, 0.5),
    textTransform: 'none',
    height: 'auto',
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    border: '1px solid transparent',
    borderRadius: theme.rounded.small,
    '& strong': {
      transition: 'all 0.3s ease',
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:hover': {
      borderColor: theme.palette.secondary.main,
      background: fade(theme.palette.text.primary, 0.08)
    },
    '&$active': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      '& strong': {
        color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
      },
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

export default sliderStyle;
