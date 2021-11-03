import { createContext } from 'react';

export const AppServiceContext = createContext<AppService | null>(null);
export const AppEventContext = createContext<AppDispatchMap | null>(null);
