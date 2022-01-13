import { makeStyles } from '@material-ui/core/styles';

const sliderArtStyles = makeStyles(theme => ({
  deco: {
    [theme.breakpoints.up('lg')]: {
      width: 640
    },
    '& img': {
      zIndex: 5,
      position: 'relative',
      maxHeight: 360
    },
  },
  figure: {
    height: 600,
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('sm')]: {
      display: 'none !important'
    }
  },
  fade: {
    opacity: '0.15',
  }
}));

export default sliderArtStyles;
