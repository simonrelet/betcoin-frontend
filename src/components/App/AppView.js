import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import HomePage from '../HomePage';
import Header from '../Header';
import FamousQuote from '../FamousQuote';
import Responsiveness from '../Responsiveness';

const styles = theme => ({
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
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
    },
  },
  app: {
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
    marginTop: theme.spacingUnit * 4,
  },
});

function AppView(props) {
  const { classes } = props;

  return (
    <div className={classes.app}>
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

export default injectSheet(styles)(AppView);
