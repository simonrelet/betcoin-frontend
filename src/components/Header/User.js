import PropTypes from 'prop-types';
import React from 'react';
import injectStyle from '../../core/injectStyle';
import Responsiveness from '../Responsiveness';
import WithUser from '../WithUser';

function styles({ spacing }) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      display: 'flex',
      overflow: 'hidden',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      marginLeft: spacing(2),
    },
    picture: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  };
}

function User({ classes }) {
  return (
    <WithUser>
      {user =>
        user && (
          <div className={classes.root}>
            <Responsiveness up="sm">{user.name}</Responsiveness>

            <div className={classes.avatar}>
              <img
                alt={user.name}
                src={user.picture}
                className={classes.picture}
              />
            </div>
          </div>
        )
      }
    </WithUser>
  );
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(User);
