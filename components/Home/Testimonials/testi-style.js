import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(10)
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingBottom: theme.spacing(5)
    }
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 4),
    },
    '& > div': {
      zIndex: 10,
      marginBottom: 0
    },
    '&:after, &:before': {
      content: '""',
      borderRadius: 12,
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      height: 150,
      position: 'absolute',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    '&:after': {
      width: '90%',
      bottom: 5,
      left: '50%',
      transform: 'translate(-50%, 0)'
    },
    '&:before': {
      width: '80%',
      bottom: -15,
      left: '50%',
      transform: 'translate(-50%, 0)'
    },
    '& > button': {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
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
  item: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(7, 1, 0),
    },
    '&:focus': {
      outline: 'none'
    }
  },
  slideContent: {
    animationDuration: '1s',
    animationFillMode: 'both'
  },
  slide: {
    background: 'none'
  },
  nav: {
    position: 'absolute',
    border: 'none',
    zIndex: 12,
    top: '48%',
    width: 40,
    height: 40,
    padding: 0,
    minWidth: 0,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    boxShadow: theme.shade.light,
    borderRadius: theme.rounded.small,
    cursor: 'pointer',
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)',
    '& i': {
      color: theme.palette.primary.main,
      position: 'relative',
      fontSize: 32,
    },
    '&:focus': {
      outline: 'none'
    },
  },
  prev: {
    left: 22,
    '& svg': {
      right: 2,
      marginTop: 3
    }
  },
  next: {
    right: 22,
    '& svg': {
      left: 2,
      marginTop: 3
    }
  },
}));

export default testiStyles;
