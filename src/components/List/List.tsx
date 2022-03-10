import { Children } from 'react';

import ListStyled from './List.styles';

export interface ListProps {
  /** Options for how the list is displayed. */
  kind: 'bulleted' | 'divided' | 'plain';
  /** Items to be listed. */
  children?: React.ReactNode;
}

const List: React.FC<ListProps> = (props) => {
  const children = Children.toArray(props.children);
  return (
    <ListStyled className={`list list--${props.kind}`}>
      {buildList(props.kind, children)}
    </ListStyled>
  );
};

const buildList = (kind: ListProps['kind'], children: React.ReactNodeArray) => {
  return children.map((item, index) => {
    return (
      <li className={`list__item list__item--${kind}`} key={index}>
        {item}
      </li>
    );
  });
};

export default List;
