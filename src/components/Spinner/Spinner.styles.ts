import styled from 'styled-components';
import t from '../../styles/tokens';
import { SpinnerProps } from './Spinner';

const SpinnerStyled = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: ${t.borderRadiusCircle};
  border: ${(p: SpinnerProps) => p.strokeWidth}px solid
    ${(p: SpinnerProps) => p.trackColor};
  border-top-color: ${(p: SpinnerProps) => p.indicatorColor};
  animation: 1s linear infinite spin;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerStyled;
