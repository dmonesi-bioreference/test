import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { base, colors, tokens } from 'styles';

const AccordionStyled = styled.div`
  ${base}
`;

export const AccordionHeaderStyled = styled.div`
  background-color: ${({ theme }) =>
    theme?.colors?.foreground || colors.grey[400]};

  ${ButtonStyled} {
    justify-content: space-between;
    text-decoration: none;
    display: inline-flex;
    padding: ${tokens.spacing};
    width: 100%;
    
    * {
      gap: ${tokens.spacing};
      display: flex;
      align-items: center;
    }

    ${IconStyled} {
      color: ${({ theme }) =>
        theme?.colors?.icon || 'black'};
    }

    ${TypographyStyled} {
      color: ${({ theme }) =>
        theme?.colors?.headerText || 'black'};
    }

    &:hover:not(.button--disabled) {
      box-shadow: none;
      text-decoration: none;
    }

    &:focus:not(.button--disabled) {
      box-shadow: none;
      text-decoration: none;
    }

    &:active:not(.button--disabled) {
      box-shadow: none;
      text-decoration: none;
    }
  }
`;

export const AccordionBodyStyled = styled.div`
  background-color: ${({ theme }) =>
    theme?.colors?.background || colors.grey[100]};
  padding: ${tokens.spacing};
`;

export default AccordionStyled;
