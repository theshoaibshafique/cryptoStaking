import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Head from 'next/head';
import { withTranslation } from '~/i18n';
import { useSpacing } from '../theme/common';
import Header from '../components/Header/Basic';
import Register from '../components/Forms/Register';
import Footer from '../components/Footer';
import FooterExtend from '../components/Footer/FooterExtend';
import brand from '../public/text/brand';
import link from '../public/text/link';

function RegisterPage(props) {
  // Theme breakpoints

   // Translation Function
  const { t } = props;

  const classes = useSpacing();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.crypto.name }
          &nbsp; - Register
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          text={t('common:header_login')}
          href={link.crypto.login}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Register />
          </div>
        </Container>
        <FooterExtend>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

RegisterPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

RegisterPage.propTypes = {
  t: PropTypes.func.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};


export default withTranslation(['common'])(RegisterPage);
