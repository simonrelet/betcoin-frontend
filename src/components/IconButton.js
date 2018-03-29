import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

const styles = {
  iconButton: {
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

function IconButton(props) {
  const { children, classes, className, ...otherProps } = props;
  return (
    <button
      className={classNames(classes.iconButton, className)}
      {...otherProps}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default injectSheet(styles)(IconButton);
