import styled, { css } from 'styled-components';
import t from '../../styles/tokens';
import { CardGridProps } from './CardGrid';

const CardGridStyled = styled.div<CardGridProps>`
  display: grid;
  align-items: stretch;
  grid-gap: ${t.spacingXLarge};
  ${(p: CardGridProps) =>
    css`
      grid-template-columns: repeat(${p.columns}, 1fr);
    `};

  & + & {
    margin-top: ${t.spacingXLarge};
  }
`;

export default CardGridStyled;
