import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  primaryColor: {},
  secondaryColor: {},
  cardHeader: {
    padding: 0,
    textTransform: 'uppercase',
    '&$primaryColor': {
      color: theme.palette.primary.main,
    },
    '&$secondaryColor': {
      color: theme.palette.secondary.main,
    },
    '& span': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 16,
    },
  },
  bordered: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  star: {
    fill: theme.palette.common.white,
  },
  hasBg: {
    backgroundImage: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: theme.palette.common.white,
    borderRadius: theme.rounded.medium,
    '& $cardHeader span': {
      color: theme.palette.common.white,
    },
    '& $cardPricing h2': {
      color: theme.palette.common.white,
    },
  },
  priceHeader: {
    padding: theme.spacing(5, 2),
    margin: 4
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    '& h2': {
      color: theme.palette.text.secondary
    }
  },
  cardContent: {
    padding: theme.spacing(1, 2),
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      padding: theme.spacing(1, 0),
      margin: theme.spacing(1, 0),
      color: theme.palette.text.secondary,
      borderBottom: `2px dashed ${theme.palette.divider}`,
      '&:last-child': {
        border: 'none'
      }
    }
  },
  btnArea: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    padding: theme.spacing(1.5, 3),
    display: 'block',
    '& button, a': {
      margin: '0 !important'
    },
    '& p': {
      position: 'relative',
      fontSize: 14
    },
    '&$primaryColor': {
      background: theme.palette.type === 'dark' ? fade(theme.palette.primary.dark, 0.3) : fade(theme.palette.primary.light, 0.3)
    },
    '&$secondaryColor': {
      background: theme.palette.type === 'dark' ? fade(theme.palette.secondary.dark, 0.3) : fade(theme.palette.secondary.light, 0.3)
    }
  }
}));

export default useStyles;
