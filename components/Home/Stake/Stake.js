import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { Button, Paper, Grid } from "@material-ui/core";
import { withTranslation } from "~/i18n";
import axios from "axios";
import { useText } from "~/theme/common";
import Title from "../../Title";
import useStyles from "./stake-style";
import Link from "next/link";

function Stake(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const [coins, setCoins] = useState([]);

  const coinReward = [
    { symbol: "akt", value: "40.12" },
    { symbol: "bcna", value: "00.00" },
    { symbol: "btsg", value: "00.00" },
    { symbol: "cheq", value: "00.00" },
    { symbol: "hua", value: "00.00" },
    { symbol: "cmdx", value: "00.00" },
    { symbol: "atom", value: "13.17" },
    { symbol: "dsm", value: "00.00" },
    { symbol: "ngm", value: "17.62" },
    { symbol: "fet", value: "00.00" },
    { symbol: "ixo", value: "00.00" },
    { symbol: "juno", value: "00.00" },
    { symbol: "kava", value: "5.58" },
    { symbol: "wicc", value: "00.00" },
    { symbol: "lum", value: "00.00" },
    { symbol: "med", value: "00.00" },
    { symbol: "TICK", value: "00.00" },
    { symbol: "odin", value: "00.00" },
    { symbol: "osmo", value: "66.66" },
    { symbol: "xprt", value: "30.42" },
    { symbol: "dvpn", value: "54.7" },
    { symbol: "erowan", value: "115.32" },
  ];

  const coinIds = [
    "bitcanna",
    "bitsong",
    "cheqd-network",
    "chihuahua",
    "comdex",
    "cosmos",
    "desmos",
    "e-money",
    "fetch-ai",
    "ixo",
    "juno-network",
    "kava",
    "waykichain",
    "lum-rune",
    "medibloc",
    "microtick",
    "odin-protocol",
    "osmosis",
    "persistence",
    "sentinel",
    "sifchain",
    "akash-network",
  ];

  const getData = () => {
    coinIds.forEach(async (coinID) => {
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${coinID}?localization=false`
        )
        .then(function (response) {
          // handle success
          // console.log(response.data);
          setCoins((coins) => [...coins, response.data]);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  //console.log(coins);
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
            {coins?.map((item, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Paper className={classes.paper}>
                  <img src={item.image.large} alt="" />
                  <h4 className={text.title2}>
                    {coinReward.find((x) => x.symbol == item.symbol).value} %
                  </h4>
                  <p className={text.subtitle3}>{`${
                    item.name
                  } (${item.symbol.toUpperCase()})`}</p>
                  <div className={classes.btnArea}>
                    <Link href={`staking/${item.id}`}>
                      <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Delegate
                      </Button>
                    </Link>
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
