import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import Paper from '../Paper';
import landingImage from './landing-image.png';
import Banner from './Banner';

const styles = theme => ({
  bitcoinBanner: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageBlock: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacingUnit * 4,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacingUnit,
    },
  },
  landingImage: {
    width: '100%',
    maxWidth: 'max-content',
  },
  banner: {
    flex: 'none',
  },
});

function BitcoinBanner(props) {
  const { classes, className } = props;
  return (
    <Paper className={classNames(classes.bitcoinBanner, className)}>
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
  className: PropTypes.string,
};

export default injectSheet(styles)(BitcoinBanner);
