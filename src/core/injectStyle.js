import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

function composeStyle(Component) {
  function Stylable({ classes, className, ...otherProps }) {
    const composedClasses = {
      ...classes,
      root: classNames(classes.root, className),
    };

    return <Component classes={composedClasses} {...otherProps} />;
  }

  Stylable.displayName = getDisplayName(Component);

  return Stylable;
}

export default function injectStyle(...args) {
  return Component => injectSheet(...args)(composeStyle(Component));
}
