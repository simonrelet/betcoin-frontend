import React from 'react';
import PropTypes from 'prop-types';
import injectStyle from '../core/injectStyle';
import QuoteIcon from '../icons/QuoteIcon';

const quotes = [
  {
    quote: "J'espère que la routourne va vite tourner",
    author: 'Franck Ribéry',
  },
];

function styles({ palette, spacingUnit }) {
  return {
    root: {
      alignItems: 'center',
      backgroundColor: palette.grey[800],
      color: palette.white,
      display: 'flex',
      justifyContent: 'center',
      padding: [spacingUnit * 2, spacingUnit * 4],
    },
    quote: {
      display: 'flex',
      flexDirection: 'column',
    },
    text: {
      marginBottom: spacingUnit * 2,
    },
    author: {
      fontStyle: 'italic',
      fontSize: 12,
      textAlign: 'right',
    },
    icon: {
      flex: 'none',
      height: 40,
      marginRight: spacingUnit * 4,
    },
  };
}

function FamousQuote({ classes }) {
  return (
    <div className={classes.root}>
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

export default injectStyle(styles)(FamousQuote);
