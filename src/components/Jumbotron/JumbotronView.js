import React from 'react';
import PropTypes from 'prop-types';
import injectStyle from '../../core/injectStyle';
import Page from '../Page';
import LeftArrowIcon from '../../icons/LeftArrowIcon';
import RightArrowIcon from '../../icons/RightArrowIcon';
import IconButton from '../IconButton';
import Team, { TeamPropTypes } from './Team';
import Date from './Date';

function styles({ spacingUnit }) {
  return {
    root: {
      height: 150,
      overflow: 'hidden',
    },
    content: {
      display: 'flex',
      height: '100%',
      position: 'relative',
    },
    item: {
      flex: 1,
    },
    team1: {
      composes: '$item',
      paddingLeft: 99999,
      marginLeft: -99999,
    },
    team2: {
      composes: '$item',
      paddingRight: 99999,
      marginRight: -99999,
    },
    navIcon: {
      color: 'white',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      padding: spacingUnit,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
    },
    iconLeft: {
      composes: '$navIcon',
      left: 0,
    },
    iconRight: {
      composes: '$navIcon',
      right: 0,
    },
  };
}

function JumbotronView({
  classes,
  match: { date, team1, team2 },
  matchCount,
  matchIndex,
  onChangeMatch,
}) {
  const hasPrevious = matchIndex > 0;
  const hasNext = matchIndex < matchCount - 1;

  return (
    <div className={classes.root}>
      <Page className={classes.content}>
        <Team className={classes.team1} {...team1} />
        <Date
          className={classes.item}
          date={date}
          matchCount={matchCount}
          matchIndex={matchIndex}
          onChangeMatch={onChangeMatch}
        />
        <Team className={classes.team2} {...team2} />

        {hasPrevious && (
          <IconButton
            className={classes.iconLeft}
            onClick={() => onChangeMatch(matchIndex - 1)}
          >
            <LeftArrowIcon />
          </IconButton>
        )}

        {hasNext && (
          <IconButton
            className={classes.iconRight}
            onClick={() => onChangeMatch(matchIndex + 1)}
          >
            <RightArrowIcon />
          </IconButton>
        )}
      </Page>
    </div>
  );
}

export const MatchPropTypes = {
  date: PropTypes.string.isRequired,
  team1: PropTypes.shape(TeamPropTypes),
  team2: PropTypes.shape(TeamPropTypes),
};

JumbotronView.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.shape(MatchPropTypes),
  matchCount: PropTypes.number.isRequired,
  matchIndex: PropTypes.number.isRequired,
  onChangeMatch: PropTypes.func.isRequired,
};

export default injectStyle(styles)(JumbotronView);
