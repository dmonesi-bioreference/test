import { useSelector } from '@xstate/react';
import { useContext } from 'react';

import { t } from 'localization';

import { AppEventContext, AppServiceContext } from './context';
import { AppState } from './state';

/**
 * In order to access app state, we use the `useAppSelector` hook. This
 * hook grabs the running xstate chart from our app's context. If it isn't
 * there, the hook throws. Otherwise, it leverages the @xstate/react hook,
 * `useSelector`. This adds a change listener to the state, and only triggers
 * updates / renders when necessary.
 *
 * @param selector A function that takes an `AppState` and returns anything
 * @returns The selected state content
 */
export function useAppSelector<ReturnValue>(
  selector: (state: AppState) => ReturnValue
) {
  const appService = useContext(AppServiceContext);

  if (!appService) {
    throw new Error('useAppSelector must be used within a Shell');
  }

  return useSelector(appService, selector);
}

/**
 * In order to make the interface for app events a little simpler for
 * our components to use, `useAppEvents` bundles helper functions that
 * provide premade dispatches.
 *
 * @returns an object of functions which trigger app events
 */
export function useAppEvents() {
  return useContext(AppEventContext);
}

/**
 * This hook allows you to grab a translation function that preconfigures
 * the language fetched from the app state's chosen language.
 *
 * @returns a wrapped version of i18next.t which knows the configured language
 */
export function useAppTranslation() {
  type Translation = typeof t;

  const lng = useAppSelector((state) => state.context.language);
  const appTranslation: Translation = (key, options?) =>
    t(key, { ...options, lng });

  return appTranslation;
}
