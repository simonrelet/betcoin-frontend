import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';

const styles = theme => ({
  team: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacingUnit,
    fontSize: 24,
    textTransform: 'uppercase',
    color: theme.palette.common.white,
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
});

function Team(props) {
  const { classes, className, name, color } = props;
  const style = {
    backgroundColor: color,
  }

  return (
    <div className={classNames(classes.team, className)} style={style}>
      {name}
    </div>
  );
}

export default injectSheet(styles)(Team);
