import PropTypes from 'prop-types';
import React from 'react';
import { I18n } from 'react-i18next';
import auth from '../../core/auth';
import injectStyle from '../../core/injectStyle';
import Paper from '../Paper';
import WithUser from '../WithUser';

function styles({ spacing, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: palette.primary,
      color: palette.white,
      border: 0,
      padding: [spacing(2), spacing(4)],
      fontSize: 'inherit',
      fontFamily: 'inherit',
      cursor: 'pointer',
      borderRadius: 2,
      minWidth: 150,
    },
  };
}

function Login({ classes }) {
  return (
    <I18n>
      {translate => (
        <Paper className={classes.root} title={translate('home.login.join')}>
          <p className={classes.content}>
            <button className={classes.button} onClick={auth.login}>
              Log in
            </button>
          </p>
        </Paper>
      )}
    </I18n>
  );
}

function UserInfo({ classes }) {
  return (
    <WithUser>
      {user =>
        user ? (
          <Paper className={classes.root} title={`Welcome ${user.name}`}>
            <p className={classes.content}>
              <button className={classes.button} onClick={() => auth.logout()}>
                Log out
              </button>
            </p>
          </Paper>
        ) : (
          <Login classes={classes} />
        )
      }
    </WithUser>
  );
}

UserInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(UserInfo);
