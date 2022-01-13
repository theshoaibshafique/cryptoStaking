import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
const hexaSecondary = '/images/crypto/hexa-secondary.svg';
const hexaAccent = '/images/crypto/hexa-accent.svg';

const benefitStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    background: theme.palette.type === 'dark' ? `linear-gradient(120deg, ${darken(theme.palette.primary.main, 0.6)}, ${darken(theme.palette.secondary.main, 0.6)})` : `linear-gradient(120deg, ${lighten(theme.palette.primary.main, 0.9)}, ${lighten(theme.palette.secondary.main, 0.9)})`,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(10),
      borderRadius: '30px 30px 0 0',
    }
  },
  decoBg: {
    position: 'absolute',
    left: 0,
    top: theme.spacing(5),
    width: '100%',
    height: '100%',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      top: -120,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '& svg': {
      fill: theme.palette.type === 'dark' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'dark' ? 0.12 : 0.5,
      width: 700,
      height: 700,
    },
    '&:before': {
      content: '""',
      width: 80,
      height: 80,
      position: 'absolute',
      transform: 'rotate(15deg)',
      top: 100,
      left: 100,
      background: `url(${hexaSecondary}) no-repeat`
    },
    '&:after': {
      content: '""',
      width: 80,
      height: 80,
      position: 'absolute',
      bottom: 150,
      right: 100,
      background: `url(${hexaAccent}) no-repeat`,
    }
  },
  wrapper: {
    position: 'relative',
    paddingTop: theme.spacing(10),
    margin: '0 auto'
  },
  carousel: {
    marginTop: theme.spacing(5),
    marginBottom: -200,
    '& figure': {
      borderRadius: 10,
      overflow: 'hidden',
      margin: 0,
      '& img': {
        display: 'block',
        width: '100%',
      }
    },
    '& ul[class*="slick-dots"]': {
      position: 'relative',
      zIndex: 1,
      bottom: 10,
      '& li': {
        margin: '1px 2px',
        width: 15,
        height: '10px !important',
        border: '1px solid',
        borderColor: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        borderRadius: 15,
        opacity: 0.7,
        transition: 'all 0.5s ease-out',
        margin: '0 4px',
        '&[class="slick-active"]': {
          width: 30,
          background: theme.palette.type === 'dark' ? `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})` : `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`
        },
        '& button:before': {
          display: 'none'
        }
      }
    }
  },
  slider: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  slide: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2)
    }
  },
  border: {
    boxShadow: theme.palette.type === 'dark' ? theme.shade.dark : theme.shade.light,
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    position: 'relative'
  },
  desc: {
    padding: theme.spacing(0, 0, 8, 3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0, 8, 0),
      '& button': {
        width: '100%'
      }
    }
  },
  img: {
    margin: theme.spacing(3, 0, 0, 0),
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      textAlign: 'right',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      height: '100%'
    },
    '& img': {
      maxWidth: '100%',
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  }
}));

export default benefitStyles;
