import styled, { css } from 'styled-components';

import { tokens } from 'styles';

import { CardGridProps } from './CardGrid';

const CardGridStyled = styled.div<CardGridProps>`
  display: grid;
  align-items: stretch;
  grid-gap: ${tokens.spacingXLarge};
  ${(p: CardGridProps) =>
    css`
      grid-template-columns: repeat(${p.columns}, 1fr);
    `};

  & + & {
    margin-top: ${tokens.spacingXLarge};
  }
`;

export default CardGridStyled;
