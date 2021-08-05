/* eslint-disable sort-keys */
import { rem } from 'polished';

export const colors = {
  white: '#FFFFFF',
  black: '#1B2132',
  grey: {
    100: 'hsl(240, 7%, 97%)',
    200: 'hsl(220, 6%, 90%)',
    300: 'hsl(225, 5%, 85%)',
    400: 'hsl(220, 5%, 75%)',
    500: 'hsl(220, 5%, 65%)',
    600: 'hsl(224, 5%, 55%)',
    700: 'hsl(225, 7%, 45%)',
    800: 'hsl(223, 10%, 35%)',
    900: 'hsl(222, 10%, 25%)',
  },
  blue: {
    50: 'hsl(197, 54%, 95%)',
    100: 'hsl(198, 61%, 85%)',
    200: 'hsl(198, 67%, 75%)',
    300: 'hsl(198, 66%, 65%)',
    400: 'hsl(198, 67%, 55%)',
    500: 'hsl(198, 67%, 45%)',
    600: 'hsl(198, 67%, 39%)',
    700: 'hsl(198, 75%, 35%)',
    800: 'hsl(198, 80%, 25%)',
    900: 'hsl(198, 90%, 15%)',
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

export const fonts = {
  fontFamilyOpenSans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
};

export const tokens = {
  /* color presets */
  colorBackground: colors.white,
  colorDefaultText: colors.black,
  colorPrimary: colors.blue[600],
  colorPrimaryActive: colors.blue[800],
  colorPrimaryHover: colors.blue[700],
  colorPrimaryText: colors.white,
  colorPrimaryFocus: colors.blue[200],
  colorSecondary: colors.grey[600],
  colorSecondaryHover: colors.grey[500],
  colorSecondaryText: colors.grey[600],
  colorSecondaryFocus: colors.grey[200],
  colorSuccess: colors.green[600],
  colorSuccessHover: colors.green[500],
  colorSuccessText: colors.green[700],
  colorSuccessFocus: colors.green[200],
  colorWarning: colors.yellow[600],
  colorWarningHover: colors.yellow[500],
  colorWarningText: colors.yellow[600],
  colorWarningFocus: colors.yellow[200],
  colorDanger: colors.red[600],
  colorDangerHover: colors.red[500],
  colorDangerText: colors.red[700],
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
  lineHeightSelf: '1',

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
  spacingXxxLarge: rem('64px'),
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
  color: colors.grey[900],
  fontSizeSmall: tokens.fontSize14,
  fontSizeMedium: tokens.fontSize16,
  fontSizeLarge: tokens.fontSize18,
  fontWeight: tokens.fontWeightMedium,
  spacing: tokens.spacingXxSmall,
};

export const panels = {
  backgroundColor: colors.white,
  color: colors.black,
  borderColor: colors.grey[200],
  border: 'none',
  borderRadius: tokens.borderRadiusLarge,
  boxShadow:
    '0 0 0 1px rgba(0, 0, 0, 0.05),0 1px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

export const modals = {
  overlayBackgroundColor: 'hsla(210, 10%, 70%, 0.65)',
};

export const inputs = {
  activeColor: colors.blue[700],
  activeHoverColor: colors.blue[800],
  backgroundColor: colors.white,
  border: `${tokens.borderWidthThin} solid ${colors.grey[300]}`,
  borderColor: colors.grey[300],
  borderHoverColor: colors.grey[400],
  borderRadius: tokens.borderRadiusLarge,
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
  iconColor: colors.grey[400],
  lineHeight: tokens.lineHeightDense,
  placeholderColor: colors.grey[600],
  shadow: `0 1px 2px rgba(0, 0, 0, 0.05)`,
  spacingSmall: `${tokens.spacingXSmall}`,
  spacingMedium: `${tokens.spacingSmall}`,
  spacingLarge: `${tokens.spacingMedium}`,
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
