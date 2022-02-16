import styled from 'styled-components';

import { tokens } from 'styles';

import { CircularProgressProps } from './CircularProgress';
interface CircularProgressPropsWithGrid extends CircularProgressProps {
  grid: {
    radius: number;
    width: number;
    height: number;
    origin: { x: number; y: number };
  };
}

const CircularProgressStyled = styled.div<CircularProgressPropsWithGrid>`
  position: relative;
  z-index: ${tokens.zIndexIndicator};
  .circular-progress__container {
    fill: none;
    stroke-width: ${(p) => p.strokeWidth}px;
    stroke: ${(p) => p.strokePaddingColor};
  }

  .circular-progress__bg {
    fill: none;
    stroke-width: ${(p) =>
      p.strokeWidth && p.strokeWidth - (p.strokePadding ?? 0) * 2}px;
    stroke: ${(p) => p.trackColor};
  }

  .circular-progress__indicator {
    fill: none;
    stroke-width: ${(p) =>
      p.strokeWidth && p.strokeWidth - (p.strokePadding ?? 0) * 2}px;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;
    transform-box: fill-box;
  }
`;

export default CircularProgressStyled;
