import React from "react";
import { withTranslation } from "~/i18n";
import { Paper, Typography, Grid, Container } from "@material-ui/core";
import useStyles from "./chooseUs-style";
import { useText, useTextAlign } from "~/theme/common";

const ChooseUs = () => {
  const classes = useStyles();
  const text = useText();
  const chooseusData = [
    // {
    //   icon: "ion-social-bitcoin",
    //   title: "Low Fees",
    //   text: "Our goal is to minimize fees as much as possible while maintaining high reliable and safe node infrastructure.",
    // },
    {
      icon: "ion-lock-combination",
      title: "Security",
      text: "We run multiple servers with enterprise-grade protection(against (Layer3 and 4 DDoS attacks).",
    },
    {
      icon: "ion-help-buoy",
      title: "Support",
      text: "Supporting crypto projects from the start, from deploying nodes to bootstrapping communities.",
    },
    {
      icon: "ion-ios-people",
      title: "Commnity",
      text: "We are very active in the community and always willing to lend a hand in time of need.  The Crypto Space is large and fast, please never feel alone.",
    },
    {
      icon: "ion-android-lock",
      title: "Insurance",
      text: "The Smart Nodes Staking Insurance Fund is designed to cover staking losses in case of an accident caused by Smart Nodes.",
    },
  ];
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
            {chooseusData.map((item, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Paper className={classes.paper}>
                  <span className={item.icon} />
                  <Typography variant="h6">{item.title}</Typography>
                  <p>{item.text}</p>
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
