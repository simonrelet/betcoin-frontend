import { BREAKPOINTS, BREAKPOINTS_KEYS } from './constants';
import colorsUtils from './colorsUtils';

function spacing(scale = 1) {
  return `${0.5 * scale}rem`;
}

const colors = {
  black: '#000',
  white: '#fff',
  primary: '#0f2a6b',
  secondary: '#5ecac0',
};

const palette = {
  ...colorsUtils,
  ...colors,
  divider: colorsUtils.fade(colors.black, 0.12),
  text: {
    default: {
      primary: colorsUtils.fade(colors.black, 0.87),
      secondary: colorsUtils.fade(colors.black, 0.54),
      disabled: colorsUtils.fade(colors.black, 0.38),
      hint: colorsUtils.fade(colors.black, 0.38),
    },
    contrast: {
      primary: colors.white,
      secondary: colorsUtils.fade(colors.white, 0.87),
      disabled: colorsUtils.fade(colors.white, 0.54),
      hint: colorsUtils.fade(colors.white, 0.38),
    },
  },
  background: {
    contrast: '#424242',
    app: '#fafafa',
    paper: colors.white,
  },
};

const breakpoints = {
  up: width => `@media (min-width:${BREAKPOINTS[width]}px)`,
  down: width => {
    const upperWidth = BREAKPOINTS_KEYS[BREAKPOINTS_KEYS.indexOf(width) + 1];
    return `@media (max-width:${BREAKPOINTS[upperWidth] - 0.05}px)`;
  },
};

function createShadow(opacity, px) {
  const color = colorsUtils.fade(colors.black, opacity);
  return `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px ${color}`;
}

function createShadows(umbra, prenumbra, ambient) {
  return [
    createShadow(0.2, umbra),
    createShadow(0.14, prenumbra),
    createShadow(0.12, ambient),
  ].join(',');
}

const shadows = [
  'none',
  createShadows([0, 1, 3, 0], [0, 1, 1, 0], [0, 2, 1, -1]),
  createShadows([0, 1, 5, 0], [0, 2, 2, 0], [0, 3, 1, -2]),
  createShadows([0, 1, 8, 0], [0, 3, 4, 0], [0, 3, 3, -2]),
  createShadows([0, 2, 4, -1], [0, 4, 5, 0], [0, 1, 10, 0]),
  createShadows([0, 3, 5, -1], [0, 5, 8, 0], [0, 1, 14, 0]),
  createShadows([0, 3, 5, -1], [0, 6, 10, 0], [0, 1, 18, 0]),
  createShadows([0, 4, 5, -2], [0, 7, 10, 1], [0, 2, 16, 1]),
  createShadows([0, 5, 5, -3], [0, 8, 10, 1], [0, 3, 14, 2]),
  createShadows([0, 5, 6, -3], [0, 9, 12, 1], [0, 3, 16, 2]),
  createShadows([0, 6, 6, -3], [0, 10, 14, 1], [0, 4, 18, 3]),
  createShadows([0, 6, 7, -4], [0, 11, 15, 1], [0, 4, 20, 3]),
  createShadows([0, 7, 8, -4], [0, 12, 17, 2], [0, 5, 22, 4]),
  createShadows([0, 7, 8, -4], [0, 13, 19, 2], [0, 5, 24, 4]),
  createShadows([0, 7, 9, -4], [0, 14, 21, 2], [0, 5, 26, 4]),
  createShadows([0, 8, 9, -5], [0, 15, 22, 2], [0, 6, 28, 5]),
  createShadows([0, 8, 10, -5], [0, 16, 24, 2], [0, 6, 30, 5]),
  createShadows([0, 8, 11, -5], [0, 17, 26, 2], [0, 6, 32, 5]),
  createShadows([0, 9, 11, -5], [0, 18, 28, 2], [0, 7, 34, 6]),
  createShadows([0, 9, 12, -6], [0, 19, 29, 2], [0, 7, 36, 6]),
  createShadows([0, 10, 13, -6], [0, 20, 31, 3], [0, 8, 38, 7]),
  createShadows([0, 10, 13, -6], [0, 21, 33, 3], [0, 8, 40, 7]),
  createShadows([0, 10, 14, -6], [0, 22, 35, 3], [0, 8, 42, 7]),
  createShadows([0, 11, 14, -7], [0, 23, 36, 3], [0, 9, 44, 8]),
  createShadows([0, 11, 15, -7], [0, 24, 38, 3], [0, 9, 46, 8]),
];

const zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

const mixins = {
  typography: {
    fontFamily: 'Helvetica Neue, Helvetica, Arial',
    fontSize: 16,
  },
};

export default {
  default: {
    breakpoints,
    mixins,
    palette,
    shadows,
    spacing,
    zIndex,
  },
};
