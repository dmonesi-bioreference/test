import styled from 'styled-components';
import t from '../../styles/tokens';

const LoadingOverlayStyled = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${t.colorHaze};

  .loader-wrapper {
    margin: auto;
  }
`;

export default LoadingOverlayStyled;
