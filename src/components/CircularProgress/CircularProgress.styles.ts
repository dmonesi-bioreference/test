import { remToPx } from 'polished';
import styled from 'styled-components';

import { tokens } from 'styles';

import { CircularProgressProps } from './CircularProgress';

const grid = (p: CircularProgressProps) => {
  const outerShadowWidth = p.withOuterShadow ? parseInt(remToPx(tokens.spacingXxSmall), 10) : 0;

  if (!p.radius || !p.strokeWidth) return ({ radius: 0, width: 0, height: 0, origin: { x: 0, y: 0 }});
  return ({
    radius: p.radius - p.strokeWidth / 2,
    width: p.radius * 2 + outerShadowWidth * 2,
    height: p.radius * 2 + outerShadowWidth * 2,
    origin: {
      x: p.radius + outerShadowWidth,
      y: p.radius + outerShadowWidth
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
      r: ${p => grid(p).radius};
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
    stroke: ${p => p.strokePaddingColor};
  }

  .bg {
    fill: none;
    stroke-width: ${p => p.strokeWidth && p.strokeWidth - ((p.strokePadding ?? 0) * 2)}px;
    stroke: ${p => p.trackColor};
  }

  .indicator {
    fill: none;
    stroke-width: ${p => p.strokeWidth && p.strokeWidth - ((p.strokePadding ?? 0) * 2)}px;
    stroke-linecap: round;
    stroke-dasharray: ${p => 2 * Math.PI * grid(p).radius};
    stroke-dashoffset: ${p => 2 * Math.PI * (grid(p).radius * ((100 - p.percent) / 100))};
    transform: rotate(-90deg);
    transform-origin: center;
    transform-box: fill-box;
    animation: fillUp 1.5s ease-in-out;
  }

  @keyframes fillUp {
    from {
      stroke-dashoffset: ${p => 2 * Math.PI * grid(p).radius};
    }
    to {
      stroke-dashoffset: ${p => 2 * Math.PI * (grid(p).radius * ((100 - p.percent) / 100))};
    }
  }
`;

export default CircularProgressStyled;
