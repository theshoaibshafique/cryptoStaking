import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { Card, Typography, Button, Paper, Grid } from "@material-ui/core";
import { withTranslation } from "~/i18n";
import imgAPI from "~/public/images/imgAPI";

import { useText } from "~/theme/common";
import Title from "../../Title";
import useStyles from "./stake-style";

function Stake(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  return (
    <div className={classes.root}>
      <div className={classes.decoBg}>
        <svg>
          <use xlinkHref="/images/crypto/deco-benefit.svg#main" />
        </svg>
      </div>
      <Container maxWidth="lg" fixed>
        <div className={classes.wrapper}>
          <div className={classes.desc}>
            <Title text="Stake with us" align="center" />
            <p className={text.subtitle2}>
              Earn passive income in crypto by delegating your idle tokens. We
              contribute to secure the following blockchains.
            </p>
          </div>
        </div>
        <div className={classes.cards}>
          <Grid container spacing={1} alignItems="center">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
              <Grid item xs={6} md={3}>
                <Paper className={classes.paper}>
                  <img src="/images/terra-card-image.jpg" alt="" />
                  <h4 className={text.title2}>7.80 %</h4>
                  <p className={text.subtitle2}>Terra (LUNA)</p>
                  <div className={classes.btnArea}>
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Delegate
                    </Button>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

Stake.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(["crypto-landing"])(Stake);
