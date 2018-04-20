import PropTypes from 'prop-types';
import React from 'react';
import injectStyle from '../../core/injectStyle';
import Paper from '../Paper';
import Banner from './Banner';
import landingImage from './landing-image.png';

function styles({ spacing, breakpoints }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    imageBlock: {
      flex: 1,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: spacing(4),
      [breakpoints.down('sm')]: {
        padding: spacing(),
      },
    },
    landingImage: {
      width: '100%',
      maxWidth: 'max-content',
    },
    banner: {
      flex: 'none',
    },
  };
}

function BitcoinBanner({ classes }) {
  return (
    <Paper className={classes.root} padding={false}>
      <div className={classes.imageBlock}>
        <img
          src={landingImage}
          alt="Welcome to Betcoin"
          className={classes.landingImage}
        />
      </div>
      <Banner className={classes.banner} />
    </Paper>
  );
}

BitcoinBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(BitcoinBanner);
