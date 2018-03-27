import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import Header from '../Header';
import FamousQuote from '../FamousQuote';

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    flex: 'none',
  },
  content: {
    flex: 'auto',
  },
  quote: {
    flex: 'none',
  },
};

function HomePage(props) {
  const { classes, className } = props;
  return (
    <div className={classNames(classes.page, className)}>
      <Header className={classes.header} />
      <div className={classes.content} />
      <FamousQuote className={classes.quote} />
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default injectSheet(styles)(HomePage);
