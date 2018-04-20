import { WebAuth } from 'auth0-js';
import moment from 'moment';
import config from '../config.json';
import actions from './actions';

const refreshThreshold = 30;
const allScopes = ['openid', 'profile', 'read:leaderboard'];
const audience = `https://${config.domain}/userinfo`;

const auth0 = new WebAuth({
  domain: config.domain,
  clientID: config.clientId,
  redirectUri: config.callbackUrl,
  audience,
  responseType: 'token id_token',
  scope: allScopes.join(' '),
});

let store;
let tokenRenewalTimeout;

function setStore(s) {
  store = s;
  scheduleRenewal();
}

function login() {
  auth0.authorize();
}

async function handleAuthentication() {
  return new Promise(resolve => {
    auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult);
      } else if (err) {
        console.error(err);
      }

      resolve();
    });
  });
}

function setSession({
  accessToken,
  expiresIn,
  idToken,
  idTokenPayload: { name, nickname, sub: id, picture },
  scope,
}) {
  const auth = {
    accessToken,
    idToken,

    expiresAt: moment()
      .add(expiresIn, 'seconds')
      .format(),

    scopes: scope ? scope.trim().split(' ') : allScopes,
  };

  const userProfile = {
    name,
    nickname,
    id,
    picture,
  };

  scheduleRenewal();

  store.dispatch(actions.loginUser({ auth, userProfile }));
}

function logout() {
  if (tokenRenewalTimeout) {
    clearTimeout(tokenRenewalTimeout);
    tokenRenewalTimeout = null;
  }

  store.dispatch(actions.logoutUser());
}

function isAuthenticated() {
  const { auth } = store.getState();
  return auth && moment().isBefore(auth.expiresAt);
}

function userHasScopes(scopes) {
  const { auth } = store.getState();

  if (typeof scopes === 'string') {
    scopes = [scopes];
  }

  return auth && scopes.every(scope => auth.scopes.includes(scope));
}

function renewToken() {
  auth0.checkSession({}, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      setSession(result);
    }
  });
}

function scheduleRenewal() {
  const { auth } = store.getState();

  if (auth) {
    const delay =
      moment(auth.expiresAt)
        .subtract(refreshThreshold, 'seconds')
        .valueOf() - moment().valueOf();

    if (delay > 0) {
      tokenRenewalTimeout = setTimeout(renewToken, delay);
    }
  }
}

function updateProfile() {
  if (isAuthenticated()) {
    const {
      auth: { accessToken },
    } = store.getState();

    auth0.client.userInfo(accessToken, (err, userProfile) => {
      if (err) {
        console.error(err);
      } else if (userProfile) {
        const { name, nickname, picture, sub: id } = userProfile;
        store.dispatch(
          actions.updateUserProfile({
            name,
            nickname,
            id,
            picture,
          }),
        );
      }
    });
  }
}

export default {
  handleAuthentication,
  isAuthenticated,
  login,
  logout,
  setStore,
  userHasScopes,
  updateProfile,
};
