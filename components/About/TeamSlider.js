import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Carousel from "react-slick";
import { useText, useTextAlign } from "~/theme/common";
import { withTranslation } from "~/i18n";
import imgAPI from "~/public/images/imgAPI";
import ProfileCard from "../Cards/ProfileCard";
import Title from "../Title";
import useStyles from "./about-style";

function PhotoSlider(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const align = useTextAlign();

  const { t } = props;

  const [loaded, setLoaded] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    variableWidth: true,
    autoplay: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teamMembers = [
    { name: "SmartNodes", title: "CEO" },
    { name: "Jack ", title: "COO" },
    { name: "Athehmis ", title: "CFO" },
    { name: "JeyCosmos ", title: "CMO" },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={clsx(classes.teamRoot, classes.bgWrapper)}>
      <Container>
        <Box mb={3}>
          <Title
            text={t("common:about_team")}
            align={isMobile ? "center" : "left"}
          />
        </Box>
        <p className={clsx(text.subtitle2, isMobile ? align.textCenter : "")}>
          We are composed of a diversified team of IT, finance, marketing, and
          legal professionals working together toward the same goal.
        </p>
      </Container>
      <Box mt={5}>
        {loaded && (
          <div className={classes.carousel}>
            <Carousel {...settings}>
              {teamMembers.map((e, index) => (
                <div key={index.toString()} className={classes.item}>
                  <Box px={1}>
                    <ProfileCard
                      connection={100}
                      favorites={10}
                      albums={12}
                      avatar={imgAPI.avatar[index]}
                      name={e.name}
                      title={e.title}
                      type="round"
                      orientation="landscape"
                    />
                  </Box>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </Box>
    </div>
  );
}

PhotoSlider.propTypes = {
  t: PropTypes.func.isRequired,
};

PhotoSlider.getInitialProps = async () => ({
  namespacesRequired: ["common", "crypto-landing"],
});

export default withTranslation(["common", "crypto-landing"])(PhotoSlider);
