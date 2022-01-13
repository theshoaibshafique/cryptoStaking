import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  ComposedChart,
  Area,
  Line,
  ResponsiveContainer
} from 'recharts';
import clsx from 'clsx';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withTranslation } from '~/i18n';
import { useTextAlign, useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import useStyles from './feature-style';

const coinData = [
  {
    name: 'BTC',
    logo: '/images/crypto/btc.png',
    status: 'up',
    price: 1234,
    percent: 3,
    dataCollection: [{ name: 'd1', uv: 11 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 4 }, { name: 'd5', uv: 6 }, { name: 'd6', uv: 11 }, { name: 'd7', uv: 13 }]
  },
  {
    name: 'DASH',
    logo: '/images/crypto/dash.png',
    status: 'up',
    price: 1234,
    percent: 2,
    dataCollection: [{ name: 'd1', uv: 5 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 4 }, { name: 'd4', uv: 14 }, { name: 'd5', uv: 16 }, { name: 'd6', uv: 20 }, { name: 'd7', uv: 22 }]
  },
  {
    name: 'NAN',
    logo: '/images/crypto/nan.png',
    status: 'down',
    price: 1234,
    percent: 10,
    dataCollection: [{ name: 'd1', uv: 15 }, { name: 'd2', uv: 20 }, { name: 'd3', uv: 14 }, { name: 'd4', uv: 12 }, { name: 'd5', uv: 10 }, { name: 'd6', uv: 10 }, { name: 'd7', uv: 6 }]
  },
  {
    name: 'MNR',
    logo: '/images/crypto/mnr.png',
    status: 'up',
    price: 1234,
    percent: 6,
    dataCollection: [{ name: 'd1', uv: 3 }, { name: 'd2', uv: 6 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 12 }, { name: 'd5', uv: 10 }, { name: 'd6', uv: 8 }, { name: 'd7', uv: 12 }]
  },
  {
    name: 'IOT',
    logo: '/images/crypto/iot.png',
    status: 'down',
    price: 1234,
    percent: 3,
    dataCollection: [{ name: 'd1', uv: 11 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 11 }, { name: 'd4', uv: 5 }, { name: 'd5', uv: 16 }, { name: 'd6', uv: 11 }, { name: 'd7', uv: 10 }]
  }
];

function MoreFeature(props) {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  const align = useTextAlign();

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const setChartColor = type => {
    if (type === 'up') {
      return 'url(#colorUp)';
    }
    if (type === 'down') {
      return 'url(#colorDown)';
    }
    return '#b9b9b9';
  };

  return (
    <div className={classes.moreFeature}>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={isMobile ? 0 : 6}>
            <Grid item md={6} xs={12}>
              <div className={classes.text}>
                <span className="ion-ios-analytics-outline" />
                <Title
                  text={t('common:crypto-landing.morefeature_title2')}
                  align={isMobile ? 'center' : 'left'}
                />
                <div className={isMobile ? align.textCenter : ''}>
                  <p className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('common:crypto-landing.morefeature_subtitle2')}
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ReactWOW
                animation="fadeInRightShort"
                delay="0.4s"
                duration="0.3s"
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.crypto[17]}
                    data-2d={imgAPI.crypto[16]}
                    data-3d={imgAPI.crypto[17]}
                    alt="feature"
                  />
                </figure>
              </ReactWOW>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid
            direction={isMobile ? 'column-reverse' : 'row'}
            container
            spacing={isMobile ? 0 : 6}
          >
            <Grid item md={6} xs={12}>
              <ReactWOW
                animation="fadeInLeftShort"
                offset={-100}
                delay="0.4s"
                duration="0.3s"
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.crypto[19]}
                    data-2d={imgAPI.crypto[18]}
                    data-3d={imgAPI.crypto[19]}
                    alt="feature"
                  />
                </figure>
              </ReactWOW>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, isMobile ? align.textCenter : align.textRight)}>
                <span className="ion-ios-locked-outline" />
                <Title
                  text={t('common:crypto-landing.morefeature_title1')}
                  align={isMobile ? 'center' : 'left'}
                />
                <div className={isMobile ? align.textCenter : ''}>
                  <p className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('common:crypto-landing.morefeature_subtitle1')}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item} id="statistic">
          <Grid container>
            <Grid item xs={12}>
              <div className={clsx(classes.text, classes.textCenter)}>
                <span className="ion-ios-bolt-outline" />
                <Title
                  text={t('common:crypto-landing.morefeature_title3')}
                  align="center"
                />
                <p className={clsx(text.subtitle2, align.textCenter)}>
                  {t('common:crypto-landing.morefeature_subtitle3')}
                </p>
              </div>
              <Container maxWidth="md">
                <ul className={classes.chartWrap}>
                  {coinData.map((item, index) => (
                    <li key={index.toString()}>
                      <div className={classes.coin}>
                        <Avatar src={item.logo} alt="item.name" className={classes.logo} />
                        <h5>
                          {item.name}
                        </h5>
                      </div>
                      <div className={classes.price}>
                        <h6>
                          $&nbsp;
                          {item.price}
                        </h6>
                        {item.status === 'down' && (
                          <div className={classes.down}>
                            <i>▼</i>
                            {item.percent}
                            %
                          </div>
                        )}
                        {item.status === 'up' && (
                          <div className={classes.up}>
                            <i>▲</i>
                            {item.percent}
                            %
                          </div>
                        )}
                        {item.status === 'stay' && (
                          <div className={classes.stay}>
                            <i>-</i>
                            {item.percent}
                            %
                          </div>
                        )}
                      </div>
                      <div className={classes.progress}>
                        {loaded && (
                          <ResponsiveContainer>
                            <ComposedChart
                              width={200}
                              height={50}
                              data={item.dataCollection}
                              margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                              }}
                            >
                              <defs>
                                <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#5dd662" stopOpacity={1} />
                                  <stop offset="95%" stopColor="#5dd662" stopOpacity={0.2} />
                                </linearGradient>
                                <linearGradient id="colorDown" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#ff7272" stopOpacity={1} />
                                  <stop offset="95%" stopColor="#ff7272" stopOpacity={0.2} />
                                </linearGradient>
                              </defs>
                              <Area type="monotone" dataKey="uv" stroke={setChartColor(item.status)} fill={setChartColor(item.status)} />
                              <Line type="monotone" dataKey="uv" stroke={setChartColor(item.status)} />
                            </ComposedChart>
                          </ResponsiveContainer>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Container>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

MoreFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(MoreFeature);
