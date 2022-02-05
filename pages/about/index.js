import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import imgAPI from "~/public/images/imgAPI";
import { useSpacing } from "../../theme/common";
import Header from "../../components/Header";
import Counter from "../../components/Counter";
import Banner from "../../components/About/Banner";
import PhotoSlider from "../../components/About/PhotoSlider";
import TeamSlider from "../../components/About/TeamSlider";
import AboutVideo from "../../components/About/Video";
import AboutProgress from "../../components/About/Progress";
import CompanyLogo from "../../components/CompanyLogo";
import Footer from "../../components/Footer";
import FooterExtend from "../../components/Footer/FooterExtend";
import brand from "../../public/text/brand";
import { useText } from "~/theme/common";

function About(props) {
  const classes = useSpacing();
  const text = useText();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          {brand.crypto.name}
          &nbsp; - About
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <div className={classes.containerFront}>
          <Banner>
            <img
              src={"https://i.ibb.co/5KF28mv/about-3d-2x.png"}
              className="img-2d3d"
              alt="services 3d"
            />
          </Banner>
          {/* <CompanyLogo />
          <div className={classes.spaceTopShort}>
            <Counter />
          </div> */}
          <div className={classes.spaceTopShort}>
            <div className={classes.containerGeneral2}>
              <div className={text.subtitle2}>
                We are composed of a diversified team of IT, finance, marketing,
                and legal professionals working together toward the same goal,
                building the future of web3 along side our partners, our
                community, and our delegators. We are committed, passionate and
                serious about what we do, and we strive to be the best at it.
              </div>

              <div className={text.title3}>
                As such, our mission consists into:
              </div>

              <div className={text.subtitle2}>
                <ul>
                  <li>
                    Being a leading provider in decentralized infrastructure to
                    proof of stake blockchains and decentralized projects.
                  </li>
                  <li>
                    Providing best in class Stacking-as-a-service solutions to
                    investors and token holders.
                  </li>
                  <li>Building strong communities and partnerships.</li>
                </ul>
              </div>
              <div className={text.subtitle2}>
                We are always developing new approaches and best in class
                practices. We pride ourselves in our strong technical knowledge,
                community driven mindset and dedication to the cosmos ecosystem.
              </div>
            </div>

            {/* <Container>
              <Grid container justify="center" spacing={6}>
                <Grid item md={6} xs={12}>
                  <AboutVideo />
                </Grid>
                <Grid item md={6} sm={8} xs={12}>
                  <AboutProgress />
                </Grid>
              </Grid>
            </Container> */}
          </div>
          <div className={classes.spaceTopShort}>
            <TeamSlider />
          </div>
          {/* <div className={classes.spaceTopShort}>
            <PhotoSlider />
          </div> */}

          <div className={classes.spaceTopShort}>
            <div className={classes.containerGeneral2}>
              <div className={text.title2}>Run your own validator</div>

              <div className={text.subtitle2}>
                <p>
                  The more validators are active on the network, the more secure
                  and decentralized it is. With the number of chains coming
                  online, we will need more and more validators to service them
                  all. As such, SmartNodes is launching a new set of services
                  geared toward Validators.
                </p>
              </div>
              <div className={text.title3}>
                Securely operate your own validator with us :
              </div>
              <div className={text.subtitle2}>
                <p>
                  We offer white-glove services to investors and individuals
                  wishing to run their own validator. We adapt to the needs of
                  each client and offer a large array of services. We offer
                  simple validator node set up, sentry nodes set up, KMS server
                  set ups, Prometheus/Grafana monitoring set up, cosmovisor
                  upgrades etc.
                </p>
                <p>
                  We can help you build your own infrastructure from the ground
                  up, or we can fully manage and maintain a validator for your
                  organization with zero hassle from your end. Decentralization
                  being one of our core values, we make sure that any validator
                  managed by SmartNodes runs on a different localization and
                  provider to strengthen the network.
                </p>
              </div>
              <div className={text.title3}>
                Already running your own validator and looking to upgrade your
                infrastructure?{" "}
              </div>
              <div className={text.subtitle2}>
                <p>
                  Use our experts to help you scale your operation and secure
                  your architecture.
                </p>
                <p>
                  For any inquiries regarding SmartNodes validator-as-a-service
                  and consulting services, please write us to
                  validator@smartnodes.one
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer toggleDir={onToggleDir} />
        {/* <FooterExtend withCounter>
        </FooterExtend> */}
      </div>
    </Fragment>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

About.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default About;
