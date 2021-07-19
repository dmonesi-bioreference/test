import Spinner from '../Spinner/Spinner';
import SpinnerOverlayStyled from './SpinnerOverlay.styles';

const SpinnerOverlay = () => (
  <SpinnerOverlayStyled>
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  </SpinnerOverlayStyled>
);

export default SpinnerOverlay;
