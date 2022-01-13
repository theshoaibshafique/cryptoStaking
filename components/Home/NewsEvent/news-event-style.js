import { makeStyles } from '@material-ui/core/styles';

const newsEventStyle = makeStyles(theme => ({
  root: {
    position: 'relative',
    maxWidth: 1140,
    margin: '0 auto'
  },
  carousel: {
    '& *:focus': {
      outline: 'none'
    },
    '& ul[class*="slick-dots"]': {
      margin: '1px 2px',
      position: 'relative',
      zIndex: 1,
      bottom: theme.spacing(-5),
      '& li': {
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
    padding: theme.spacing(),
  },
}));

export default newsEventStyle;
