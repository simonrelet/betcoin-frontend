import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { I18n } from 'react-i18next';

const styles = theme => ({
  loginBlock: {
    backgroundColor: theme.palette.background.lighGrey,
    padding: theme.spacingUnit * 4,
  },
  title: {
    ...theme.typography.subheading,
    textAlign: 'center',
  },
});

function LoginBlock(props) {
  const { classes, className } = props;
  return (
    <I18n>
      {translate => (
        <div className={classNames(classes.loginBlock, className)}>
          <div className={classNames(classes.title)}>
            {translate('home.login.join')}
          </div>
        </div>
      )}
    </I18n>
  );
}

LoginBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default injectSheet(styles)(LoginBlock);
