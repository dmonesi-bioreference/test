import React, { FC } from 'react';
import CardGridStyled from './CardGrid.styles';

interface CardGridProps {
  columns?: 1 | 2 | 3;
}

const CardGrid: FC<CardGridProps> = ({ children, columns = 1 }) => (
  <CardGridStyled data-columns={columns}>{children}</CardGridStyled>
);

export default CardGrid;
