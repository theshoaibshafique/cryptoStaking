import React, { useState } from 'react';
import ReactWOW from 'react-wow';
import clsx from 'clsx';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { useText } from '~/theme/common';
import useStyles from './about-style';

function Progress() {
  const classes = useStyles();
  const text = useText();

  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 200);
  };
  return (
    <div className={classes.progressWrap}>
      <ReactWOW animation="fadeIn" delay="0.4s" duration="0.3s" callback={handlePlay}>
        <ul>
          <li>
            <div className={classes.textIcon}>
              <i className={clsx('ion-wand', text.primaryColor)} />
              <Typography variant="h6" className={text.subtitle2}>UI Interface Design</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 80 : 0}
              color="primary"
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className={clsx('ion-social-dribbble-outline', text.secondaryColor)} />
              <Typography variant="h6" className={text.subtitle2}>Icon Design</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 70 : 0}
              color="secondary"
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className={clsx('ion-ios-world-outline', text.accentColor)} />
              <Typography variant="h6" className={text.subtitle2}>HTML Prototyping</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 60 : 0}
              className={classes.accent}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className={clsx('ion-ios-camera-outline', text.primaryColor)} />
              <Typography variant="h6" className={text.subtitle2}>Photo Editing</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 90 : 0}
              color="primary"
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className={clsx('ion-ios-snowy', text.secondaryColor)} />
              <Typography variant="h6" className={text.subtitle2}>Graphic Illustrations</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 80 : 0}
              color="secondary"
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
        </ul>
      </ReactWOW>
    </div>
  );
}

export default Progress;
