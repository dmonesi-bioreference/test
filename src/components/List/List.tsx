import { Children } from 'react';

import ListStyled from './List.styles';

export interface ListProps {
  kind: 'bulleted' | 'divided' | 'plain';
}

const List: React.FC<ListProps> = (props) => {
  const children = Children.toArray(props.children);
  return (
    <ListStyled>
      <ul className={`list list--${props.kind}`}>
        {buildList(props.kind, children)}
      </ul>
    </ListStyled>
  );
};

const buildList = (kind, children: React.ReactNodeArray) => {
  return children.map((item, index) => {
    return (
      <li className={`list__item list__item--${kind}`} key={index}>
        {item}
      </li>
    );
  });
};

export default List;
