import { makeStyles } from '@material-ui/core/styles';

const marketStyles = makeStyles(theme => ({
  market: {
    position: 'absolute',
    top: 0,
    zIndex: 1200,
    left: 0,
    width: '100%',
    height: 40,
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    padding: theme.spacing(),
  },
  item: {
    padding: theme.spacing(0.5, 4),
    fontSize: 14,
    '&:focus': {
      outline: 'none'
    }
  },
  logo: {},
  coin: {
    display: 'flex',
    fontWeight: theme.typography.fontWeightBold,
    '& $logo': {
      width: 20,
      height: 'auto',
      marginRight: theme.spacing(),
      '& img': {
        width: '100%',
        height: 'auto',
      },
    },
    '& i': {
      fontStyle: 'normal'
    }
  },
  down: {
    color: '#FF7272'
  },
  up: {
    color: '#5DD662'
  },
  stay: {
    color: '#b2b2b2'
  },
}));

export default marketStyles;
