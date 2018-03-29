import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import moment from 'moment';
import { I18n } from 'react-i18next';
import IconButton from '../IconButton';
import Responsiveness from '../Responsiveness';

const styles = theme => {
  const backgroundColor = theme.palette.common.black;
  const color = theme.palette.common.white;
  const colorSecondary = theme.palette.textAlternative.secondary;
  const pillSize = 5;

  return {
    date: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundColor,
      zIndex: 1,
    },
    item: {
      color,
      '&:not(:first-child)': {
        marginTop: theme.spacingUnit,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    label: {
      composes: '$item',
      color: colorSecondary,
    },
    time: {
      composes: '$item',
      fontSize: 32,
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
      },
    },
    day: {
      composes: '$item',
    },
    pills: {
      composes: '$item',
      display: 'flex',
    },
    pillButton: {
      padding: theme.spacingUnit,
    },
    pill: {
      borderRadius: '50%',
      height: pillSize,
      width: pillSize,
      backgroundColor: colorSecondary,
    },
    curentPill: {
      backgroundColor: color,
    },
    triangle: {
      position: 'absolute',
      height: '100%',
      width: '10%',
      fill: backgroundColor,
      top: 0,
    },
    triangle1: {
      composes: '$triangle',
      left: '-10%',
    },
    triangle2: {
      composes: '$triangle',
      right: '-10%',
    },
  };
};

function Triangle(props) {
  const { children, ...otherProps } = props;
  return (
    <svg viewBox="0 0 1 1" preserveAspectRatio="none" {...otherProps}>
      {children}
    </svg>
  );
}

function Date(props) {
  const {
    classes,
    className,
    date,
    matchCount,
    matchIndex,
    onChangeMatch,
  } = props;

  const matchs = [...Array(matchCount)];

  return (
    <I18n>
      {translate => (
        <div className={classNames(classes.date, className)}>
          <Triangle className={classes.triangle1}>
            <path d="M1 0L0 1L1 1z" />
          </Triangle>

          <div className={classes.label}>
            {translate('jumbotron.nextMatch')}
          </div>
          <div className={classes.time}>{moment(date).format('HH:mm')}</div>
          <div className={classes.day}>{moment(date).format('D MMMM')}</div>

          <Responsiveness up="md">
            <div className={classes.pills}>
              {matchs.map((_, index) => (
                <IconButton
                  key={index}
                  className={classes.pillButton}
                  onClick={() => onChangeMatch(index)}
                >
                  <div
                    className={classNames({
                      [classes.pill]: true,
                      [classes.curentPill]: matchIndex === index,
                    })}
                  />
                </IconButton>
              ))}
            </div>
          </Responsiveness>

          <Triangle className={classes.triangle2}>
            <path d="M0 0L1 0L0 1z" />
          </Triangle>
        </div>
      )}
    </I18n>
  );
}

export default injectSheet(styles)(Date);
