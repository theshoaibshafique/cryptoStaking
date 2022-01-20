import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { useSpacing } from "../theme/common";
import MarketPrice from "../components/Home/MarketPrice";
import Header from "../components/Header";
import BannerSlider from "../components/Home/BannerSlider";
import About from "../components/Home/About";
import ChooseUs from "../components/Home/ChooseUs";
import Feature from "../components/Home/Feature";
import Benefit from "../components/Home/Benefit";
import Stake from "../components/Home/Stake";
import TopCoin from "../components/Home/TopCoin";
import Testimonials from "../components/Home/Testimonials";
import NewsEvent from "../components/Home/NewsEvent";
import DownloadBanner from "../components/Home/DownloadBanner";
import Corner from "../components/Home/Corner";
import Footer from "../components/Footer";
import FooterExtend from "../components/Footer/FooterExtend";
import Notification from "../components/Notification";
import brand from "../public/text/brand";

function Landing(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          {brand.crypto.name}
          &nbsp;- Home Page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        {/* <Hidden mdDown>
          <MarketPrice />
        </Hidden> */}
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <main className={clsx(classes.containerWrap, classes.containerFront)}>
          <section id="home">
            <BannerSlider />
          </section>
          {/* <section id="about" className={classes.spaceTop}>
            <About />
          </section> */}
          <section id="choose" className={classes.spaceTop}>
            <ChooseUs />
          </section>
          {/* <section
            id="feature"
            className={isTablet ? classes.spaceTop : classes.spaceTopShort}
          >
            <Feature />
          </section> */}
          <section id="delegate" className={classes.spaceTop}>
            <Stake />
          </section>
          <section id="view-market" className={classes.spaceTop}>
            <TopCoin />
          </section>
          <section id="testimonials" className={classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="news" className={classes.spaceTopShort}>
            <NewsEvent />
          </section>
          <DownloadBanner />
        </main>
        <FooterExtend withCounter>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
        <Hidden smDown>
          <Corner />
        </Hidden>
        {/* <Hidden mdDown>
          <Notification />
        </Hidden> */}
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ["common", "crypto-landing"],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
