/* eslint-disable sort-keys */
import { rem } from 'polished';

export const colors = {
  // Dev Note: slate purple, coral, and sand removed
  white: 'hsla(0, 0%, 100%, 1)',
  black: 'hsla(60, 2%, 10%, 1)',
  grey: {
    50: 'hsla(210, 20%, 98%, 1)',
    100: 'hsla(214, 15.6%, 91.2%, 1)',
    200: 'hsla(210, 17.5%, 84.3%, 1)',
    300: 'hsla(210, 16.4%, 76.1%, 1)',
    400: 'hsla(211, 13.2%, 68.8%, 1)',
    500: 'hsla(213, 10%, 56.9%, 1)',
    600: 'hsla(215, 9.1%, 47.5%, 1)',
    700: 'hsla(217, 12.4%, 38%, 1)',
    800: 'hsla(218, 16.3%, 30%, 1)',
    900: 'hsla(219, 25.5%, 20%, 1)',
  },
  indigo: {
    900: 'hsla(231, 60.7%, 33.9%, 1)',
    800: 'hsla(231, 58.1%, 42.2%, 1)',
    700: 'hsla(232, 43.4%, 49.2%, 1)',
    600: 'hsla(231, 42.5%, 55.7%, 1)',
    500: 'hsla(232, 42.4%, 63.9%, 1)',
    400: 'hsla(232, 41.7%, 71.8%, 1)',
    300: 'hsla(232, 41.5%, 79.2%, 1)',
    200: 'hsla(232, 43.3%, 86.9%, 1)',
    100: 'hsla(230, 42.9%, 94.5%, 1)',
    50: 'hsla(225, 50%, 98.4%, 1)',
  },
  cornflowerBlue: {
    900: 'hsla(222, 20.9%, 25.3%, 1)',
    800: 'hsla(220, 22.2%, 31.8%, 1)',
    700: 'hsla(220, 23.3%, 40.4%, 1)',
    600: 'hsla(221, 23.7%, 48.8%, 1)',
    500: 'hsla(220, 36.2%, 59.4%, 1)',
    400: 'hsla(220, 57.9%, 70.2%, 1)',
    300: 'hsla(222, 57.8%, 78.6%, 1)',
    200: 'hsla(224, 55.9%, 86.7%, 1)',
    100: 'hsla(225, 57.1%, 94.5%, 1)',
    50: 'hsla(225, 50%, 98.4%, 1)',
  },
  yellow: {
    900: 'hsla(30, 40%, 21.6%, 1)',
    800: 'hsla(32, 40.1%, 26.9%, 1)',
    700: 'hsla(31, 39.9%, 33.9%, 1)',
    600: 'hsla(32, 40.1%, 40.6%, 1)',
    500: 'hsla(33, 40.2%, 49.2%, 1)',
    400: 'hsla(33, 55.1%, 58%, 1)',
    300: 'hsla(34, 78%, 66.1%, 1)',
    200: 'hsla(38, 80.2%, 76.3%, 1)',
    100: 'hsla(36, 77.8%, 91.2%, 1)',
    50: 'hsla(36, 71.4%, 97.3%, 1)',
  },
  red: {
    900: 'hsla(0, 96.9%, 24.9%, 1)',
    800: 'hsla(0, 96.2%, 31%, 1)',
    700: 'hsla(0, 78.2%, 41.4%, 1)',
    600: 'hsla(0, 55.4%, 52.5%, 1)',
    500: 'hsla(0, 54.7%, 62.7%, 1)',
    400: 'hsla(0, 54.5%, 71.6%, 1)',
    300: 'hsla(0, 54.3%, 79.4%, 1)',
    200: 'hsla(0, 54.5%, 87.1%, 1)',
    100: 'hsla(0, 55.6%, 94.7%, 1)',
    50: 'hsla(0, 50%, 98.4%, 1)',
  },
  green: {
    900: 'hsla(100, 76.6%, 15.1%, 1)',
    800: 'hsla(100, 75.5%, 19.2%, 1)',
    700: 'hsla(100, 75.6%, 24.1%, 1)',
    600: 'hsla(100, 66.5%, 30.4%, 1)',
    500: 'hsla(99, 37.8%, 43.5%, 1)',
    400: 'hsla(100, 29.1%, 56.3%, 1)',
    300: 'hsla(100, 28.8%, 68%, 1)',
    200: 'hsla(100, 28.8%, 79.6%, 1)',
    100: 'hsla(100, 28.6%, 91.8%, 1)',
    50: 'hsla(105, 33.3%, 97.6%, 1)',
  },
  powderBlue: {
    900: 'hsla(197, 26.1%, 21.8%, 1)',
    800: 'hsla(198, 27.3%, 28%, 1)',
    700: 'hsla(196, 25.8%, 34.9%, 1)',
    600: 'hsla(195, 25.8%, 41.8%, 1)',
    500: 'hsla(195, 26.7%, 50.8%, 1)',
    400: 'hsla(195, 38.9%, 60.2%, 1)',
    300: 'hsla(196, 53.8%, 69.4%, 1)',
    200: 'hsla(195, 53.5%, 80.6%, 1)',
    100: 'hsla(196, 55%, 92.2%, 1)',
    50: 'hsla(190, 50%, 97.6%, 1)',
  },
  lime: {
    900: 'hsla(68, 68%, 14.7%, 1)',
    800: 'hsla(68, 68.1%, 18.4%, 1)',
    700: 'hsla(68, 68.1%, 23.3%, 1)',
    600: 'hsla(68, 69.2%, 28%, 1)',
    500: 'hsla(69, 69%, 34.1%, 1)',
    400: 'hsla(68, 68.9%, 40.4%, 1)',
    300: 'hsla(69, 68.6%, 46.3%, 1)',
    200: 'hsla(68, 61.8%, 65.1%, 1)',
    100: 'hsla(70, 62.9%, 86.3%, 1)',
    50: 'hsla(69, 61.9%, 95.9%, 1)',
  },
  violet: {
    900: 'hsla(283, 58.6%, 28.4%, 1)',
    800: 'hsla(282, 43.3%, 35.3%, 1)',
    700: 'hsla(283, 33.3%, 42.4%, 1)',
    600: 'hsla(282, 23.6%, 50.2%, 1)',
    500: 'hsla(283, 23.4%, 59%, 1)',
    400: 'hsla(283, 23.5%, 68.2%, 1)',
    300: 'hsla(283, 23.3%, 76.5%, 1)',
    200: 'hsla(283, 23.7%, 85.1%, 1)',
    100: 'hsla(283, 22.6%, 93.9%, 1)',
    50: 'hsla(300, 20%, 98%, 1)',
  },
};

export const fonts = {
  fontFamilyPoppins: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
};

export const tokens = {
  /* color presets */
  // Following tokens to be replaced with theme tokens
  colorBackgroundDefault: colors.violet[50],
  colorBackgroundCare: colors.indigo[50],
  colorCommunity: colors.green[800],
  colorBackgroundCommunity: colors.green[50],
  colorBackgroundResources: colors.indigo[50],
  colorDefaultText: colors.black,
  /* End of tokens to be replaced */
  colorPrimary: colors.indigo[900],
  colorPrimaryActive: colors.indigo[800],
  colorPrimaryHover: colors.indigo[700],
  colorPrimaryText: colors.indigo[900],
  colorPrimaryFocus: colors.indigo[200],
  colorSecondary: colors.grey[600],
  colorSecondaryHover: colors.grey[500],
  colorSecondaryText: colors.grey[800],
  colorSecondaryFocus: colors.grey[200],
  colorSuccess: colors.green[600],
  colorSuccessHover: colors.green[500],
  colorSuccessText: colors.green[700],
  colorSuccessFocus: colors.green[200],
  colorWarning: colors.yellow[600],
  colorWarningHover: colors.yellow[500],
  colorWarningText: colors.yellow[600],
  colorWarningFocus: colors.yellow[200],
  colorDanger: colors.red[700],
  colorDangerHover: colors.red[800],
  colorDangerText: colors.red[700],
  colorDangerFocus: colors.red[200],

  /* font-family */
  fontFamilySansSerif: fonts.fontFamilyPoppins,
  fontFamilyLabel: fonts.fontFamilyPoppins,
  fontFamilyBody: fonts.fontFamilyPoppins,
  fontFamilyMonospace: 'monospace',

  /* font-weight */
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemibold: '600',
  fontWeightBold: '700',

  /* font-size */
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

  /* line-height */
  lineHeightDense: '1.25',
  lineHeightNormal: '1.5',
  lineHeightLoose: '2.2',
  lineHeightSelf: '1',

  /* letter-spacing */
  letterSpacingDense: '-0.015rem',
  letterSpacingNormal: 'normal',
  letterSpacingLoose: '0.075rem',

  /* spacing */
  spacingXxxSmall: rem('2px'),
  spacingXxSmall: rem('4px'),
  spacingXSmall: rem('8px'),
  spacingSmall: rem('12px'),
  spacing: rem('16px'),
  spacingMedium: rem('20px'),
  spacingLarge: rem('24px'),
  spacingXLarge: rem('32px'),
  spacingXxLarge: rem('48px'),
  spacingXxxLarge: rem('64px'),
  spacingXxxxLarge: rem('80px'),

  /* border-width */
  borderWidthThin: '1px',
  borderWidthMedium: '2px',
  borderWidthThick: '3px',
  borderWidthExtraThick: '8px',

  /* border-radius */
  borderRadiusSmall: '2px',
  borderRadiusMedium: '4px',
  borderRadius: '8px',
  borderRadiusLarge: '10px',
  borderRadiusCircle: '50%',
  borderRadiusPill: '240px',

  /* shadow */
  shadowXSmall: `0 1px 0 rgba(0, 0, 0, 0.05)`,
  shadowSmall: `0 1px 2px rgba(0, 0, 0, 0.1)`,
  shadowMedium: `0 2px 4px rgba(0, 0, 0, 0.1)`,
  shadowLarge: `0 2px 8px rgba(0, 0, 0, 0.1)`,
  shadowXLarge: `0 4px 16px rgba(0, 0, 0, 0.1)`,
  shadowXxLarge: `0 10px 20px -10px rgba(27, 33, 50, 0.08)`,

  /* transition */
  transitionXSlow: '1000ms',
  transitionSlow: '500ms',
  transitionMedium: '250ms',
  transitionFast: '150ms',
  transitionXFast: '50ms',

  /* z-index */
  zIndexDrawer: '700',
  zIndexDialog: '800',
  zIndexDropdown: '900',
  zIndexToast: '950',
  zIndexTooltip: '1000',
};

export const focus = {
  shadow: `0 0 0 3px ${colors.indigo[200]}`,
  borderColor: `${colors.indigo[300]}`,
  border: `${tokens.borderWidthThin} solid ${colors.indigo[300]}`,
};

export const labels = {
  color: colors.grey[900],
  fontSizeSmall: tokens.fontSize14,
  fontSizeMedium: tokens.fontSize16,
  fontSizeLarge: tokens.fontSize18,
  fontWeight: tokens.fontWeightMedium,
  spacing: tokens.spacingXSmall,
};

export const panels = {
  backgroundColor: colors.white,
  color: colors.black,
  borderColor: colors.grey[200],
  border: 'none',
  borderRadius: tokens.borderRadius,
  boxShadow:
    '0 0 0 1px rgba(0, 0, 0, 0.05),0 1px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

export const modals = {
  overlayBackgroundColor: 'hsla(210, 10%, 70%, 0.65)',
};

export const inputs = {
  activeColor: colors.indigo[700],
  activeHoverColor: colors.indigo[800],
  backgroundColor: colors.white,
  border: `${tokens.borderWidthMedium} solid ${colors.grey[300]}`,
  borderColor: colors.grey[300],
  borderHoverColor: colors.grey[400],
  borderRadius: tokens.borderRadius,
  borderWidth: tokens.borderWidthThin,
  color: colors.black,
  disabledBackgroundColor: colors.grey[100],
  disabledColor: colors.grey[800],
  fontFamily: tokens.fontFamilyBody,
  fontSizeSmall: tokens.fontSize13,
  fontSizeMedium: tokens.fontSize14,
  fontSizeLarge: tokens.fontSize20,
  heightSmall: '30px',
  heightMedium: '40px',
  heightLarge: '48px',
  helpColor: colors.grey[500],
  helpFontSizeSmall: tokens.fontSize12,
  helpFontSizeMedium: tokens.fontSize14,
  helpFontSizeLarge: tokens.fontSize16,
  lineHeight: tokens.lineHeightDense,
  placeholderColor: colors.grey[600],
  shadow: `0 1px 2px rgba(0, 0, 0, 0.05)`,
  spacingSmall: `${tokens.spacingSmall}`,
  spacingXSmall: `${tokens.spacingXSmall}`,
  spacingXxSmall: `${tokens.spacingXxSmall}`,
  spacing: `${tokens.spacingSmall}`,
  spacingLarge: `${tokens.spacing}`,
  transition: `border-color ${tokens.transitionFast} ease-in-out`,
};

export const buttons = {
  fontSize: tokens.fontSize16,
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

export const containers = {
  headerHeight: tokens.spacingXxxLarge,
  maxNavWidth: '500',
  maxPageWidth: '960',
  spacingGutter: tokens.spacingLarge,
};

const toggleHandle = {
  size: tokens.spacingMedium,
  margin: tokens.spacingXxxSmall,
};

export const toggle = {
  width: `calc((${toggleHandle.size} * 2) + (${toggleHandle.margin} * 2))`,
  handleSize: toggleHandle.size,
  handleMargin: toggleHandle.margin,
};
