import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  moreFeature: {
    position: 'relative',
    zIndex: 3,
    '& figure': {
      margin: 0
    },
  },
  item: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3, 15),
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(10)
    },
    '& p': {
      marginBottom: theme.spacing(3),
    }
  },
  text: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: 0
    },
    '& > span': {
      position: 'absolute',
      color: theme.palette.text.disabled,
      top: -10,
      fontSize: 38,
      zIndex: 2,
      left: 7,
      [theme.breakpoints.down('sm')]: {
        left: 'calc(50% - 7px)'
      }
    }
  },
  textCenter: {
    textAlign: 'center',
    '& span': {
      left: 'calc(50% - 7px)'
    }
  },
  illustration: {
    '& img': {
      display: 'block',
      margin: '0 auto',
      maxWidth: 475,
      maxHeight: 475,
      [theme.breakpoints.only('xs')]: {
        width: '100%'
      }
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
  },
  logo: {},
  chartWrap: {
    padding: 0,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 6, 0)
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        alignItems: 'center'
      },
      '& h5': {
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('xs')]: {
          fontSize: '16px !important'
        }
      }
    }
  },
  coin: {
    display: 'flex',
    alignItems: 'center',
    width: 120,
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      float: 'left'
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 24
    },
    '& $logo': {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(1),
        width: 20,
        height: 20,
      }
    }
  },
  price: {
    marginTop: theme.spacing(),
    padding: theme.spacing(0, 5),
    fontWeight: theme.typography.fontMedium,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    '& h6': {
      fontSize: 18,
    },
    '& i': {
      fontStyle: 'normal'
    }
  },
  progress: {
    width: '100%',
    height: 50
  }
}));

export default featureStyles;
