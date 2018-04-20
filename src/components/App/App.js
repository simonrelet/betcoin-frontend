import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import auth from '../../core/auth';
import AppView from './AppView';

class App extends Component {
  componentDidMount() {
    if (auth.isAuthenticated()) {
      auth.updateProfile();
    } else {
      // In case the token has expired, ensure the user is logged out
      auth.logout();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <AppView {...this.props} />
      </BrowserRouter>
    );
  }
}

export default App;
