import React from 'react';
import PropTypes from 'prop-types';
import injectStyle from '../core/injectStyle';

function styles() {
  return {
    root: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      display: 'flex',
      fontSize: 'inherit',
      justifyContent: 'center',
      padding: 0,
    },
  };
}

function IconButton({ children, classes, ...otherProps }) {
  return (
    <button className={classes.root} {...otherProps}>
      {children}
    </button>
  );
}

IconButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default injectStyle(styles)(IconButton);
