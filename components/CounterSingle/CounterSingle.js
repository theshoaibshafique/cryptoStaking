import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './counter-single-style';

function CounterSingle(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 200);
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ReactWOW animation="fadeIn" offset={200} callback={handlePlay}>
          <Typography variant="h4" className={text.title}>
            {countup(2, play)}
            &nbsp;
            {countup(234, play)}
            &nbsp;
            {countup(567, play)}
          </Typography>
          <p className={text.subtitle2}>
            {t('common:crypto-landing.footer_counter')}
          </p>
        </ReactWOW>
      </Container>
    </div>
  );
}

CounterSingle.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(CounterSingle);
