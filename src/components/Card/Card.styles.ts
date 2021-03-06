import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

import { CardProps } from './Card';

const CardStyled = styled.div<CardProps>`
  ${base};
  background-color: ${colors.white};
  border-radius: ${tokens.borderRadius};
  box-shadow: ${tokens.shadowCard};
  overflow: hidden;
  width: 100%;

  &.card--transparent {
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }

  &.card--loading {
    height: ${tokens.spacingXLarge};
  }

  .card__header {
    max-height: ${(props) => props.maxHeaderHeight}px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
    }
  }

  .card__content {
    padding: ${tokens.spacingLarge};
  }

  .card__footer {
    padding: ${tokens.spacingLarge};
  }
`;

export default CardStyled;
