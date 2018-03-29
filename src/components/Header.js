import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import MenuIcon from '../icons/MenuIcon';
import BetcoinLogo from '../icons/BetcoinLogo';
import IconButton from './IconButton';

const styles = theme => ({
  header: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.base,
    boxShadow: theme.shadows[2],
    color: theme.palette.common.white,
    display: 'flex',
    height: 60,
    padding: [0, theme.spacingUnit * 2],
    zIndex: theme.zIndex.appBar,
    [theme.breakpoints.down('sm')]: {
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
    marginRight: theme.spacingUnit * 2,
    padding: theme.spacingUnit,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacingUnit,
    },
  },
});

function Header(props) {
  const { classes, className } = props;
  return (
    <header className={classNames(classes.header, className)}>
      <IconButton className={classes.menuButton}>
        <MenuIcon />
      </IconButton>

      <Link to="/" className={classes.title}>
        <BetcoinLogo className={classes.titleLogo} />
      </Link>
    </header>
  );
}

export default injectSheet(styles)(Header);
