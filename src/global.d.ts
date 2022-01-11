/// <reference types="next" />

declare type Props<ComponentInterface> =
  React.PropsWithChildren<ComponentInterface>;

declare type WithWildCards<T> = T & { [key: string]: unknown };
