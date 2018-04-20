import PropTypes from 'prop-types';
import React from 'react';
import { I18n } from 'react-i18next';
import injectStyle from '../../core/injectStyle';
import HandCoinIcon from '../../icons/HandCoinIcon';

function styles({ palette, spacing, breakpoints }) {
  return {
    root: {
      backgroundColor: palette.secondary.base,
      padding: [spacing(2), spacing(6)],
      display: 'flex',
      flex: 'none',
      justifyContent: 'center',
      height: 150,
      borderBottom: {
        color: palette.secondary.darker,
        style: 'solid',
        width: 10,
      },
      [breakpoints.down('md')]: {
        height: 80,
        padding: [spacing(), spacing(3)],
      },
    },
    icon: {
      height: '100%',
      flex: 'none',
      marginRight: spacing(4),
    },
    content: {
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    item: {
      fontSize: 28,
      textTransform: 'uppercase',
      [breakpoints.down('md')]: {
        fontSize: 20,
      },
      [breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },
    left: {
      composes: '$item',
      alignSelf: 'flex-start',
    },
    right: {
      composes: '$item',
      alignSelf: 'flex-end',
    },
  };
}

function Banner({ classes }) {
  return (
    <I18n>
      {translate => (
        <div className={classes.root}>
          <HandCoinIcon className={classes.icon} />

          <div className={classes.content}>
            <div className={classes.left}>{translate('home.banner.bet')}</div>
            <div className={classes.right}>
              {translate('home.banner.pronostic')}
            </div>
          </div>
        </div>
      )}
    </I18n>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(Banner);
