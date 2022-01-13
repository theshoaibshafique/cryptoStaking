import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ReactWOW from 'react-wow';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './download-style';

function CallAction(props) {
  // Translation Function
  const { t } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <ReactWOW animation="fadeInUpShort" offset={40} delay="0.3s" duration="0.5s">
        <div className={classes.root}>
          {isDesktop && (
            <figure>
              <img src={imgAPI.crypto[35]} alt="mobile" />
            </figure>
          )}
          <div>
            <h3>{t('common:crypto-landing.download_mobile')}</h3>
            <div className={classes.btnArea}>
              <a href="#">
                <img src="/images/crypto/app-store.png" alt="app store" />
              </a>
              <a href="#">
                <img src="/images/crypto/play-store.png" alt="play store" />
              </a>
            </div>
          </div>
        </div>
      </ReactWOW>
    </Container>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(CallAction);
