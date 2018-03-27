import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

const styles = {
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    fontSize: 'inherit',
    padding: 0,
  },
};

function IconButton(props) {
  const { children, classes, className } = props;
  return (
    <button className={classNames(classes.iconButton, className)}>
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
