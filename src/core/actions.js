export const APP_UPDATE = 'APP_UPDATE';
export const CHANGE_THEME = 'CHANGE_THEME';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';

function changeTheme(theme) {
  return {
    type: CHANGE_THEME,
    theme,
  };
}

function loginUser({ auth, userProfile }) {
  return {
    type: LOGIN_USER,
    auth,
    userProfile,
  };
}

function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

function newVersionAvailable() {
  return {
    type: APP_UPDATE,
  };
}

function updateUserProfile(userProfile) {
  return {
    type: UPDATE_USER_PROFILE,
    userProfile,
  };
}

export default {
  changeTheme,
  loginUser,
  logoutUser,
  newVersionAvailable,
  updateUserProfile,
};
