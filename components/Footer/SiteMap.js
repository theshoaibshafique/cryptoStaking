import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import LangIcon from "@material-ui/icons/Language";
import InputAdornment from "@material-ui/core/InputAdornment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import { i18n, withTranslation } from "~/i18n";
import logo from "~/public/images/smart-logo.svg";
import brand from "~/public/text/brand";
import { useTextAlign } from "~/theme/common";
import useStyles from "./sitemap-style";
import BookIcon from "@material-ui/icons/Book";
import { useRouter } from "next/router";

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {brand.crypto.footerText}
    </Typography>
  );
}

const footers = [
  {
    title: "Company",
    description: ["Home", "Why Us?", "Delegate", "Faq", "About"],
    link: ["#home", "#choose", "#delegate", "#faq", "about"],
  },

  // {
  //   title: "Resources",
  //   description: [
  //     "Resource",
  //     "Resource name",
  //     "Another resource",
  //     "Final resource",
  //   ],
  //   link: [
  //     "#resource",
  //     "#resource-name",
  //     "#another-resource",
  //     "#final-resource",
  //   ],
  // },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
    link: ["#privacy-policy", "#terms-of-use"],
  },
];

function Footer(props) {
  const [ctn, setCtn] = useState(null);
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  // Translation Function
  const { t } = props;

  const classes = useStyles();
  const align = useTextAlign();
  const [values, setValues] = useState({
    lang: "",
  });

  useEffect(() => {
    setValues({ lang: i18n.language });
    setCtn(document.getElementById("main-wrap"));
  }, []);

  function handleChange(event) {
    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    if (event.target.value === "ara") {
      i18n.changeLanguage("ara");
      props.toggleDir("rtl");
    } else {
      i18n.changeLanguage(event.target.value);
      props.toggleDir("ltr");
    }
  }

  return (
    <Container className={classes.root} maxWidth="lg" component="footer">
      <Grid className={classes.footer} container spacing={4}>
        <Grid item xs={12} md={3}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
            {/* {brand.crypto.projectName} */}
          </div>
          <Typography
            color="textPrimary"
            className={classes.footerDesc}
            gutterBottom
          >
            SmartNodes is an infrastructure provider for Proof-Of-Stake
            blockchains and decentralized projects.
          </Typography>
          {isDesktop && <Copyright />}
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container justify="space-evenly">
            {footers.map((footer) => (
              <Grid
                item
                xs={12}
                md={3}
                key={footer.title}
                className={classes.siteMapItem}
              >
                {isDesktop && (
                  <div>
                    <Typography
                      variant="h6"
                      className={classes.title}
                      color="textPrimary"
                      gutterBottom
                    >
                      {footer.title}
                    </Typography>
                    <ul>
                      {footer.description.map((item, index) => (
                        <li
                          key={item}
                          onClick={() => {
                            router.push(`/${footer.link[index]}`);
                          }}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isMobile && (
                  <Accordion
                    square
                    classes={{
                      root: classes.accordionRoot,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className={classes.accordionIcon} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      classes={{
                        content: classes.accordionContent,
                      }}
                    >
                      <strong>{footer.title}</strong>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        {footer.description.map((item, index) => (
                          <li
                            key={item}
                            onClick={() => {
                              router.push(`/${footer.link[index]}`);
                            }}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.socmed}>
            <a
              href="https://twitter.com/nodes_smart?s=20"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                aria-label="FB"
                className={classes.margin}
                size="small"
              >
                <i className="ion-social-twitter" />
              </IconButton>
            </a>
            <a
              href="https://www.reddit.com/r/smart_nodes/?utm_medium=android_app&utm_source=share"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                aria-label="TW"
                className={classes.margin}
                size="small"
              >
                <i className="ion-social-reddit" />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/smartnodes_validator/?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                aria-label="IG"
                className={classes.margin}
                size="small"
              >
                <i className="ion-social-instagram" />
              </IconButton>
            </a>
            <a
              href="https://www.youtube.com/channel/UCWE4DmXbutLlUuMJx3-NhCw"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                aria-label="YT"
                className={classes.margin}
                size="small"
              >
                <i className="ion-social-youtube" />
              </IconButton>
            </a>
            <a
              href="https://github.com/Smart-Nodes"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                aria-label="LI"
                className={classes.margin}
                size="small"
              >
                <i className="ion-social-github" />
              </IconButton>
            </a>
            <a
              href="https://medium.com/@smartnodes"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                aria-label="LI"
                className={classes.margin}
                size="small"
              >
                <i className="ion-ios-bookmarks" />
              </IconButton>
            </a>
          </div>
          {/* <Select
            value={values.lang}
            onChange={handleChange}
            MenuProps={{
              container: ctn,
            }}
            startAdornment={
              <InputAdornment className={classes.icon} position="start">
                <LangIcon />
              </InputAdornment>
            }
            className={classes.selectLang}
            input={
              <OutlinedInput
                labelWidth={200}
                name="lang"
                id="outlined-lang-simple"
              />
            }
          >
            <MenuItem value="eng">English</MenuItem>
            <MenuItem value="deu">Deutsch</MenuItem>
            <MenuItem value="ara">????????????????</MenuItem>
            <MenuItem value="ind">Bahasa Indonesia</MenuItem>
            <MenuItem value="prt">Portugu??s</MenuItem>
            <MenuItem value="zho">????????????</MenuItem>
          </Select> */}
        </Grid>
      </Grid>
      {isMobile && (
        <div className={align.textCenter}>
          <Box p={4}>
            <Copyright />
          </Box>
        </div>
      )}
    </Container>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default withTranslation(["crypto-landing"])(Footer);
