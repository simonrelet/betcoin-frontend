import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { I18n } from 'react-i18next';
import BitcoinBanner from './BitcoinBanner';
import LoginBlock from './LoginBlock';
import Jumbotron from '../Jumbotron';
import Page from '../Page';

const styles = theme => ({
  homePage: {
    display: 'flex',
    flexDirection: 'column',
  },
  jumbotron: {
    flex: 'none',
  },
  content: {
    flex: [1, 0, 'auto'],
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: 48,
    fontWeight: 400,
    textAlign: 'center',
    margin: [theme.spacingUnit * 6, 0, theme.spacingUnit * 4],
  },
  subTitle: {
    color: theme.palette.text.secondary,
    fontSize: 24,
    fontWeight: 400,
    textAlign: 'center',
    margin: [theme.spacingUnit * 4, 0],
  },
  blocks: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginTop: theme.spacingUnit * 4,
    gridGap: `${theme.spacingUnit * 4}px`,
    gridTemplateAreas: `
      "b b l"
    `,
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas: `
        "l l l"
        "b b b"
      `,
    },
  },
  banner: {
    gridArea: 'b',
  },
  login: {
    gridArea: 'l',
  },
});

function HomePage(props) {
  const { classes, className } = props;
  return (
    <I18n>
      {translate => (
        <div className={classNames(classes.homePage, className)}>
          <Jumbotron className={classes.jumbotron} />

          <Page className={classes.content}>
            <h1 className={classes.title}>{translate('home.title')}</h1>
            <h3 className={classes.subTitle}>{translate('home.subTitle')}</h3>

            <div className={classes.blocks}>
              <BitcoinBanner className={classes.banner} />
              <LoginBlock className={classes.login} />
            </div>
          </Page>
        </div>
      )}
    </I18n>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default injectSheet(styles)(HomePage);
