import React from 'react';
import PropTypes from 'prop-types';
import injectStyle from '../core/injectStyle';

function styles({ maxWidth }) {
  return {
    root: {
      ...maxWidth,
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
