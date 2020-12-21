import styled from 'styled-components';
import t, { colors } from '../../styles/tokens';
import { ButtonProps } from './Button';

const ButtonStyled = styled.button`
  align-items: center;
  background-color: ${t.colorPrimary};
  border: ${t.borderWidthThin} solid ${t.colorPrimary};
  border-radius: ${t.borderRadiusMedium};
  color: ${t.colorPrimaryText};
  cursor: pointer;
  display: ${(props: ButtonProps) =>
    ['a', 'div'].includes(props.as as string) ? 'inline-flex' : 'flex'};
  font-family: ${t.fontFamilyBody};
  font-size: ${t.fontSize18};
  font-weight: ${t.fontWeightBold};
  justify-content: center;
  line-height: ${t.lineHeightNormal};
  padding: ${t.spacingXSmall} ${t.spacingLarge};
  text-decoration: none;
  transition: all ${t.transitionMedium} ease-in-out;
  white-space: nowrap;

  &[hidden] {
    display: none;
  }

  a {
    color: ${colors.white};
  }

  &:hover {
    background-color: ${t.colorPrimaryHover};
    border-color: ${t.colorPrimaryHover};
  }

  .children {
    display: block;
  }

  &:disabled {
    background-color: ${colors.coolGray[200]};
    border-color: ${colors.coolGray[200]};
    color: ${colors.white};
    cursor: not-allowed;

    &:hover {
      background-color: ${colors.coolGray[200]};
      border-color: ${colors.coolGray[200]};
    }
  }

  &[data-icon-position='end'] {
    flex-flow: row-reverse;
  }

  &[data-size='small'] {
    font-size: ${t.fontSize14};
    padding: ${t.spacingXSmall} ${t.spacingMedium};
  }

  &[data-size='medium'] {
    font-size: ${t.fontSize16};
    padding: ${t.spacingXSmall} ${t.spacingMedium};
  }

  &[data-kind='secondary'] {
    background-color: ${t.colorSecondary};
    border-color: ${t.colorSecondary};
    color: ${t.colorSecondaryText};

    &:hover {
      background-color: ${t.colorSecondaryHover};
      border-color: ${t.colorSecondaryHover};
    }
  }

  &[data-kind='danger'] {
    background-color: ${t.colorError};
    border-color: ${t.colorError};
    color: ${colors.white};

    &:hover {
      background-color: ${t.colorErrorHover};
      border-color: ${t.colorErrorHover};
    }
  }

  &[data-kind^='text'] {
    background: none;
    border: 0;
    color: ${t.colorSecondaryText};
    font-size: ${t.fontSize16};
    padding: 0;
    text-decoration: underline;

    &:hover {
      background: none;
      color: ${colors.black};
    }
  }

  &[data-kind='text-danger'] {
    color: ${t.colorError};

    &:hover {
      color: ${t.colorErrorHover};
    }
  }
`;

export default ButtonStyled;
