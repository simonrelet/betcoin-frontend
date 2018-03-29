import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

const styles = {
  icon: {
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    height: 24,
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    userSelect: 'none',
  },
};

function Icon(props) {
  const { children, classes, className, viewBox } = props;
  return (
    <svg viewBox={viewBox} className={classNames(classes.icon, className)}>
      {children}
    </svg>
  );
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
}

export default injectSheet(styles)(Icon);
