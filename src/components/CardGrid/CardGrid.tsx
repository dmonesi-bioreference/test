import React, { FC } from 'react';
import CardGridStyled from './CardGrid.styles';

export interface CardGridProps {
  /** The number of columns in the grid. */
  columns?: number;
}

const defaultProps = {
  columns: 2,
};

const CardGrid: FC<CardGridProps> = (props) => (
  <CardGridStyled columns={props.columns}>{props.children}</CardGridStyled>
);

CardGrid.defaultProps = defaultProps;

export default CardGrid;
