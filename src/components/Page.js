import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';

const styles = theme => ({
  page: {
    ...theme.maxWidth,
  },
});

function Page(props) {
  const { classes, className, children } = props;
  return <div className={classNames(classes.page, className)}>{children}</div>;
}

export default injectSheet(styles)(Page);
