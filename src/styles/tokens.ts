/* eslint-disable sort-keys */
import { rem } from 'polished';

export const colors = {
  white: '#FFFFFF',
  black: '#1B2132',
  grey: {
    100: 'hsl(60, 2%, 92%, 1)',
    200: 'hsl(220, 5.9%, 90%)',
    300: 'hsl(225, 5.3%, 85.1%)',
    400: 'hsl(220, 4.7%, 74.9%)',
    500: 'hsl(220, 5%, 64.9%)',
    600: 'hsl(224, 4.8%, 55.1%)',
    700: 'hsl(225, 7%, 45.1%)',
    800: 'hsl(223, 10.1%, 34.9%)',
    900: 'hsl(222, 10.2%, 24.9%)',
  },
  blue: {
    50: 'hsl(197, 64%, 98%)',
    100: 'hsl(202, 69%, 94%)',
    200: 'hsl(204, 69%, 86%)',
    300: 'hsl(204, 68%, 77%)',
    400: 'hsl(204, 68%, 68%)',
    500: 'hsl(205, 67%, 60%)',
    600: 'hsl(207, 53%, 51%)',
    700: 'hsl(207, 51%, 40%)',
    800: 'hsl(202, 76%, 25%)',
    900: 'hsl(205, 53%, 17%)',
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
  teal: {
    50: 'hsl(172, 48.4%, 93.9%)',
    100: 'hsl(180, 31.5%, 85.7%)',
    200: 'hsl(182, 29.8%, 77.6%)',
    300: 'hsl(184, 28.8%, 68.6%)',
    400: 'hsl(184, 28.2%, 59%)',
    500: 'hsl(185, 28.1%, 50.4%)',
    600: 'hsl(185, 39.3%, 41.4%)',
    700: 'hsl(186, 58.3%, 32%)',
    800: 'hsl(185, 56.2%, 20.6%)',
    900: 'hsl(185, 52.4%, 12.4%)',
  },
  coral: {
    50: 'hsl(17, 63.6%, 93.5%)',
    100: 'hsl(15, 75%, 82.7%)',
    200: 'hsl(14, 76.9%, 69.4%)',
    300: 'hsl(10, 79.6%, 67.3%)',
    400: 'hsl(6, 81.7%, 63.5%)',
    500: 'hsl(5, 62.3%, 56.3%)',
    600: 'hsl(5, 52.4%, 45.3%)',
    700: 'hsl(5, 58%, 34.5%)',
    800: 'hsl(5, 66.7%, 25.9%)',
    900: 'hsl(3, 97%, 13.1%)',
  },
  sand: {
    50: 'hsl(26, 41.2%, 96.7%)',
    100: 'hsl(21, 29.8%, 88.8%)',
    200: 'hsl(25, 32.4%, 85.5%)',
    300: 'hsl(27, 39.3%, 82.5%)',
    400: 'hsl(29, 33.3%, 78.2%)',
    500: 'hsl(24, 28.6%, 67.1%)',
    600: 'hsl(19, 25.8%, 55.1%)',
    700: 'hsl(17, 33.6%, 42%)',
    800: 'hsl(16, 50.3%, 31.6%)',
    900: 'hsl(14, 97.9%, 18.6%)',
  },
  slatePurple: {
    100: 'hsl(228, 48%, 94%, 1)',
    900: 'hsla(229, 14%, 16%, 1)',
  },
};

export const fonts = {
  fontFamilyRoboto: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
  fontFamilyPoppins: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
  fontFamilyEBGaramond: "'EB Garamond', serif",
};

export const tokens = {
  /* color presets */
  colorBackgroundDefault: colors.sand[50],
  colorBackgroundCare: colors.blue[50],
  colorCommunity: colors.sand[800],
  colorBackgroundCommunity: colors.sand[50],
  colorBackgroundResources: colors.grey[100],
  colorDefaultText: colors.black,
  colorPrimary: colors.slatePurple[900],
  colorPrimaryActive: colors.blue[800],
  colorPrimaryHover: colors.blue[700],
  colorPrimaryText: colors.slatePurple[900],
  colorPrimaryFocus: colors.blue[200],
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
  colorDanger: colors.red[600],
  colorDangerHover: colors.red[500],
  colorDangerText: colors.red[700],
  colorDangerFocus: colors.red[200],

  /* font-family */
  fontFamilySerif: fonts.fontFamilyEBGaramond,
  fontFamilySansSerif: fonts.fontFamilyPoppins,
  fontFamilyLabel: fonts.fontFamilyPoppins,
  fontFamilyBody: fonts.fontFamilyRoboto,
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
  activeColor: colors.blue[700],
  activeHoverColor: colors.blue[800],
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
  maxNavWidth: '500px',
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
