import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './slider-art-style';

function SliderArt(props) {
  const classes = useStyles();
  const { children, fade } = props;
  return (
    <div className={classes.deco}>
      <div className={clsx(classes.figure, fade ? classes.fade : '')}>
        {children}
      </div>
    </div>
  );
}

SliderArt.propTypes = {
  children: PropTypes.node.isRequired,
  fade: PropTypes.bool,
};

SliderArt.defaultProps = {
  fade: false
};

export default SliderArt;
