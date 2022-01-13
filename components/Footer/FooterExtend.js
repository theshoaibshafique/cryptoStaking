import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Counter from '../CounterSingle';
import useStyles from './footer-extend-style';

function FooterExtend(props) {
  const classes = useStyles();
  const text = useText();
  const { withCounter, children } = props;
  const { t } = props;
  return (
    <div className={clsx(classes.footerCounter, withCounter ? classes.extend : '')}>
      <span className={classes.deco} />
      {withCounter && (
        <div>
          <Counter />
          <div className={classes.action}>
            <h4 className={text.title2}>
              {t('common:about_ready')}
            </h4>
            <Button color="secondary" size="large" variant="contained">
              {t('common:crypto-landing.getstarted')}
            </Button>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

FooterExtend.propTypes = {
  withCounter: PropTypes.bool,
  children: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired
};

FooterExtend.defaultProps = {
  withCounter: false
};

export default withTranslation(['crypto-landing'])(FooterExtend);
