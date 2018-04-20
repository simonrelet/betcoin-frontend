import PropTypes from 'prop-types';
import React from 'react';
import injectStyle from '../../core/injectStyle';

function styles({ spacing, palette, breakpoints }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: spacing(),
      fontSize: 24,
      textTransform: 'uppercase',
      color: palette.white,
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      [breakpoints.down('sm')]: {
        fontSize: 18,
      },
    },
  };
}

function Team({ classes, name, color }) {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className={classes.root} style={style}>
      {name}
    </div>
  );
}

export const TeamPropTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Team.propTypes = {
  classes: PropTypes.object.isRequired,
  ...TeamPropTypes,
};

export default injectStyle(styles)(Team);
