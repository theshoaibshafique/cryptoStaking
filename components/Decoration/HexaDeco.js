import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './decoration-style';

export default function HexaDeco(props) {
  const classes = useStyles();
  const { extend } = props;
  return (
    <div className={classes.hexaDeco}>
      {extend && (
        <div className={classes.extendDeco}>
          <svg className={clsx(classes.hexa, classes.top)}>
            <use xlinkHref="/images/crypto/deco-hexa.svg#main" />
          </svg>
        </div>
      )}
      <div className={classes.decoBg} />
    </div>
  );
}

HexaDeco.propTypes = {
  extend: PropTypes.bool,
};

HexaDeco.defaultProps = {
  extend: false
};
