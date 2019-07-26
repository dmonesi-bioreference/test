/* eslint-disable sort-keys */
import { darken, rgba, rem } from 'polished';

export const colors = {
  white: '#FFFFFF',
  black: '#070707',
  blueGray: {
    50: 'hsl(210, 36%, 96%)',
    100: 'hsl(212, 33%, 89%)',
    200: 'hsl(210, 31%, 80%)',
    300: 'hsl(211, 27%, 70%)',
    400: 'hsl(209, 23%, 60%)',
    500: 'hsl(210, 22%, 49%)',
    600: 'hsl(209, 28%, 39%)',
    700: 'hsl(209, 34%, 30%)',
    800: 'hsl(211, 39%, 23%)',
    900: 'hsl(209, 61%, 16%)',
  },
  lightBlue: {
    50: 'hsl(195, 100%, 95%)',
    100: 'hsl(195, 100%, 85%)',
    200: 'hsl(195, 97%, 75%)',
    300: 'hsl(196, 94%, 67%)',
    400: 'hsl(197, 92%, 61%)',
    500: 'hsl(199, 84%, 55%)',
    600: 'hsl(201, 76%, 46%)',
    700: 'hsl(202, 83%, 41%)',
    800: 'hsl(203, 87%, 34%)',
    900: 'hsl(204, 96%, 27%)',
  },
  green: {
    50: 'hsl(152, 68%, 69%)',
    100: 'hsl(154, 75%, 87%)',
    200: 'hsl(156, 73%, 74%)',
    300: 'hsl(158, 58%, 62%)',
    400: 'hsl(160, 51%, 49%)',
    500: 'hsl(162, 63%, 41%)',
    600: 'hsl(164, 71%, 34%)',
    700: 'hsl(166, 72%, 28%)',
    800: 'hsl(168, 80%, 23%)',
    900: 'hsl(170, 97%, 15%)',
  },
  yellow: {
    50: 'hsl(49, 100%, 96%)',
    100: 'hsl(48, 100%, 88%)',
    200: 'hsl(48, 95%, 76%)',
    300: 'hsl(48, 94%, 68%)',
    400: 'hsl(44, 92%, 63%)',
    500: 'hsl(42, 87%, 55%)',
    600: 'hsl(36, 77%, 49%)',
    700: 'hsl(29, 80%, 44%)',
    800: 'hsl(22, 82%, 39%)',
    900: 'hsl(15, 86%, 30%)',
  },
  red: {
    50: 'hsl(360, 100%, 95%)',
    100: 'hsl(360, 100%, 87%)',
    200: 'hsl(360, 100%, 80%)',
    300: 'hsl(360, 91%, 69%)',
    400: 'hsl(360, 83%, 62%)',
    500: 'hsl(356, 75%, 53%)',
    600: 'hsl(354, 85%, 44%)',
    700: 'hsl(352, 90%, 35%)',
    800: 'hsl(350, 94%, 28%)',
    900: 'hsl(348, 94%, 20%)',
  },
};

const fonts = {
  fontFamilyOpenSans: "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
};

const tokens = {
  colorBackground: colors.blueGray[50],
  colorPrimary: colors.lightBlue[600],
  colorPrimaryHover: colors.lightBlue[700],
  colorSecondary: colors.blueGray[500],
  colorSecondaryHover: colors.blueGray[600],
  colorWhite: colors.white,
  colorOffWhite: colors.blueGray[50],
  colorBlack: colors.black,
  colorBlackHover: darken(0.1, colors.black),
  colorBlackSecondary: rgba(colors.black, 0.5),
  colorSuccess: colors.green[600],
  colorSuccessHover: colors.green[700],
  colorWarning: colors.yellow[700],
  colorWarningHover: colors.yellow[800],
  colorError: colors.red[700],
  colorErrorHover: colors.red[800],
  colorBorder: colors.blueGray[200],
  colorBorderInput: colors.blueGray[200],
  colorBorderInputHover: colors.blueGray[300],
  colorBorderInputActive: colors.blueGray[400],
  colorShadow: colors.blueGray[200],
  colorMask: colors.blueGray[300],
  // Fonts
  fontFamilyBody: fonts.fontFamilyOpenSans,
  fontFamilyMonospace: 'monospace',
  fontWeightRegular: '400',
  fontWeightSemibold: '600',
  fontWeightBold: '700',
  // Font Size
  fontSize8: rem('8px'),
  fontSize9: rem('9px'),
  fontSize10: rem('10px'),
  fontSize11: rem('11px'),
  fontSize12: rem('12px'),
  fontSize13: rem('13px'),
  fontSize14: rem('14px'),
  fontSize16: rem('16px'),
  fontSize18: rem('18px'),
  fontSize20: rem('20px'),
  fontSize24: rem('24px'),
  fontSize28: rem('28px'),
  fontSize32: rem('32px'),
  fontSize36: rem('36px'),
  fontSize48: rem('48px'),
  fontSize60: rem('60px'),
  fontSize72: rem('72px'),
  // Line Height
  lineHeightHeading: '1.25',
  lineHeightText: '1.5',
  lineHeightTall: '2.2',
  // Kerning
  letterSpacingNarrow: '-10px',
  letterSpacingWide: '3px',
  // Spacing
  spacingXSmall: '.65rem',
  spacingXxSmall: '.50rem',
  spacingXxxSmall: '.25rem',
  spacingSmall: '.75rem',
  spacingMedium: '1rem',
  spacingLarge: '1.5rem',
  spacingXLarge: '2rem',
  spacingXxLarge: '3rem',
  spacingXxxLarge: '4rem',
  // Borders
  borderWidthThin: '1px',
  borderWidthThick: '2px',
  // Positioning
  positioningCentered: '0 auto',
  // Radius
  borderRadiusCircle: '50%',
  borderRadiusSmall: '2px',
  borderRadiusMedium: '3px',
  borderRadiusLarge: '5px',
  borderRadiusPill: '240px',
  // Shadow
  shadowSubtle: `0 2px 4px 0 ${colors.blueGray[100]}`,
  shadowSmall: `0 2px 1px 0 ${colors.blueGray[100]}`,
  shadowHover: `0 2px 3px 1px ${colors.blueGray[100]}`,
  shadowMedium: `0 4px 8px 0 ${colors.blueGray[100]}`,
  shadowLarge: `0 8px 16px 0 ${colors.blueGray[100]}`,
  shadowBig: `0 16px 24px 0 ${colors.blueGray[100]}`,
  shadowDeep: `0 24px 32px 0 ${colors.blueGray[100]}`,
  shadowLeft: `-4px 0 12px 0 ${colors.blueGray[100]}`,
  shadowInsertSubtle: `inset 0 1px 1px ${colors.blueGray[100]}`,
  // Time
  durationQuickly: '.1s',
  durationImmediately: '.05s',
  durationToastMedium: '9.6s',
  durationSlowly: '.4s',
  durationToastShort: '4.8s',
  durationPaused: '3.2s',
  durationPromptly: '.2s',
  durationSlide: '.25s',
  // Z-index
  zIndexDefault: '1',
  zIndexModal: '8000',
  zIndexSpinner: '9000',
  zIndexToast: '10000',
};

export const fontPairs = {
  bodyBook: `
    font-family: ${tokens.fontFamilyBody};
    font-weight: ${tokens.fontWeightRegular};
  `,
  bodySemibold: `
    font-family: ${tokens.fontFamilyBody};
    font-weight: ${tokens.fontWeightSemibold};
  `,
  bodyBold: `
    font-family: ${tokens.fontFamilyBody};
    font-weight: ${tokens.fontWeightBold};
  `,
};

export default tokens;
