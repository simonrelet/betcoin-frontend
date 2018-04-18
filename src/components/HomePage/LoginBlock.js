import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-i18next';
import injectStyle from '../../core/injectStyle';
import Paper from '../Paper';

function styles({ spacingUnit, typography }) {
  return {
    root: {
      padding: spacingUnit * 4,
    },
    title: {
      ...typography.subheading,
      textAlign: 'center',
    },
  };
}

function LoginBlock({ classes }) {
  return (
    <I18n>
      {translate => (
        <Paper className={classes.root}>
          <div className={classes.title}>{translate('home.login.join')}</div>
        </Paper>
      )}
    </I18n>
  );
}

LoginBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(LoginBlock);
