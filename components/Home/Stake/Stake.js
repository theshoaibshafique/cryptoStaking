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
  const [coinAPR, setCoinAPR] = useState([]);

  // const coinReward = [
  //   { symbol: "bcna", value: "30.52", rewardToken: "akash" },
  //   { symbol: "btsg", value: "00.00", rewardToken: "akash" },
  //   { symbol: "cheq", value: "00.00", rewardToken: "akash" },
  //   { symbol: "hua", value: "00.00", rewardToken: "akash" },
  //   { symbol: "cmdx", value: "00.00", rewardToken: "akash" },
  //   { symbol: "atom", value: "13.17", rewardToken: "cosmos" },
  //   { symbol: "dsm", value: "00.00", rewardToken: "akash" },
  //   { symbol: "ngm", value: "17.62", rewardToken: "e-money" },
  //   { symbol: "fet", value: "00.00", rewardToken: "akash" },
  //   { symbol: "ixo", value: "00.00", rewardToken: "akash" },
  //   { symbol: "juno", value: "00.00", rewardToken: "akash" },
  //   { symbol: "kava", value: "5.56", rewardToken: "kava" },
  //   { symbol: "wicc", value: "00.00", rewardToken: "akash" },
  //   { symbol: "lum", value: "00.00", rewardToken: "akash" },
  //   { symbol: "med", value: "00.00", rewardToken: "akash" },
  //   { symbol: "TICK", value: "00.00", rewardToken: "akash" },
  //   { symbol: "odin", value: "3.83", rewardToken: "odins-pool" },
  //   {
  //     symbol: "akt",
  //     value: "00.00",
  //     rewardToken: "akash",
  //   },
  //   { symbol: "osmo", value: "66.88", rewardToken: "osmosis" },
  //   { symbol: "xprt", value: "30.35", rewardToken: "persistence" },
  //   { symbol: "dvpn", value: "56.56", rewardToken: "sentinel" },
  //   { symbol: "erowan", value: "112.85", rewardToken: "sifchain" },
  // ];

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
          axios
            .get(
              `
          https://firestore.googleapis.com/v1/projects/smartnode-f6334/databases/(default)/documents/apr/${response.data.symbol}`
            )
            .then(function (response) {
              setCoinAPR((coins) => [...coins, response.data]);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
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

  // console.log(coinAPR);
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
            <Title text="Supported Networks" align="center" />
            <p className={text.subtitle2}>
              Stake your crypto assets with us to earn passive daily rewards on
              our wide ecosystem of supported networks. We strive to contribute
              to these networks by providing validation services, nodes, tools
              and community support.
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
                    APR{" "}
                    {coinAPR.find(
                      (x) => x?.fields?.symbol?.stringValue == item.symbol
                    )
                      ? Object.values(
                          coinAPR.find(
                            (x) => x?.fields?.symbol?.stringValue == item.symbol
                          )?.fields.value
                        )
                      : "0.00"}{" "}
                    %
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
