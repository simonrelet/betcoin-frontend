import React from 'react';
import PropTypes from 'prop-types';
import injectStyle from '../core/injectStyle';

const styles = {
  root: {
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    height: 24,
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    userSelect: 'none',
  },
};

function Icon({ children, classes, viewBox, ...otherProps }) {
  return (
    <svg viewBox={viewBox} className={classes.root} {...otherProps}>
      {children}
    </svg>
  );
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  viewBox: PropTypes.string.isRequired,
};

export default injectStyle(styles)(Icon);
