import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import ReactWOW from "react-wow";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withTranslation } from "~/i18n";
import { useText } from "~/theme/common";
import useStyles from "./counter-single-style";

function Counter1(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>{isPlay ? <CountUp end={val} /> : 0}</span>
  );
  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 200);
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ReactWOW animation="fadeIn" offset={200} callback={handlePlay}>
          <p className={text.subtitle2}>Total Value Locked</p>
          <Typography variant="h2" className={text.title}>
            <span>&#36; </span> {countup(2, play)}
            &#44;
            {countup(234, play)}
            &#44;
            {countup(567, play)}
          </Typography>
        </ReactWOW>
      </Container>
    </div>
  );
}

CounterSingle.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(["crypto-landing"])(Counter1);
