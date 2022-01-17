/// <reference types="next" />

declare type Props<ComponentInterface> =
  React.PropsWithChildren<ComponentInterface>;

declare type WithWildCards<T> = T & { [key: string]: unknown };

declare module "react-html-parser" {
  import { Node } from 'domhandler';

  export default function ReactHtmlParser (
    html: string,
    options?: {
      decodeEntities?: boolean | undefined;
      transform?: Transform | undefined;
      preprocessNodes?(nodes: Node[]): any;
    }
  ): React.ReactNode[];
  
  export function convertNodeToElement (
    node: Node,
    index: number,
    transform?: Transform
  ): React.ReactNode

  export type Transform = (
    node: Node,
    index: number,
    transform?: Transform
  ) => (React.ReactNode | string)
}