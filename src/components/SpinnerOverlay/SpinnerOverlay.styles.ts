import styled from 'styled-components';
import { modals } from '../../styles/tokens';

const SpinnerOverlayStyled = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${modals.overlayBackgroundColor};

  .spinner-wrapper {
    margin: auto;
  }
`;

export default SpinnerOverlayStyled;
