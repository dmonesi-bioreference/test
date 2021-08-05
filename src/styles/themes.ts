import * as light from './tokens';

export const themes = { light } as const;

export type Themes = keyof typeof themes;

export const getTheme = (theme: Themes) => themes[theme];
