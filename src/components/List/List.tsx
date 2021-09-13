import React from 'react';

import ListStyled from './List.styles';

const List: React.FC = (props) => {
  const children = React.Children.toArray(props.children);
  return (
    <ListStyled>
      <ul className="list">{buildList(children)}</ul>
    </ListStyled>
  );
};

const buildList = (children: React.ReactNodeArray) => {
  return children.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
};

export default List;
