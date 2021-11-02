import { createContext } from 'react';

import { AppService } from 'app/state';
import * as Tokens from 'styles/tokens';

export const AppServiceContext = createContext<AppService | null>(null);
export const AppEventContext = createContext<AppDispatchMap | null>(null);
export const AppThemeContext = createContext(Tokens);
