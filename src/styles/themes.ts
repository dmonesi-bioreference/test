import { colors } from 'styles/tokens';

export const defaultTheme = {
  /* provided name makes debugging easier */
  name: 'default',
  /* theme specific colors */
  colors: {
    background: colors.indigo[50],
    foreground: colors.indigo[100],
    bannerBackground: colors.violet[50],
    bannerForeground: colors.violet[100],
    headerText: colors.violet[900],
    icon: colors.violet[800],
    borderHighlight: colors.indigo[300],
  },
};

export const resourcesTheme = {
  name: 'resources',
  colors: {
    background: colors.cornflowerBlue[50],
    foreground: colors.cornflowerBlue[100],
    bannerBackground: colors.cornflowerBlue[50],
    bannerForeground: colors.cornflowerBlue[100],
    headerText: colors.cornflowerBlue[900],
    icon: colors.cornflowerBlue[800],
    borderHighlight: colors.cornflowerBlue[800],
  },
};

export const healthProfileTheme = {
  name: 'health profile',
  colors: {
    background: colors.powderBlue[50],
    foreground: colors.powderBlue[100],
    bannerBackground: colors.powderBlue[50],
    bannerForeground: colors.powderBlue[100],
    headerText: colors.powderBlue[800],
    icon: colors.powderBlue[600],
    borderHighlight: colors.powderBlue[300],
  },
};

export const communityTheme = {
  name: 'community',
  color: colors.green,
  colors: {
    background: colors.green[50],
    foreground: colors.green[100],
    bannerBackground: colors.green[50],
    bannerForeground: colors.green[100],
    headerText: colors.green[800],
    icon: colors.green[600],
    borderHighlight: colors.green[300],
  },
};

export const themes = {
  defaultTheme,
  resourcesTheme,
  healthProfileTheme,
  communityTheme,
} as const;

/* Register the Theme type globally, so that it can be accessed from any component */
declare global {
  type Themes = keyof typeof themes;
}

/* getTheme is used from the ThemeProvider to retrieve the theme by key */
export const getTheme = (theme: Themes) => themes[theme];
