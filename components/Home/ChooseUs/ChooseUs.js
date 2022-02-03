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
      text: "We use a multilayer security set up relying on private connectivities and public sentry nodes to mitigate any network attacks while maintaining continued backups and failsafe measures to optimize uptime. We use a mix of software and hardware key management solutions, 24/7 monitoring, and well-designed internal protocols to insure a highly secured architecture.",
    },
    {
      icon: "ion-ios-world-outline",
      title: "Infrastructure",
      text: "We use enterprise grade dell servers globally distributed across state-of-the-art and environmentally friendly data centers.",
    },
    {
      icon: "ion-ios-people",
      title: "Community",
      text: "SmartNodes is highly rooted in the cosmos community. We are active across all our supported networks and strive to be a positive force within each ecosystem. We are highly available throughout our platform as well as our partners platforms and social media. We are committed to contribute and give back to the ecosystem systems and the communities we adhere to. ",
    },
    {
      icon: "ion-android-lock",
      title: "100% Slashing insurance",
      text: "We offer all our delegators a protection of their funds in case of any slashing event due to downtime or technical difficulties resulting in missed blocks and rewards. Never lose any funds or miss out on any rewards due to uptime slashing.",
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
