import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import injectStyle from '../../core/injectStyle';
import Callback from '../Callback';
import FamousQuote from '../FamousQuote';
import Header from '../Header';
import HomePage from '../HomePage';

function styles({ palette, typography, spacing }) {
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
        fontSize: typography.fontSize,
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
      marginTop: spacing(4),
    },
  };
}

function AppView({ classes }) {
  return (
    <div className={classes.root}>
      <Header className={classes.header} />
      <div className={classes.content}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <HomePage {...props} className={classes.page} />}
          />
          <Route
            path="/callback"
            render={props => <Callback {...props} className={classes.page} />}
          />
          <Route to="*" render={() => <Redirect to="/" />} />
        </Switch>

        <FamousQuote className={classes.quote} />
      </div>
    </div>
  );
}

AppView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(AppView);
