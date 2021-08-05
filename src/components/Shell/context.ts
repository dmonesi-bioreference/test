import { createContext } from 'react';

import * as Tokens from 'styles/tokens';

import { AppDispatchMap, AppService } from './state';

export const AppServiceContext = createContext<AppService | null>(null);
export const AppEventContext = createContext<AppDispatchMap | null>(null);
export const AppThemeContext = createContext(Tokens);
