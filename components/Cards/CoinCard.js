import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { useText } from '~/theme/common';
import useStyles from './coin-card-style';

function CoinCard(props) {
  const classes = useStyles();
  const text = useText();
  const {
    logo,
    name,
    price,
    status,
    volume,
    percent,
  } = props;

  return (
    <Card className={classes.coin}>
      <div className={classes.header}>
        <Avatar className={classes.logo} src={logo} alt={name} />
        <div className={classes.name}>
          <h4>
            {name}
            &nbsp;
            <span>USD</span>
          </h4>
          <p>
            <i className="ion-flame" />
            Top Volume
          </p>
        </div>
      </div>
      <div className={classes.price}>
        <h3 className={text.title2}>
          $&nbsp;
          {price}
        </h3>
      </div>
      <div className={classes.property}>
        <Grid container>
          <Grid item xs={6}>
            {status === 'down' && (
              <span className={classes.down}>
                <i>▼</i>
                { percent}
                %
              </span>
            )}
            {status === 'up' && (
              <span className={classes.up}>
                <i>▲</i>
                { percent}
                %
              </span>
            )}
            {status === 'stay' && (
              <span className={classes.stay}>
                <i>▲</i>
                { percent}
                %
              </span>
            )}
            <p className={text.caption}>24h Change</p>
          </Grid>
          <Grid item xs={6}>
            {volume}
            <p className={text.caption}>24h Volume</p>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}

CoinCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default CoinCard;
