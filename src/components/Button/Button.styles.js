import styled from 'styled-components';
import t from '../GlobalStyle/settings/tokens';
import IconStyled from '../Icon/Icon.styles';

const ButtonStyled = styled.button`
  align-items: center;
  background-color: ${t.colorPrimary};
  border: ${t.borderWidthThin} solid ${t.colorPrimary};
  border-radius: ${t.borderRadiusMedium};
  color: ${t.colorWhite};
  cursor: pointer;
  display: flex;
  font-family: ${t.fontFamily};
  font-size: ${t.fontSizeTextXLarge};
  font-weight: ${t.fontWeightBold};
  justify-content: center;
  line-height: ${t.lineHeightText};
  padding: ${t.spacingXSmall} ${t.spacingLarge};
  transition: all ${t.durationPromptly} ease-in-out;

  &:hover {
    background-color: ${t.colorPrimaryHover};
    border-color: ${t.colorPrimaryHover};
  }

  &:disabled {
    background-color: ${t.colorAccent};
    border-color: ${t.colorAccent};
    color: ${t.colorWhite};
    cursor: not-allowed;

    &:hover {
      background-color: ${t.colorAccent};
      border-color: ${t.colorAccent};
    }
  }

  ${IconStyled} {
    margin-left: -0.3rem;
    margin-right: ${t.spacingSmall};

    polygon,
    path {
      fill: ${t.colorWhite};
    }
  }

  &[data-size='small'] {
    font-size: ${t.fontSizeTextMedium};
    padding: ${t.spacingXSmall} ${t.spacingMedium};
  }

  &[data-size='medium'] {
    font-size: ${t.fontSizeTextLarge};
    padding: ${t.spacingXSmall} ${t.spacingMedium};
  }

  &[data-type='secondary'] {
    background-color: ${t.colorSecondary};
    border-color: ${t.colorSecondary};

    &:hover {
      background-color: ${t.colorSecondaryHover};
      border-color: ${t.colorSecondaryHover};
    }
  }

  &[data-type='black'] {
    background-color: ${t.colorBlack};
    border-color: ${t.colorBlack};

    &:hover {
      background-color: ${t.colorBlackHover};
      border-color: ${t.colorBlackHover};
    }
  }

  &[data-type='outline'] {
    background-color: ${t.colorWhite};
    border-color: ${t.colorAccent};
    color: ${t.colorAccent};

    .c-icon {
      polygon,
      path {
        fill: ${t.colorAccent};
      }
    }

    &:hover {
      background-color: ${t.colorBackground};
      border-color: ${t.colorAccent};
      color: ${t.colorAccentHover};
    }
  }

  &[data-type='danger'] {
    background-color: ${t.colorError};
    border-color: ${t.colorError};

    &:hover {
      background-color: ${t.colorErrorHover};
      border-color: ${t.colorErrorHover};
    }
  }

  &[data-type='text'] {
    background: none;
    border: 0;
    color: ${t.colorPrimary};
    font-size: ${t.fontSizeTextMedium};
    padding: 0;

    &:hover {
      background: none;
      color: ${t.colorBlack};
    }
  }
`;

export default ButtonStyled;
