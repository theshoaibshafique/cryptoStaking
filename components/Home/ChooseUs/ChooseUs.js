import React from "react";
import { withTranslation } from "~/i18n";
import { Paper, Typography, Grid, Container } from "@material-ui/core";
import useStyles from "./chooseUs-style";
import { useText, useTextAlign } from "~/theme/common";

const ChooseUs = () => {
  const classes = useStyles();
  const text = useText();
  return (
    <div className={classes.chooseUs}>
      <div>
        <h2 className={text.title2}>Why choose us?</h2>
      </div>
      <div>
        <h5 className={text.subtitle2}>
          Here are some reasons why you will make the best decision by choosing
          us.
        </h5>
      </div>
      <Container>
        <div className={classes.cards}>
          <Grid container spacing={2} alignItems="center">
            {[1, 2, 3, 4].map((item, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Paper className={classes.paper}>
                  <span className="ion-ios-people-outline" />
                  <Typography variant="h6">Support</Typography>
                  <p>
                    Supporting crypto projects from the start, from deploying
                    nodes to bootstrapping communities.
                  </p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default withTranslation(["crypto-landing"])(ChooseUs);
