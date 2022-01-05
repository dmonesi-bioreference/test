import styled from 'styled-components';


import IconStyled from 'components/Icon/Icon.styles';
import { base } from 'styles';

const PdfStyled = styled.div`
  ${base}
  position: relative;
  width: 271px;
  height: 352px;
  margin: auto;

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
    background: linear-gradient(0deg, rgba(15, 78, 113, 0.64) 49.86%, rgba(0, 74, 115, 0.0128) 100%);
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