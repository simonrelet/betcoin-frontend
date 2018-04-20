import React, { Component } from 'react';
import auth from '../core/auth';
import injectStyle from '../core/injectStyle';
import BetcoinIcon from '../icons/BetcoinIcon';
import Paper from './Paper';

function styles({ typography }) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: '90%',
      maxWidth: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    content: typography.body,
  };
}

class Callback extends Component {
  async componentDidMount() {
    const { location, history } = this.props;

    if (/access_token|id_token|error/.test(location.hash)) {
      await auth.handleAuthentication();
    }

    history.replace('/');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper} icon={BetcoinIcon} title="Loging in">
          <p className={classes.content}>Almost done...</p>
        </Paper>
      </div>
    );
  }
}

export default injectStyle(styles)(Callback);
