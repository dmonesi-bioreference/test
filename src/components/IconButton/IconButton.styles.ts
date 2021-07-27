import styled from 'styled-components';

import { focus, colors, tokens, buttonReset } from 'styles';

type IconButtonStyled = {
  type: 'submit' | 'button' | undefined;
};

const IconButtonStyled = styled.button`
  ${buttonReset}
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-radius: ${tokens.borderRadiusMedium};
  font-size: inherit;
  border: 1px solid transparent;
  color: ${tokens.colorSecondary};
  padding: ${tokens.spacingSmall};
  transition: ${tokens.transitionMedium} color;

  &:focus {
    outline: none;
    border: ${focus.border};
    box-shadow: ${focus.shadow};
  }

  &:hover:not(.icon-button--disabled),
  &:focus:not(.icon-button--disabled) {
    color: ${tokens.colorPrimary};
  }

  &:active:not(.icon-button--disabled) {
    color: ${colors.blue[800]};
  }

  &.icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default IconButtonStyled;
