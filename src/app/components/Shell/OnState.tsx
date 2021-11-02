import { useAppState } from './hooks';

interface OnStateProps {
  // A string or list of strings which describe any valid states for the children components to render in.
  matches: AppStates;
  // An exception handler in the event that the state doesn't match. Defaults to `null`.
  fallback?: React.ReactNode;
}

/**
 * Any part of the application may render components by wrapping them in
 * an instance of the `<OnState />` component. It permits a typesafe way
 * to access the application state, much like a `<Route />` component in
 * React Router would render components based on location state.
 *
 * For example, to render a component when the app is checking for
 * identity info:
 *
 *     <OnState matches="checking">
 *       <Spinner />
 *     </OnState>
 *
 * The matches prop can accept either a string or an array of strings,
 * and if any of the given strings match the current application state, the
 * interior components will render.
 *
 * @param props object `{ matches: AppStates, fallback?: React.ReactNode }`
 * @returns JSX.Element which short-circuits renders on invalid match.
 */
export function OnState({
  children,
  fallback = null,
  matches,
}: Props<OnStateProps>) {
  const isMatch = useAppState(matches);
  return isMatch ? <>{children}</> : <>{fallback}</>;
}
