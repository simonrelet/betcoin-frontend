import PropTypes from 'prop-types';
import React from 'react';
import { I18n } from 'react-i18next';
import injectStyle from '../../core/injectStyle';
import Jumbotron from '../Jumbotron';
import Page from '../Page';
import BitcoinBanner from './BitcoinBanner';
import UserInfo from './UserInfo';

function styles({ palette, spacing, breakpoints }) {
  return {
    root: {
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
      fontSize: 48,
      fontWeight: 400,
      textAlign: 'center',
      margin: [spacing(6), 0, spacing(4)],
    },
    subTitle: {
      color: palette.text.default.secondary,
      fontSize: 24,
      fontWeight: 400,
      textAlign: 'center',
      margin: [spacing(4), 0],
    },
    blocks: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      marginTop: spacing(4),
      gridGap: spacing(4),
      gridTemplateAreas: `
      "b b l"
    `,
      [breakpoints.down('sm')]: {
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
  };
}

function HomePage({ classes }) {
  return (
    <I18n>
      {translate => (
        <div className={classes.root}>
          <Jumbotron className={classes.jumbotron} />

          <Page className={classes.content}>
            <h1 className={classes.title}>{translate('home.title')}</h1>
            <h3 className={classes.subTitle}>{translate('home.subTitle')}</h3>

            <div className={classes.blocks}>
              <BitcoinBanner className={classes.banner} />
              <UserInfo className={classes.login} />
            </div>
          </Page>
        </div>
      )}
    </I18n>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(HomePage);
