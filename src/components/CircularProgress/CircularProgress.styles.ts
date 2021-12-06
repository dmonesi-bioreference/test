import { remToPx } from 'polished';
import styled from 'styled-components';

import { tokens } from 'styles';

import { CircularProgressProps } from './CircularProgress';

const outerShadowWidth = 4;

const grid = (p: CircularProgressProps) => {
  if (!p.radius || !p.strokeWidth) return ({ width: 0, height: 0, origin: { x: 0, y: 0 }});
  return ({
    width: p.radius * 2 + p.strokeWidth + outerShadowWidth,
    height: p.radius * 2 + p.strokeWidth + outerShadowWidth,
    origin: {
      x: p.radius + (p.strokeWidth / 2) + (outerShadowWidth / 2),
      y: p.radius + (p.strokeWidth / 2) + (outerShadowWidth / 2)
    }
  });
};

const CircularProgressStyled = styled.div<CircularProgressProps>`
  .progress {
    display: flex;
    width: ${p => grid(p).width}px;
    height: ${p => grid(p).height}px;

    circle {
      cx: ${p => grid(p).origin.x};
      cy: ${p => grid(p).origin.y};
      r: ${p => p.radius};
    }

    foreignObject {
      x: ${p => grid(p).origin.x - (parseInt(remToPx(tokens.spacingXLarge), 10) / 2)};
      y: ${p => grid(p).origin.y - (parseInt(remToPx(tokens.spacingXLarge), 10) / 2)};
      width: ${tokens.spacingXLarge};
      height: ${tokens.spacingXLarge};
    }
  }

  .container {
    fill: none;
    stroke-width: ${p => p.strokeWidth}px;
    stroke: ${p => p.containerColor};
  }

  .bg {
    fill: none;
    stroke-width: ${p => p.strokeWidth && p.strokeWidth - ((p.containerThickness ?? 0) * 2)}px;
    stroke: ${p => p.trackColor};
  }

  .indicator {
    fill: none;
    stroke-width: ${p => p.strokeWidth && p.strokeWidth - ((p.containerThickness ?? 0) * 2)}px;
    stroke-linecap: round;
    stroke-dasharray: ${p => p.radius && 2 * Math.PI * p.radius};
    stroke-dashoffset: ${p => p.radius && 2 * Math.PI * (p.radius * ((100 - p.percent) / 100))};
    transform: rotate(-90deg);
    transform-origin: center;
    transform-box: fill-box;
    animation: fillUp 1.5s ease-in-out;
  }

  @keyframes fillUp {
    from {
      stroke-dashoffset: ${p => p.radius && 2 * Math.PI * p.radius};
    }
    to {
      stroke-dashoffset: ${p => p.radius && 2 * Math.PI * (p.radius * ((100 - p.percent) / 100))};
    }
  }
`;

export default CircularProgressStyled;
