import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import debounce from 'lodash.debounce';
import { BREAKPOINTS, BREAKPOINTS_KEYS } from '../core/constants';

// Corresponds to 10 frames at 60 Hz
const RESIZE_INTERVAL = 166;

function smallerOrEqualTo(refWidth, width) {
  return BREAKPOINTS[width] <= BREAKPOINTS[refWidth];
}

function biggerOrEqualTo(refWidth, width) {
  return BREAKPOINTS[width] >= BREAKPOINTS[refWidth];
}

class Responsiveness extends Component {
  state = {
    width: null,
  };

  componentDidMount() {
    this.updateWidth(window.innerWidth);
  }

  componentWillUnmount() {
    this.handleResize.cancel();
  }

  updateWidth(innerWidth) {
    const width = BREAKPOINTS_KEYS.slice()
      .reverse()
      .find(breakpointsKey => innerWidth >= BREAKPOINTS[breakpointsKey]);

    if (width !== this.state.width) {
      this.setState({ width });
    }
  }

  handleResize = debounce(
    () => this.updateWidth(window.innerWidth),
    RESIZE_INTERVAL,
  );

  render() {
    const { width } = this.state;
    const { up, down, children } = this.props;

    if (!width) {
      return null;
    }

    let render = true;

    if (up) {
      render = biggerOrEqualTo(up, width);
    }

    if (render && down) {
      render = smallerOrEqualTo(down, width);
    }

    let content = null;

    if (render) {
      content = typeof children === 'function' ? children(width) : children;
    }

    return (
      <EventListener target="window" onResize={this.handleResize}>
        {content}
      </EventListener>
    );
  }
}

Responsiveness.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  down: PropTypes.oneOf(BREAKPOINTS_KEYS),
  up: PropTypes.oneOf(BREAKPOINTS_KEYS),
};

export default Responsiveness;
