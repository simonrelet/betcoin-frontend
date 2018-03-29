import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import QuoteIcon from '../icons/QuoteIcon';

const quotes = [
  {
    quote: "J'espère que la routourne va vite tourner",
    author: 'Franck Ribéry',
  },
];

const styles = theme => ({
  famousQuote: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.darkGrey,
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    padding: [theme.spacingUnit * 2, theme.spacingUnit * 4],
  },
  quote: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    marginBottom: theme.spacingUnit * 2,
  },
  author: {
    fontStyle: 'italic',
    fontSize: 12,
    textAlign: 'right',
  },
  icon: {
    flex: 'none',
    height: 40,
    marginRight: theme.spacingUnit * 4,
  },
});

function FamousQuote(props) {
  const { classes, className } = props;
  return (
    <div className={classNames(classes.famousQuote, className)}>
      <QuoteIcon className={classes.icon} />

      <div className={classes.quote}>
        <div className={classes.text}>&laquo; {quotes[0].quote} &raquo;</div>
        <div className={classes.author}>{quotes[0].author}</div>
      </div>
    </div>
  );
}

FamousQuote.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default injectSheet(styles)(FamousQuote);
