import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

function styles(theme) {
  const { palette, shadows } = theme;
  return {
    paper: {
      backgroundColor: palette.background.paper,
      border: {
        width: 1,
        style: 'solid',
        color: theme.palette.divider,
      },
      boxShadow: props => shadows[props.elevation],
    },
  };
}

function Paper(props) {
  const { classes, className, children, elevation, ...otherProps } = props;
  return (
    <div className={classNames(classes.paper, className)} {...otherProps}>
      {children}
    </div>
  );
}

Paper.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  elevation: PropTypes.number,
};

Paper.defaultProps = {
  elevation: 0,
};

export default injectSheet(styles)(Paper);
