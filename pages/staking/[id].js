import React, { Fragment, useState, useEffect } from "react";
import { withTranslation } from "~/i18n";
import Head from "next/head";
import { useSpacing } from "../../theme/common";
import { useText } from "~/theme/common";
import useStyles from "~/theme/staking-style";
import Footer from "../../components/Footer";
import brand from "../../public/text/brand";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Paper, Grid, Slider, TextField } from "@material-ui/core";
import Header from "../../components/Header";
import PropTypes from "prop-types";
import axios from "axios";

import { LineChart, Line, ResponsiveContainer } from "recharts";

import LanguageIcon from "@material-ui/icons/Language";
import BookIcon from "@material-ui/icons/Book";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

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

const Staking = ({ coinId, onToggleDark, onToggleDir }) => {
  const classes = useSpacing();
  const classes2 = useStyles();
  const text = useText();
  const [coinData, setCoinData] = useState("");
  const [marketData, setMarketData] = useState([]);
  const [coinAmount, setCoinAmount] = useState(1000);
  var chartData = [];
  const coinReward = [
    { symbol: "bcna", value: "30.52", rewardToken: "akash" },
    { symbol: "btsg", value: "00.00", rewardToken: "akash" },
    { symbol: "cheq", value: "00.00", rewardToken: "akash" },
    { symbol: "hua", value: "00.00", rewardToken: "akash" },
    { symbol: "cmdx", value: "00.00", rewardToken: "akash" },
    { symbol: "atom", value: "13.17", rewardToken: "cosmos" },
    { symbol: "dsm", value: "00.00", rewardToken: "akash" },
    { symbol: "ngm", value: "17.62", rewardToken: "e-money" },
    { symbol: "fet", value: "00.00", rewardToken: "akash" },
    { symbol: "ixo", value: "00.00", rewardToken: "akash" },
    { symbol: "juno", value: "00.00", rewardToken: "akash" },
    { symbol: "kava", value: "5.56", rewardToken: "kava" },
    { symbol: "wicc", value: "00.00", rewardToken: "akash" },
    { symbol: "lum", value: "00.00", rewardToken: "akash" },
    { symbol: "med", value: "00.00", rewardToken: "akash" },
    { symbol: "TICK", value: "00.00", rewardToken: "akash" },
    { symbol: "odin", value: "3.83", rewardToken: "odins-pool" },
    {
      symbol: "akt",
      value: "00.00",
      rewardToken: "akash",
    },
    { symbol: "osmo", value: "66.88", rewardToken: "osmosis" },
    { symbol: "xprt", value: "30.35", rewardToken: "persistence" },
    { symbol: "dvpn", value: "56.56", rewardToken: "sentinel" },
    { symbol: "erowan", value: "112.85", rewardToken: "sifchain" },
  ];

  const getData = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false`
      )
      .then(function (response) {
        // handle success
        setCoinData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30&interval=daily`
      )
      .then(function (response) {
        // handle success
        // console.log(response.data.prices);
        setMarketData(response.data.prices);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event, newValue) => {
    setCoinAmount(newValue);
  };

  // const handleInputChange = (event) => {
  //   event.preventDefault();
  //   setCoinAmount(event.target.value);
  // };
  chartData = marketData.map((x) => {
    return {
      date: x[0],
      price: x[1],
    };
  });

  return (
    <Fragment>
      <Head>
        <title>
          {coinData?.name} Staking &nbsp; - {brand.crypto.name}
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <div className={classes.containerGeneral}>
          <div className={classes2.wrap}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={8}>
                <Paper className={classes2.paper}>
                  <div className={classes2.title}>
                    <img src={coinData?.image?.thumb} alt="" />
                    <span className={text.title3}>
                      {`${
                        coinData?.name
                      } (${coinData?.symbol?.toUpperCase()}) Staking`}
                    </span>
                  </div>
                  <div>
                    <span
                      className={text.title4}
                    >{`What is ${coinData?.name}?`}</span>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    {coinData?.description?.en}
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <span className={text.title4}>
                      Link to Useful Information
                    </span>
                  </div>
                  <div className={classes2.links}>
                    <span>
                      <a
                        href={coinData?.links?.homepage[0]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LanguageIcon /> Website
                      </a>
                    </span>
                    <span>
                      <a
                        href={coinData?.links?.announcement_url[0]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BookIcon /> Blog
                      </a>
                    </span>
                    <span>
                      <a
                        href={coinData?.links?.repos_url?.github[0]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHubIcon /> Github
                      </a>
                    </span>
                    <span>
                      <a
                        href={`https://twitter.com/${coinData?.links?.twitter_screen_name}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TwitterIcon /> Twitter
                      </a>
                    </span>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={4}>
                <div className={classes2.chartContainer}>
                  <div className={classes2.chartHeaderContainer}>
                    <div className={classes2.chartHeader}>
                      <span className={classes2.heading}>Price</span>
                      <span className={classes2.headingValue}>
                        ${" "}
                        {coinData?.market_data?.current_price?.usd?.toFixed(2)}
                      </span>
                    </div>
                    <div className={classes2.chartHeader}>
                      <span className={classes2.heading}>24h Change</span>
                      <span className={classes2.headingValue}>
                        {coinData?.market_data?.price_change_percentage_24h?.toFixed(
                          2
                        )}{" "}
                        %
                      </span>
                    </div>
                  </div>
                  <div className={classes2.chart}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart width={300} height={100} data={chartData}>
                        <Line
                          type="monotone"
                          dataKey="price"
                          stroke="#ffffff"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div style={{ marginTop: "20px" }}>
              <Paper className={classes2.paper}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                      <span className={text.title4}>
                        HOW MUCH CAN YOU EARN BY STAKING{" "}
                        {coinData?.symbol?.toUpperCase()}?
                      </span>
                    </div>
                    <div className={classes2.chartHeaderContainer}>
                      <div className={classes2.chartHeader}>
                        <span>
                          {`${
                            coinData?.name
                          } AMOUNT (${coinData?.symbol?.toUpperCase()})`}
                        </span>
                        <span className={classes2.values}>
                          {coinAmount?.toFixed(2)}{" "}
                          {coinData?.symbol?.toUpperCase()}
                        </span>
                      </div>
                      <div className={classes2.chartHeader}>
                        <span>{`${coinData?.name} AMOUNT (USD)`}</span>
                        <span className={classes2.values}>
                          ${" "}
                          {(
                            coinAmount *
                            coinData?.market_data?.current_price?.usd
                          )?.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <Slider
                        value={coinAmount}
                        onChange={handleChange}
                        max={10000}
                      />
                    </div>
                    {/* <div>
                      <TextField
                        label="Custom Amount"
                        placeholder="Custom Amount"
                        variant="outlined"
                        onChange={handleInputChange}
                      />
                    </div> */}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                      <span className={text.title4}>
                        REWARD AND MONTHLY/YEARLY EARNINGS
                      </span>
                    </div>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <div className={classes2.chartHeader2}>
                        <span>ANNUALIZED REWARD</span>
                        <span className={classes2.values2}>
                          {
                            coinReward.find((x) => x.symbol == coinData.symbol)
                              ?.value
                          }{" "}
                          %
                        </span>
                      </div>
                    </div>
                    <div>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <div className={classes2.chartHeader}>
                            <span>MONTHLY EARNINGS</span>
                            <span className={classes2.values}>
                              {(
                                coinAmount *
                                (coinReward.find(
                                  (x) => x.symbol == coinData.symbol
                                )?.value /
                                  100 /
                                  12)
                              )?.toFixed(2)}{" "}
                              {coinData?.symbol?.toUpperCase()}
                            </span>
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className={classes2.chartHeader2}>
                            <span>MONTHLY EARNINGS</span>
                            <span className={classes2.values}>
                              ${" "}
                              {(
                                coinAmount *
                                (coinReward.find(
                                  (x) => x.symbol == coinData.symbol
                                )?.value /
                                  100 /
                                  12) *
                                coinData?.market_data?.current_price?.usd
                              )?.toFixed(2)}
                            </span>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <div className={classes2.chartHeader}>
                            <span>YEARLY EARNINGS</span>
                            <span className={classes2.values}>
                              {(
                                coinAmount *
                                (coinReward.find(
                                  (x) => x.symbol == coinData.symbol
                                )?.value /
                                  100)
                              )?.toFixed(2)}{" "}
                              {coinData?.symbol?.toUpperCase()}
                            </span>
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className={classes2.chartHeader2}>
                            <span>YEARLY EARNINGS</span>
                            <span className={classes2.values}>
                              ${" "}
                              {(
                                coinAmount *
                                (coinReward.find(
                                  (x) => x.symbol == coinData.symbol
                                )?.value /
                                  100) *
                                coinData?.market_data?.current_price?.usd
                              )?.toFixed(2)}
                            </span>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
};

export async function getStaticProps({ params }) {
  const coinId = params.id;
  return {
    props: {
      coinId,
    },
  };
}

export async function getStaticPaths() {
  const paths = coinIds.map((coinId) => {
    return {
      params: {
        id: coinId,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
Staking.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default withTranslation(["common"])(Staking);
