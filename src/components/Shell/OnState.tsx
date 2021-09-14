import { useAppState } from './hooks';
import { AppStates } from './state';

interface OnStateProps {
  // A string or list of strings which describe any valid states for the children components to render in.
  matches: AppStates | AppStates[];
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
 *     <OnState matches="app.checking">
 *       <Spinner />
 *     </OnState>
 *
 * The matches prop can accept either a string or an array of strings,
 * and if any of the given strings match the current application state, the
 * interior components will render.
 *
 * @param props object `{ matches: AppStates | AppStates[] }`
 * @returns JSX.Element which short-circuits renders on invalid match.
 */
export function OnState(props: Props<OnStateProps>) {
  const isMatch = useAppState(props.matches);
  return isMatch ? <>{props.children}</> : null;
}
