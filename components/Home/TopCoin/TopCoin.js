import React, { useState, useRef } from 'react';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import ReactWOW from 'react-wow';
import Fab from '@material-ui/core/Fab';
import Carousel from 'react-slick';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './top-coin-style';
import SliderArt from '../SliderArt';
import Title from '../../Title';
import CoinCard from '../../Cards/CoinCard';

const coinData = [
  {
    logo: '/images/crypto/btc.png',
    name: 'BTC',
    price: 1020,
    status: 'up',
    volume: 12345678,
    percent: 8
  },
  {
    logo: '/images/crypto/xrp.png',
    name: 'XRP',
    price: 12.56,
    status: 'down',
    volume: 123456789,
    percent: 3
  },
  {
    logo: '/images/crypto/nem.png',
    name: 'NEM',
    price: 0.3,
    status: 'up',
    volume: 123456,
    percent: 8
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 18.56,
    status: 'down',
    volume: 12345678,
    percent: 3
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    volume: 12345,
    percent: 8
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    volume: 12345678,
    percent: 3
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 0.01,
    status: 'down',
    volume: 123456789,
    percent: 3
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    volume: 12345678910,
    percent: 8
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    volume: 12345,
    percent: 3
  }
];

function TopCoin(props) {
  const { t } = props;
  const theme = useTheme();
  const classes = useStyles();
  const slider = useRef(null);
  const [fade, setFade] = useState(false);
  const text = useText();
  const align = useTextAlign();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    afterChange: current => {
      if (current >= 1) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
  };

  return (
    <div className={classes.root}>
      <Container>
        <Title
          text={t('common:crypto-landing.banner_viewmarket')}
          align="center"
        />
        <p className={clsx(text.subtitle2, align.textCenter)}>
          {t('common:crypto-landing.banner_title')}
        </p>
      </Container>
      <div className={classes.floatingArtwork}>
        <Container fixed>
          <SliderArt fade={fade}>
            <ReactWOW animation="fadeInRightShort" offset={60} delay="0.3s" duration="0.5s">
              <div>
                <img
                  src={imgAPI.crypto[11]}
                  data-2d={imgAPI.crypto[10]}
                  data-3d={imgAPI.crypto[11]}
                  className="img-2d3d"
                  alt="services 3d"
                />
              </div>
            </ReactWOW>
          </SliderArt>
        </Container>
      </div>
      <div className={classes.slideWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            <div className={clsx(classes.props, classes.itemPropsFirst)}>
              <div />
            </div>
            {coinData.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <CoinCard
                  logo={item.logo}
                  name={item.name}
                  price={item.price}
                  status={item.status}
                  volume={item.volume}
                  percent={item.percent}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <Fab size="small" onClick={() => slider.current.slickNext()} aria-label="prev" className={clsx(classes.nav, classes.prev)}>
          <i className="ion-chevron-left" />
        </Fab>
        <Fab size="small" onClick={() => slider.current.slickPrev()} aria-label="next" className={clsx(classes.nav, classes.next)}>
          <i className="ion-chevron-right" />
        </Fab>
      </div>
    </div>
  );
}

TopCoin.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(TopCoin);
