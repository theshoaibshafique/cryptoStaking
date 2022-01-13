import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { withTranslation } from '~/i18n';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function ListWidget(props) {
  const classes = useStyles();
  const { t } = props;

  const periode = [
    'October 2018',
    'September 2018',
    'August 2018',
    'July 2018',
    'June 2018',
    'April 2018',
    'March 2018',
    'Febuary 2018'
  ];

  return (
    <Paper title={t('common:blog_archived')} icon="ion-folder" whiteBg desc="">
      <div>
        <div className={classes.albumRoot}>
          <List component="nav">
            {periode.map((item, index) => (
              <ListItem key={index.toString()} button>
                <ListItemText primary={item} />
                <KeyboardArrowRight className={classes.flipRtl} />
              </ListItem>
            ))}
          </List>
        </div>
        <Grid container justify="center">
          <Button fullWidth color="primary">
            See All
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

ListWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

ListWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(ListWidget);
