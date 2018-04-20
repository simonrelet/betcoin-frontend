import defaultState from './defaultState';

// Uncomment if needed
function parse(serializedJSON, defaultValue) {
  if (serializedJSON) {
    try {
      return JSON.parse(serializedJSON);
    } catch (e) {
      console.error('Could not parse stored item:', serializedJSON, e);
    }
  }
  return defaultValue;
}

// Loading and saving functions for each item that is stored.
const storedItems = {
  theme: {
    load: () => localStorage.getItem('theme') || defaultState.theme,
    save: ({ theme }) => localStorage.setItem('theme', theme),
  },
  auth: {
    load: () => parse(localStorage.getItem('auth'), defaultState.auth),
    save: ({ auth }) =>
      auth
        ? localStorage.setItem('auth', JSON.stringify(auth))
        : localStorage.removeItem('auth'),
  },
  userProfile: {
    load: () =>
      parse(localStorage.getItem('userProfile'), defaultState.userProfile),
    save: ({ userProfile }) =>
      userProfile
        ? localStorage.setItem('userProfile', JSON.stringify(userProfile))
        : localStorage.removeItem('userProfile'),
  },
};

async function load() {
  const state = Object.keys(storedItems).reduce(
    (acc, key) => ({ ...acc, [key]: storedItems[key].load() }),
    defaultState,
  );

  return Promise.resolve(state);
}

async function save(state) {
  localStorage.setItem('version', global.APP_VERSION);

  Object.keys(storedItems).forEach(key => {
    storedItems[key].save(state);
  });

  return Promise.resolve();
}

export default {
  load,
  save,
};
