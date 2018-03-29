import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { I18n } from 'react-i18next';
import HandCoinIcon from '../../icons/HandCoinIcon';

const styles = theme => ({
  banner: {
    backgroundColor: theme.palette.secondary.base,
    padding: [theme.spacingUnit * 2, theme.spacingUnit * 6],
    display: 'flex',
    flex: 'none',
    justifyContent: 'center',
    height: 150,
    borderBottom: {
      color: theme.palette.secondary.darker,
      style: 'solid',
      width: 10,
    },
    [theme.breakpoints.down('md')]: {
      height: 80,
      padding: [theme.spacingUnit, theme.spacingUnit * 3],
    },
  },
  icon: {
    height: '100%',
    flex: 'none',
    marginRight: theme.spacingUnit * 4,
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
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('xs')]: {
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
});

function Banner(props) {
  const { classes, className } = props;
  return (
    <I18n>
      {translate => (
        <div className={classNames(classes.banner, className)}>
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
  className: PropTypes.string,
};

export default injectSheet(styles)(Banner);
