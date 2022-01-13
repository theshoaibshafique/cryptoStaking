import { makeStyles } from '@material-ui/core/styles';

const coinCardStyles = makeStyles(theme => ({
  coin: {
    padding: theme.spacing(5),
    border: '1px solid transparent',
    transition: 'all 0.3s ease-out',
    width: 360,
    [theme.breakpoints.down('xs')]: {
      width: 260,
      padding: theme.spacing(2)
    },
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  },
  header: {
    marginBottom: theme.spacing(3),
    display: 'flex'
  },
  logo: {
    boxShadow: theme.shade.light,
    marginRight: theme.spacing(3),
    width: 70,
    height: 70
  },
  name: {
    '& h4': {
      fontSize: 24,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: 4,
    },
    '& span': {
      background: theme.palette.divider,
      borderRadius: theme.rounded.small,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 16,
      padding: theme.spacing(0.25, 1.5),
      display: 'inline-block',
      paddingLeft: 12,
      position: 'relative',
      top: -4,
    },
    '& p': {
      marginBottom: 0
    }
  },
  price: {
    fontSize: theme.typography.fontWeightMedium,
  },
  property: {
    marginTop: theme.spacing(4),
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    '& p': {
      marginBottom: 0,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
    },
    '& i': {
      fontStyle: 'normal',
    }
  },
  down: {
    color: '#FF7272'
  },
  up: {
    color: '#00c708'
  },
  stay: {
    color: '#b2b2b2'
  }
}));

export default coinCardStyles;
