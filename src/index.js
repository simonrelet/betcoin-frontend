import { create as createJss } from 'jss';
import jssPreset from 'jss-preset-default';
import React from 'react';
import ReactDOM from 'react-dom';
import { JssProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import ThemeProvider from './components/ThemeProvider';
import auth from './core/auth';
import reducers from './core/reducers';
import storage from './core/storage';
import themes from './core/themes';
import initializeI18n from './initializeI18n';
import registerServiceWorker from './registerServiceWorker';

// Expose the verison of the application in a global variable to ease debugging.
global.APP_VERSION = process.env.REACT_APP_VERSION;

initializeI18n();

const jss = createJss(jssPreset());

const root = document.getElementById('root');
if (!root) {
  throw new Error('The mounting point for React was not found.');
}

storage.load().then(state => {
  const store = createStore(reducers, state);

  store.subscribe(() => {
    // Save the applicaiton state on each update.
    storage.save(store.getState());
  });

  // To allow the modules to manipulate the state.
  auth.setStore(store);

  ReactDOM.render(
    <Provider store={store}>
      <JssProvider jss={jss}>
        <ThemeProvider themes={themes}>
          <App />
        </ThemeProvider>
      </JssProvider>
    </Provider>,
    root,
  );

  // To allow the service worker to notify the app on background updates.
  registerServiceWorker(store);
});
