import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { colors, tokens, parseRemToPx } from 'styles';

import { TimelineItemProps } from './TimelineItem';
import TimelineItemBodyStyled from './TimelineItemBody.styles';

interface TimelineItemStyledProps extends TimelineItemProps {
  bodyVisible?: boolean;
  lineHeight?: number;
  grid: {
    radius: number;
    strokeWidth: number;
    width: number;
    height: number;
    origin: {
      x: number;
      y: number;
    };
  };
}

const smallLeftOffset =
  (parseRemToPx(tokens.spacing) * 2 + parseRemToPx(tokens.spacingXSmall)) / 2 -
  (parseRemToPx(tokens.spacingSmall) * 2 +
    parseRemToPx(tokens.spacing) * 0.25) /
    2;
const lineWidth = parseRemToPx(tokens.spacingXxSmall);
const contentTopPadding = parseRemToPx(tokens.spacingXSmall);
const bottomPadding = parseRemToPx(tokens.spacingMedium);
const duration = tokens.transitionMedium;

const TimelineItemStyled = styled.div<TimelineItemStyledProps>`
  display: flex;
  padding-bottom: ${bottomPadding}px;
  height: ${(p) => (p.lineHeight ?? 0) + contentTopPadding + bottomPadding}px;
  transition: all ${duration} ease-out;

  .icon {
    display: flex;
    margin-left: ${(p) => (p.isSmall ? smallLeftOffset : 0)}px;

    svg {
      max-width: fit-content;
      width: ${(p) => p.grid.width}px;
      height: ${(p) =>
        (p.lineHeight ?? 0) + contentTopPadding + bottomPadding}px;
      transition: all ${duration} ease-out;

      circle {
        fill: none;
        stroke: ${colors.grey[400]};
        stroke-linecap: round;
        stroke-width: ${(p) => p.grid.strokeWidth}px;
      }

      .bg {
        stroke: ${colors.grey[400]};
      }

      .indicator {
        stroke-dasharray: ${(p) => 2 * Math.PI * p.grid.radius};
        stroke-dashoffset: ${(p) =>
          2 * Math.PI * (p.grid.radius * ((100 - (p.percent ?? 0)) / 100))};
        transform: rotate(-90deg);
        transform-origin: center;
        transform-box: fill-box;
      }

      rect {
        stroke: none;
        fill: ${colors.grey[400]};
        x: ${(p) => p.grid.origin.x - lineWidth / 2};
        y: ${(p) => p.grid.height};
        width: ${lineWidth}px;
        height: ${(p) =>
          (p.lineHeight ?? 0) + contentTopPadding + bottomPadding}px;
        transition: all ${duration} ease-out;
      }

      foreignObject {
        ${IconStyled} > * {
          color: ${colors.grey[400]};
          width: ${(p) => (p.isSmall ? tokens.fontSize10 : tokens.fontSize14)};
          height: ${(p) => (p.isSmall ? tokens.fontSize10 : tokens.fontSize14)};
        }
      }
    }
  }

  .timeline-item-content {
    padding-top: ${(p) => (p.isSmall ? 0 : contentTopPadding)}px;
    margin-left: ${tokens.spacing};

    ${ButtonStyled} {
      justify-content: space-between;
      text-decoration: none;
      display: inline-flex;

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

      ${TypographyStyled} {
        color: ${colors.grey[400]};
      }

      ${IconStyled} {
        color: ${colors.grey[400]};
        transform: ${(p) => (p.bodyVisible ? 'rotate(-90deg)' : '')};
        transition: all ${duration} ease-out;
      }
    }

    ${TimelineItemBodyStyled} {
      margin-top: ${tokens.spacingXSmall};
      transform: ${(p) => (p.bodyVisible ? 'scaleY(1)' : 'scaleY(0)')};
      transform-origin: left top;
      transition: all ${duration} ease-out;
    }
  }
`;

export default TimelineItemStyled;
