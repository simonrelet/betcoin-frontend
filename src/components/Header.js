import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import {Link} from 'react-router-dom';
import MenuIcon from '../icons/MenuIcon';
import IconButton from './IconButton';

const styles = theme => ({
  header: {
    alignItems: 'center',
    backgroundColor: theme.header.backgroundColor,
    color: theme.header.color,
    display: 'flex',
    padding: [0, theme.spacingUnit * 2],
  },
  title: {
    fontWeight: 300,
    padding: [theme.spacingUnit, 0],
    margin: 0,
    fontSize: 32,
    color: 'inherit',
    textDecoration: 'none',
  },
  menuButton: {
    alignItems: 'center',
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    marginRight: theme.spacingUnit * 2,
    width: 48,
  }
});

function Header(props) {
  const { classes, className } = props;
  return (
    <header className={classNames(classes.header, className)}>
      <IconButton className={classes.menuButton}>
        <MenuIcon />
      </IconButton>

      <Link to="/" className={classes.title}>Betcoin</Link>
    </header>
  );
}

export default injectSheet(styles)(Header);
