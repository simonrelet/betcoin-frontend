import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-i18next';
import injectStyle from '../../core/injectStyle';
import BitcoinBanner from './BitcoinBanner';
import LoginBlock from './LoginBlock';
import Jumbotron from '../Jumbotron';
import Page from '../Page';

function styles({ palette, spacingUnit, breakpoints }) {
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
      color: palette.text.primary,
      fontSize: 48,
      fontWeight: 400,
      textAlign: 'center',
      margin: [spacingUnit * 6, 0, spacingUnit * 4],
    },
    subTitle: {
      color: palette.text.secondary,
      fontSize: 24,
      fontWeight: 400,
      textAlign: 'center',
      margin: [spacingUnit * 4, 0],
    },
    blocks: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      marginTop: spacingUnit * 4,
      gridGap: `${spacingUnit * 4}px`,
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
};

export default injectStyle(styles)(HomePage);
