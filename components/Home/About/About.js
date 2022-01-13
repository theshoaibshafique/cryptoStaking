import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ReactWOW from 'react-wow';
import YouTube from 'react-youtube';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import yt from '~/youtube';
import { useText, useTextAlign } from '~/theme/common';
import Title from '../../Title';
import useStyles from './about-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function MainFeature(props) {
  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = props;
  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'https://localhost:3008'
    }
  };

  return (
    <div className={classes.mainFeature}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('common:crypto-landing.mainfeature_title')}
          <IconButton onClick={handleClose} className={classes.closeBtn}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="QPMkYyM2Gzg"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Container fixed>
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item md={6} xs={12} className={classes.featureWrap}>
            <div className={classes.deco}>
              <svg width="377px" height="440px" viewBox="0 0 377 440" version="1.1">
                <defs>
                  <linearGradient x1="34.1359172%" y1="14.3140713%" x2="132.662444%" y2="100%" id="primary-hexa">
                    <stop stopColor={theme.palette.primary.light} offset="0%" />
                    <stop stopColor={theme.palette.primary.main} offset="100%" />
                  </linearGradient>
                  <linearGradient x1="56.1985951%" y1="11.7667404%" x2="20.6835068%" y2="110.664023%" id="secondary-hexa">
                    <stop stopColor={theme.palette.secondary.main} offset="0%" />
                    <stop stopColor={theme.palette.secondary.light} offset="100%" />
                  </linearGradient>
                  <linearGradient x1="56.2159946%" y1="11.7667404%" x2="20.6012149%" y2="110.664023%" id="accent-hexa">
                    <stop stopColor={theme.palette.accent.light} offset="0%" />
                    <stop stopColor={theme.palette.accent.main} offset="100%" />
                  </linearGradient>
                </defs>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-208.000000, -968.000000)" id="Main-Feature">
                    <g transform="translate(112.000000, 782.000000)">
                      <g id="Group-3" transform="translate(96.000000, 186.000000)">
                        <path d="M0,293.262681 C0,308.794648 8.32197774,323.147545 21.8317273,330.913528 L166.668273,414.175512 C180.178022,421.941496 196.821978,421.941496 210.331727,414.175512 L355.168273,330.913528 C368.678022,323.147545 377,308.794648 377,293.262681 L377,126.738016 C377,111.205352 368.678022,96.8531518 355.168273,89.0864719 L210.331727,5.8244876 C196.821978,-1.94149587 180.178022,-1.94149587 166.668273,5.8244876 L21.8317273,89.0864719 C8.32197774,96.8531518 0,111.205352 0,126.738016 L0,293.262681 Z" id="Fill-1" fill="url(#secondary-hexa)" />
                        <path d="M315,360.877113 C315,363.465775 316.368601,365.857924 318.590364,367.152255 L342.409636,381.029252 C344.631399,382.323583 347.368601,382.323583 349.590364,381.029252 L373.409636,367.152255 C375.631399,365.857924 377,363.465775 377,360.877113 L377,333.123003 C377,330.534225 375.631399,328.142192 373.409636,326.847745 L349.590364,312.970748 C347.368601,311.676417 344.631399,311.676417 342.409636,312.970748 L318.590364,326.847745 C316.368601,328.142192 315,330.534225 315,333.123003 L315,360.877113 Z" id="Fill-1" fill="url(#primary-hexa)" />
                        <path d="M15,405.298115 C15,409.550915 17.2515696,413.480875 20.9067273,415.607276 L60.0932727,438.4052 C63.7484304,440.5316 68.2515696,440.5316 71.9067273,438.4052 L111.093273,415.607276 C114.74843,413.480875 117,409.550915 117,405.298115 L117,359.702076 C117,355.449085 114.74843,351.519315 111.093273,349.392724 L71.9067273,326.5948 C68.2515696,324.4684 63.7484304,324.4684 60.0932727,326.5948 L20.9067273,349.392724 C17.2515696,351.519315 15,355.449085 15,359.702076 L15,405.298115 Z" id="Fill-1" fill="url(#accent-hexa)" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className={classes.counter}>
              <ReactWOW
                animation="flipInY"
                offset={-80}
                delay="0.4s"
                duration="0.5s"
              >
                <div className={classes.lower}>
                  <Paper className={classes.paper}>
                    <span className="ion-ios-ionic-outline" />
                    <Typography variant="h6">
                      +600
                    </Typography>
                    <Typography display="block">
                      {t('common:crypto-landing.mainfeature_supported')}
                    </Typography>
                  </Paper>
                  <Paper className={classes.paper}>
                    <span className="ion-ios-people-outline" />
                    <Typography variant="h6">
                      +200K
                    </Typography>
                    <Typography display="block">
                      {t('common:crypto-landing.mainfeature_registered')}
                    </Typography>
                  </Paper>
                </div>
              </ReactWOW>
              <ReactWOW
                animation="flipInY"
                offset={-80}
                delay="0.2s"
                duration="0.5s"
              >
                <div className={classes.higher}>
                  <Paper className={classes.paper}>
                    <span className="ion-ios-box-outline" />
                    <Typography variant="h6">
                      +20M
                    </Typography>
                    <Typography display="block">
                      {t('common:crypto-landing.mainfeature_open')}
                    </Typography>
                  </Paper>
                  <Paper className={classes.paper}>
                    <span className="ion-ios-heart-outline" />
                    <Typography variant="h6">
                      +50M
                    </Typography>
                    <Typography display="block">
                      {t('common:crypto-landing.mainfeature_invested')}
                    </Typography>
                  </Paper>
                </div>
              </ReactWOW>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Title text={t('common:crypto-landing.mainfeature_title')} align={isMobile ? 'center' : 'left'} />
            <p className={clsx(isMobile ? align.textCenter : align.textLeft, text.subtitle2)}>
              {t('common:crypto-landing.mainfeature_subtitle')}
            </p>
            <Paper className={classes.video}>
              <figure>
                <img src={imgAPI.crypto[34]} alt="cover" />
              </figure>
              <IconButton className={classes.playBtn} onClick={handleClickOpen}>
                <span className="ion-ios-play-outline" />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

MainFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(MainFeature);
