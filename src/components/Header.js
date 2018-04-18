import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import injectStyle from '../core/injectStyle';
import MenuIcon from '../icons/MenuIcon';
import BetcoinLogo from '../icons/BetcoinLogo';
import IconButton from './IconButton';

function styles({ palette, shadows, spacingUnit, zIndex, breakpoints }) {
  return {
    root: {
      alignItems: 'center',
      backgroundColor: palette.primary.base,
      boxShadow: shadows[2],
      color: palette.white,
      display: 'flex',
      height: 60,
      padding: [0, spacingUnit * 2],
      zIndex: zIndex.appBar,
      [breakpoints.down('sm')]: {
        height: 50,
      },
    },
    title: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
    },
    titleLogo: {
      height: '90%',
    },
    menuButton: {
      marginRight: spacingUnit * 2,
      padding: spacingUnit,
      [breakpoints.down('sm')]: {
        marginRight: spacingUnit,
      },
    },
  };
}

function Header({ classes }) {
  return (
    <header className={classes.root}>
      <IconButton className={classes.menuButton}>
        <MenuIcon />
      </IconButton>

      <Link to="/" className={classes.title}>
        <BetcoinLogo className={classes.titleLogo} />
      </Link>
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(Header);
