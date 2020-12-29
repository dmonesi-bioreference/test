import styled from 'styled-components';
import t, { focus, colors } from '../../styles/tokens';
import { buttonReset } from '../../styles/utilities/button';

type IconButtonStyled = {
  type: 'submit' | 'button' | undefined;
};

const IconButtonStyled = styled.button`
  ${buttonReset}
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-radius: ${t.borderRadiusMedium};
  font-size: inherit;
  border: 1px solid transparent;
  color: ${t.colorSecondary};
  padding: ${t.spacingSmall};
  transition: ${t.transitionMedium} color;

  &:focus {
    outline: none;
    border: ${focus.border};
    box-shadow: ${focus.shadow};
  }

  &:hover:not(.icon-button--disabled),
  &:focus:not(.icon-button--disabled) {
    color: ${t.colorPrimary};
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
