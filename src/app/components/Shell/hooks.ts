import { useSelector } from '@xstate/react';
import { useContext } from 'react';

import { t } from 'localization';

import { AppEventContext, AppServiceContext } from './context';

/**
 * In order to access app state, we use the `useAppSelector` hook. This
 * hook grabs the running xstate chart from our app's context. If it isn't
 * there, the hook throws. Otherwise, it leverages the @xstate/react hook,
 * `useSelector`. This adds a change listener to the state, and only triggers
 * updates / renders when necessary.
 *
 * @param selector A function that takes an `AppService.state` and returns anything
 * @returns The selected state content
 */
export function useAppSelector<ReturnValue>(
  selector: (state: AppService['state']) => ReturnValue
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
  const events = useContext(AppEventContext);

  if (!events) {
    throw new Error('useAppEvents must be used within a Shell');
  }

  return events;
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

/**
 * useAppState is a shorthand function which should help make checking
 * the app state a little easier. With useAppState, you can invoke the
 * current state of the app like so:
 *
 *     useAppState('target-state');
 *
 *  Versus the longer approach:
 *
 *     useAppSelector(state => state.matches('target-state'));
 *
 * As a nice byproduct, useAppState has a typesafety guarantee: whenever
 * the app machine changes, the signature for useAppState will as well.
 * This means if meaningful refactors of the app logic occur, the whole
 * application's type checking will guide you through any refactoring
 * follow-ups.
 *
 * @returns a boolean result of the interior `state.matches` call
 */
export function useAppState(path: AppStates | AppStates[]) {
  return useAppSelector((state) => state.matches(path));
}
