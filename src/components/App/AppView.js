import React from 'react';
import PropTypes from 'prop-types';
import injectStyle from '../../core/injectStyle';
import HomePage from '../HomePage';
import Header from '../Header';
import FamousQuote from '../FamousQuote';
import Responsiveness from '../Responsiveness';

function styles({ palette, typography, spacingUnit }) {
  return {
    '@global': {
      '*': {
        boxSizing: 'inherit',
        '&::after,&::before': {
          boxSizing: 'inherit',
        },
      },
      html: {
        boxSizing: 'border-box',
      },
      body: {
        color: palette.text.primary,
        backgroundColor: palette.background.default,
        fontFamily: typography.fontFamily,
        margin: 0,
      },
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    header: {
      flex: 'none',
    },
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
    },
    page: {
      flex: [1, 0, 'auto'],
    },
    quote: {
      flex: 'none',
      marginTop: spacingUnit * 4,
    },
  };
}

function AppView({ classes }) {
  return (
    <div className={classes.root}>
      <Header className={classes.header} />
      <div className={classes.content}>
        <HomePage className={classes.page} />
        <Responsiveness up="sm">
          <FamousQuote className={classes.quote} />
        </Responsiveness>
      </div>
    </div>
  );
}

AppView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(AppView);
