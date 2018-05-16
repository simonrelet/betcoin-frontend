import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import injectStyle from '../../core/injectStyle';
import BetcoinLogo from '../../icons/BetcoinLogo';
import MenuIcon from '../../icons/MenuIcon';
import IconButton from '../IconButton';
import User from './User';

function styles({ palette, shadows, spacing, zIndex, breakpoints }) {
  return {
    root: {
      alignItems: 'center',
      backgroundColor: palette.primary,
      boxShadow: shadows[2],
      color: palette.white,
      display: 'flex',
      height: 60,
      padding: [0, spacing(2)],
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
      marginRight: spacing(2),
      padding: spacing(),
      [breakpoints.down('sm')]: {
        marginRight: spacing(),
      },
    },
    user: {
      marginLeft: 'auto',
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

      <User className={classes.user} />
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectStyle(styles)(Header);
