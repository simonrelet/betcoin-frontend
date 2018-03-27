import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

const quotes = [
  {
    quote: "J'espère que la routourne va vite tourner",
    author: 'Franck Ribéry',
  },
];

const styles = theme => ({
  famousQuote: {
    alignItems: 'baseline',
    backgroundColor: theme.famousQuote.backgroundColor,
    color: theme.famousQuote.color,
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    padding: [theme.spacingUnit, theme.spacingUnit * 2],
  },
  item: {
    padding: [theme.spacingUnit, theme.spacingUnit * 2],
  },
  quote: {
    composes: '$item',
  },
  author: {
    composes: '$item',
    fontStyle: 'italic',
    fontSize: 14,
  },
});

function FamousQuote(props) {
  const { classes, className } = props;
  return (
    <div className={classNames(classes.famousQuote, className)}>
      <div className={classes.quote}>&laquo; {quotes[0].quote} &raquo;</div>
      <div className={classes.author}>{quotes[0].author}</div>
    </div>
  );
}

FamousQuote.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default injectSheet(styles)(FamousQuote);
