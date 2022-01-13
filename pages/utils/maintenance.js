import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import Avatar from '@material-ui/core/Avatar';
import Build from '@material-ui/icons/Build';
import Hidden from '@material-ui/core/Hidden';
import Settings from '@material-ui/icons/SettingsApplications';
import Warning from '@material-ui/icons/Warning';
import HexaDeco from '../../components/Decoration/HexaDeco';
import { withTranslation } from '~/i18n';
import { useSpacing, useTextAlign, useText } from '../../theme/common';
import brand from '../../public/text/brand';

function Maintenance(props) {
  const classes = useSpacing();
  const align = useTextAlign();
  const text = useText();
  const { t } = props;

  return (
    <Fragment>
      <Head>
        <title>
          { brand.crypto.name }
          &nbsp; - Maintenance
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.colouredPage}>
        <HexaDeco extend />
        <Container maxWidth="md">
          <div className={classes.fullScreenContainer}>
            <Grid container alignItems="center" justify="center">
              <Grid item md={12} className={align.textCenter}>
                <Box display="flex" justifyContent="center">
                  <Avatar className={clsx(classes.primaryIcon, classes.maintenanceIcon)}><Build /></Avatar>
                  <Hidden xsDown>
                    <Avatar className={clsx(classes.secondaryIcon, classes.maintenanceIcon)}><Settings /></Avatar>
                  </Hidden>
                  <Hidden xsDown>
                    <Avatar className={clsx(classes.accentIcon, classes.maintenanceIcon)}><Warning /></Avatar>
                  </Hidden>
                </Box>
                <div className={align.textCenter}>
                  <h3 className={text.title2}>
                    {t('common:util_maintenance')}
                  </h3>
                  <h5 className={text.subtitle2}>
                    {t('common:util_maintenance_dec')}
                  </h5>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

Maintenance.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Maintenance.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(Maintenance);
