import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import injectStyle from '../core/injectStyle';
// Needed to allow override of the icons' CSS classes
import '../icons/Icon';

function styles({ palette, shadows, spacing }) {
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
    withPadding: {
      padding: spacing(4),
    },
    icon: {
      height: 80,
      marginBottom: spacing(2),
    },
    title: {
      color: palette.text.default.secondary,
      fontSize: 30,
      fontWeight: 400,
      textAlign: 'center',
      margin: [spacing(2), 0],
    },
  };
}

function Paper({
  classes,
  children,
  elevation,
  padding,
  title,
  icon: Icon,
  ...otherProps
}) {
  const className = classNames({
    [classes.root]: true,
    [classes.withPadding]: padding,
  });

  return (
    <div className={className} {...otherProps}>
      {Icon && <Icon className={classes.icon} />}
      {title && <h2 className={classes.title}>{title}</h2>}
      {children}
    </div>
  );
}

Paper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  elevation: PropTypes.number,
  padding: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.func,
};

Paper.defaultProps = {
  elevation: 0,
  padding: true,
};

export default injectStyle(styles)(Paper);
