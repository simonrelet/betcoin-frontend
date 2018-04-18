import React from 'react';
import PropTypes from 'prop-types';
import injectStyle from '../../core/injectStyle';
import Paper from '../Paper';
import landingImage from './landing-image.png';
import Banner from './Banner';

function styles({ spacingUnit, breakpoints }) {
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
      padding: spacingUnit * 4,
      [breakpoints.down('sm')]: {
        padding: spacingUnit,
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
    <Paper className={classes.root}>
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
