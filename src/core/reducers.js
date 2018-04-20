import { combineReducers } from 'redux';
import defaultState from './defaultState';
import {
  APP_UPDATE,
  CHANGE_THEME,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER_PROFILE,
} from './actions';

function hasNewVersion(state = defaultState.hasNewVersion, action) {
  switch (action.type) {
    case APP_UPDATE:
      return true;
    default:
      return state;
  }
}

function theme(state = defaultState.theme, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return action.theme;
    default:
      return state;
  }
}

function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.auth;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}

function userProfile(state = defaultState.userProfile, action) {
  switch (action.type) {
    case LOGIN_USER:
    case UPDATE_USER_PROFILE:
      return action.userProfile;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  auth,
  hasNewVersion,
  theme,
  userProfile,
});
