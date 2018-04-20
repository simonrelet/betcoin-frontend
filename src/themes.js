import { BREAKPOINTS, BREAKPOINTS_KEYS } from './core/constants';

function spacing(scale = 1) {
  return `${0.5 * scale}rem`;
}

const maxWidth = {
  width: '90vw',
  maxWidth: 1260,
  margin: [0, 'auto'],
};

const colors = {
  primary: {
    base: '#0f2a6b',
  },
  secondary: {
    base: '#5ecac0',
    darker: '#349d93',
  },
  white: '#fff',
  black: '#000',
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },
};

const palette = {
  ...colors,
  divider: 'rgba(0, 0, 0, 0.12)',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  textAlternative: {
    primary: 'rgba(255, 255, 255, 0.87)',
    secondary: 'rgba(255, 255, 255, 0.54)',
    disabled: 'rgba(255, 255, 255, 0.38)',
    hint: 'rgba(255, 255, 255, 0.38)',
  },
  background: {
    default: colors.grey[50],
    paper: colors.white,
  },
};

const typography = {
  fontFamily: 'Helvetica Neue, Helvetica, Arial',
  fontSize: 16,
  title: {
    color: palette.text.primary,
    fontSize: 48,
    fontWeight: 400,
    margin: [spacing(6), 0, spacing(4)],
  },
  subTitle: {
    color: palette.text.secondary,
    fontSize: 24,
    fontWeight: 400,
    margin: [spacing(4), 0, spacing(2)],
  },
  body: {
    margin: [spacing(2), 0],
  },
};

const breakpoints = {
  up: width => `@media (min-width:${BREAKPOINTS[width]}px)`,
  down: width => {
    const upperWidth = BREAKPOINTS_KEYS[BREAKPOINTS_KEYS.indexOf(width) + 1];
    return `@media (max-width:${BREAKPOINTS[upperWidth] - 0.05}px)`;
  },
};

function createShadow(...px) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0, 0, 0, 0.2)`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0, 0, 0, 0.14)`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0, 0, 0, 0.12)`,
  ].join(',');
}

const shadows = [
  'none',
  createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
  createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
  createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
  createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
];

const zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

export default {
  default: {
    spacing,
    maxWidth,
    palette,
    typography,
    breakpoints,
    shadows,
    zIndex,
  },
};
