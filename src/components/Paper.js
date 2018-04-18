import React from 'react';
import PropTypes from 'prop-types';
import injectStyle from '../core/injectStyle';

function styles({ palette, shadows }) {
  return {
    root: {
      backgroundColor: palette.background.paper,
      border: {
        width: 1,
        style: 'solid',
        color: palette.divider,
      },
      boxShadow: props => shadows[props.elevation],
    },
  };
}

function Paper({ classes, children, elevation, ...otherProps }) {
  return (
    <div className={classes.root} {...otherProps}>
      {children}
    </div>
  );
}

Paper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  elevation: PropTypes.number,
};

Paper.defaultProps = {
  elevation: 0,
};

export default injectStyle(styles)(Paper);
