import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import HomePage from '../HomePage';

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
      color: theme.app.color,
      fontFamily: theme.app.fontFamily,
      margin: 0,
    }
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
});

function AppView(props) {
  const { classes } = props;

  return (
    <div className={classes.app}>
      <HomePage />
    </div>
  );
}

AppView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(AppView);
