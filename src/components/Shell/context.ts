import { createContext } from 'react';

import * as Tokens from 'styles/tokens';

import { AppService, AppDispatchMap } from './state';

export const AppServiceContext = createContext<AppService | null>(null);
export const AppEventContext = createContext<AppDispatchMap | null>(null);
export const AppThemeContext = createContext(Tokens);
