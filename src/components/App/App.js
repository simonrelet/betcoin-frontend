import React, { Component } from 'react';
import AppView from './AppView';

class App extends Component {
  render() {
    return <AppView {...this.props} />;
  }
}

export default App;
