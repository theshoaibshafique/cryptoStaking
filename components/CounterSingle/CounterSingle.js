import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import ReactWOW from "react-wow";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withTranslation } from "~/i18n";
import { useText } from "~/theme/common";
import useStyles from "./counter-single-style";
import axios from "axios";
function CounterSingle(props) {
  const classes = useStyles();
  const text = useText();
  const { t, name } = props;
  const [play, setPlay] = useState(false);
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const countup = (val, isPlay) => (
    <span>{isPlay ? <CountUp end={val} /> : 0}</span>
  );
  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 1000);
  };

  const getData = async () => {
    await axios
      .get(
        "https://firestore.googleapis.com/v1/projects/smartnode-f6334/databases/(default)/documents/data/userData"
      )
      .then(function (response) {
        // handle success
        setData1(response.data.fields.balance.integerValue);
        setData2(response.data.fields.users.integerValue);

        // console.log(response.data.fields);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
    handlePlay();
  }, []);

  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ReactWOW animation="fadeIn" offset={100} callback={handlePlay}>
          {name == "Balance" ? (
            <>
              <p className={text.subtitle2}>{name}</p>
              <Typography variant="h2" className={text.title}>
                {/* $ {countup(data?.balance?.integerValue, play)} */}
                $ <CountUp separator="," end={data1} />
              </Typography>
            </>
          ) : (
            <>
              <p className={text.subtitle2}>{name}</p>
              <Typography variant="h2" className={text.title}>
                {/* {countup(data?.users?.integerValue, play)} */}
                <CountUp separator="," end={data2} />
              </Typography>
            </>
          )}
        </ReactWOW>
      </Container>
    </div>
  );
}

CounterSingle.propTypes = {
  t: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
};

export default withTranslation(["crypto-landing"])(CounterSingle);
