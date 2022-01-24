import styled from 'styled-components';

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
    stroke-dasharray: ${(p) => 2 * Math.PI * p.grid.radius};
    stroke-dashoffset: ${(p) =>
      2 * Math.PI * (p.grid.radius * ((100 - p.percent) / 100))};
    transform: rotate(-90deg);
    transform-origin: center;
    transform-box: fill-box;
    animation: fillUp 1.5s ease-in-out;
  }

  @keyframes fillUp {
    from {
      stroke-dashoffset: ${(p) => 2 * Math.PI * p.grid.radius};
    }
    to {
      stroke-dashoffset: ${(p) =>
        2 * Math.PI * (p.grid.radius * ((100 - p.percent) / 100))};
    }
  }
`;

export default CircularProgressStyled;
