/* eslint-disable sort-keys */
import { rem } from 'polished';

export const colors = {
  white: '#FFFFFF',
  black: '#070707',
  coolGray: {
    50: 'hsl(210, 20%, 98%)',
    100: 'hsl(220, 14%, 96%)',
    200: 'hsl(220, 13%, 91%)',
    300: 'hsl(206, 12%, 84%)',
    400: 'hsl(217, 10%, 65%)',
    500: 'hsl(223, 9%, 46%)',
    600: 'hsl(214, 14%, 34%)',
    700: 'hsl(217, 19%, 27%)',
    800: 'hsl(215, 28%, 17%)',
    900: 'hsl(220, 43%, 11%)',
  },
  blue: {
    50: 'hsl(214, 100%, 97%)',
    100: 'hsl(214, 95%, 93%)',
    200: 'hsl(213, 97%, 87%)',
    300: 'hsl(212, 96%, 78%)',
    400: 'hsl(214, 96%, 68%)',
    500: 'hsl(218, 91%, 60%)',
    600: 'hsl(221, 83%, 53%)',
    700: 'hsl(224, 76%, 48%)',
    800: 'hsl(227, 69%, 41%)',
    900: 'hsl(224, 64%, 33%)',
  },
  yellow: {
    50: 'hsl(48, 100%, 96%)',
    100: 'hsl(48, 96%, 89%)',
    200: 'hsl(48, 98%, 77%)',
    300: 'hsl(46, 96%, 64%)',
    400: 'hsl(43, 96%, 56%)',
    500: 'hsl(38, 92%, 50%)',
    600: 'hsl(32, 93%, 44%)',
    700: 'hsl(25, 87%, 38%)',
    800: 'hsl(23, 81%, 31%)',
    900: 'hsl(21, 75%, 27%)',
  },
  red: {
    50: 'hsl(360, 86%, 97%)',
    100: 'hsl(2, 94%, 94%)',
    200: 'hsl(358, 96%, 89%)',
    300: 'hsl(360, 91%, 82%)',
    400: 'hsl(360, 91%, 71%)',
    500: 'hsl(360, 84%, 60%)',
    600: 'hsl(0, 72%, 50%)',
    700: 'hsl(1, 74%, 41%)',
    800: 'hsl(360, 70%, 35%)',
    900: 'hsl(358, 65%, 30%)',
  },
  green: {
    50: 'hsl(153, 82%, 96%)',
    100: 'hsl(149, 80%, 90%)',
    200: 'hsl(151, 76%, 81%)',
    300: 'hsl(156, 72%, 67%)',
    400: 'hsl(158, 64%, 52%)',
    500: 'hsl(159, 80%, 41%)',
    600: 'hsl(161, 90%, 31%)',
    700: 'hsl(163, 92%, 25%)',
    800: 'hsl(162, 86%, 20%)',
    900: 'hsl(164, 86%, 16%)',
  },
};

const fonts = {
  fontFamilyOpenSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
};

const tokens = {
  /* color presets */
  colorBackground: colors.white,
  colorPrimary: colors.blue[600],
  colorPrimaryHover: colors.blue[500],
  colorPrimaryText: colors.white,
  colorPrimaryFocus: colors.blue[200],
  colorSecondary: colors.coolGray[600],
  colorSecondaryHover: colors.coolGray[500],
  colorSecondaryText: colors.coolGray[700],
  colorSecondaryFocus: colors.coolGray[200],
  colorSuccess: colors.green[600],
  colorSuccessHover: colors.green[500],
  colorSuccessText: colors.green[800],
  colorSuccessFocus: colors.green[200],
  colorWarning: colors.yellow[600],
  colorWarningHover: colors.yellow[500],
  colorWarningText: colors.yellow[800],
  colorWarningFocus: colors.yellow[200],
  colorDanger: colors.red[600],
  colorDangerHover: colors.red[500],
  colorDangerText: colors.red[800],
  colorDangerFocus: colors.red[200],

  /* font-family */
  fontFamilyBody: fonts.fontFamilyOpenSans,
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

  /* letter-spacing */
  letterSpacingDense: '-0.015rem',
  letterSpacingNormal: 'normal',
  letterSpacingLoose: '0.075rem',

  /* spacing */
  spacingXxxxSmall: rem('2px'),
  spacingXxxSmall: rem('4px'),
  spacingXxSmall: rem('8px'),
  spacingXSmall: rem('10px'),
  spacingSmall: rem('12px'),
  spacingMedium: rem('16px'),
  spacingLarge: rem('24px'),
  spacingXLarge: rem('32px'),
  spacingXxLarge: rem('48px'),
  spacingXxxLarge: rem('60px'),
  spacingXxxxLarge: rem('72px'),

  /* border-width */
  borderWidthThin: '1px',
  borderWidthThick: '2px',

  /* border-radius */
  borderRadiusSmall: '2px',
  borderRadiusMedium: '4px',
  borderRadiusLarge: '6px',
  borderRadiusXLarge: '8px',
  borderRadiusCircle: '50%',
  borderRadiusPill: '240px',

  /* shadow */
  shadowXSmall: `0 1px 0 rgba(0, 0, 0, 0.05)`,
  shadowSmall: `0 1px 2px rgba(0, 0, 0, 0.1)`,
  shadowMedium: `0 2px 4px rgba(0, 0, 0, 0.1)`,
  shadowLarge: `0 2px 8px rgba(0, 0, 0, 0.1)`,
  shadowXLarge: `0 4px 16px rgba(0, 0, 0, 0.1)`,

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
  shadow: `0 0 0 3px ${colors.blue[200]}`,
  borderColor: `${colors.blue[300]}`,
  border: `${tokens.borderWidthThin} solid ${colors.blue[300]}`,
};

export const labels = {
  color: colors.coolGray[900],
  fontSize: tokens.fontSize14,
  fontWeight: tokens.fontWeightSemibold,
  spacing: tokens.spacingXxSmall,
};

export const panels = {
  backgroundColor: colors.white,
  color: colors.black,
  borderColor: colors.coolGray[200],
  border: 'none',
  borderRadius: tokens.borderRadiusLarge,
  boxShadow:
    '0 0 0 1px rgba(0, 0, 0, 0.05),0 1px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

export const modals = {
  overlayBackgroundColor: 'hsla(210, 10%, 70%, 0.65)',
};

export const inputs = {
  backgroundColor: colors.white,
  color: colors.black,
  disabledColor: colors.white,
  placeholderColor: colors.coolGray[600],
  borderWidth: tokens.borderWidthThin,
  borderColor: colors.coolGray[300],
  border: `${tokens.borderWidthThin} solid ${colors.coolGray[300]}`,
  borderHoverColor: colors.coolGray[400],
  borderRadius: tokens.borderRadiusLarge,
  activeColor: colors.blue[700],
  activeHoverColor: colors.blue[800],
  fontFamily: tokens.fontFamilyBody,
  lineHeight: tokens.lineHeightDense,
  shadow: `0 1px 2px rgba(0, 0, 0, 0.05)`,
  spacing: `${tokens.spacingXxSmall} ${tokens.spacingXSmall}`,
  transition: `border-color ${tokens.transitionFast} ease-in-out`,
  heightSmall: '30px',
  heightMedium: '40px',
  heightLarge: '50px',
  fontSizeSmall: tokens.fontSize13,
  fontSizeMedium: tokens.fontSize14,
  fontSizeLarge: tokens.fontSize20,
};

export const buttons = {
  fontSizeSmall: tokens.fontSize13,
  fontSizeMedium: tokens.fontSize14,
  fontSizeLarge: tokens.fontSize20,
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
