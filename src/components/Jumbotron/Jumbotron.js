import React, { Component } from 'react';
import moment from 'moment';
import JumbotronView from './JumbotronView';

const matchs = [
  {
    team1: {
      name: 'Russia',
      color: '#111B52',
    },
    team2: {
      name: 'Saudi Arabia',
      color: '#099959',
    },
    date: moment().format(),
  },
  {
    team1: {
      name: 'France',
      color: '#00f',
    },
    team2: {
      name: 'Canada',
      color: '#f00',
    },
    date: moment()
      .add(2, 'hours')
      .format(),
  },
  {
    team1: {
      name: 'Russia',
      color: '#111B52',
    },
    team2: {
      name: 'Saudi Arabia',
      color: '#099959',
    },
    date: moment()
      .add(3, 'hours')
      .format(),
  },
];

class Jumbotron extends Component {
  interval = null;
  state = {
    matchIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        matchIndex: (prevState.matchIndex + 1) % matchs.length,
      }));
    }, 4000);
  }

  componentWillUnmount() {
    this.stopRolling();
  }

  stopRolling() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  handleChangeMatch = matchIndex => {
    this.stopRolling();
    this.setState({ matchIndex });
  };

  render() {
    const { matchIndex } = this.state;
    const match = matchs[matchIndex];

    return (
      <JumbotronView
        {...this.props}
        match={match}
        matchCount={matchs.length}
        matchIndex={matchIndex}
        onChangeMatch={this.handleChangeMatch}
      />
    );
  }
}

export default Jumbotron;
