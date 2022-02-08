import { RefObject, useEffect } from 'react';

/**
 * @description useOnClickOutside is a hook that allows you to bind a callback to
 * a click event outside of a given ref.
 * @param ref A ref to the element you want to bind the callback to
 * @param handler The callback to be invoked when the click event occurs
 * @example
 * const ref = useRef();
 * const onClickOutside = useOnClickOutside(ref, () => {
 *  console.log('Clicked outside of ref');
 * });
 * return (
 *  <div ref={ref}>
 *    <button onClick={onClickOutside}>Click me</button>
 *  </div>
 * );
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | undefined>,
  handler: (event?: MouseEvent) => void
): void {
  // Bind the event handler to the ref
  const listener = (mouseEvent: MouseEvent) => {
    if (!ref.current || ref.current.contains(mouseEvent.target as Node)) {
      return;
    }
    handler(mouseEvent);
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  });
}
