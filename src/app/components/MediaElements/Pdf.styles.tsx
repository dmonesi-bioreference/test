import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import { base, colors } from 'styles';

const PdfStyled = styled.div`
  ${base}
  position: relative;
  width: 271px;
  height: 352px;
  margin: auto;

  ${ButtonStyled} {
    text-decoration: none;
    
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

  ${IconStyled} {
    width: 100%;
    justify-content: center;
  }

  .pdf__bgWrap {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      ${colors.grey[200].replace('1)', '0.1)')} 0%,
      ${({ theme }) => theme?.colors?.icon.replace('1)', '0.8)') || colors.grey[400].replace('1)', '0.8)')}
      50.01%
    );
  }

  .pdf__actions {
    transform: scale(1.5);

    * {
      display: flex;
      justify-content: center;
    }
  }
`;

export default PdfStyled;
