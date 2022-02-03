import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import HeroBanner from "../HeroBanner";
import { useText } from "~/theme/common";
import useStyles from "./about-style";

function Banner(props) {
  const classes = useStyles();
  const text = useText();
  const { children } = props;

  return (
    <HeroBanner>
      <div className={classes.bannerWrap}>
        <div className={classes.inner}>
          <Container>
            <Grid container alignItems="center" justify="center">
              <Grid item md={6} xs={12}>
                <Box px={{ sm: 2 }}>
                  <div className={classes.text}>
                    <h4 className={text.title}>About Us</h4>
                    <h5 className={text.subtitle2}>
                      SmartNodes is an infrastructure provider for
                      Proof-Of-Stake blockchains and decentralized projects. We
                      mainly run validator nodes in the cosmos ecosystem and
                      provide our clients with fast, easy, and secure staking
                      services.
                    </h5>
                  </div>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box px={{ sm: 5 }}>
                  <div className={classes.img}>{children}</div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </HeroBanner>
  );
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
