import React from 'react';
import PropTypes from 'prop-types';
import injectStyle from '../core/injectStyle';

function styles() {
  return {
    root: {
      margin: [0, 'auto'],
      maxWidth: 1260,
      width: '90vw',
    },
  };
}

function Page({ classes, children }) {
  return <div className={classes.root}>{children}</div>;
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default injectStyle(styles)(Page);
