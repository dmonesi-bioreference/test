import { remToPx } from 'polished';
import styled from 'styled-components';



import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { colors, tokens } from 'styles';

import { TimelineItemProps } from './TimelineItem';
import TimelineItemBodyStyled from './TimelineItemBody.styles';

interface TimelineItemStyledProps extends TimelineItemProps {
  bodyVisible?: boolean;
  lineHeight?: number;
}

const lineWidth = parseInt(remToPx(tokens.spacingXxSmall), 10);
const contentTopPadding = parseInt(remToPx(tokens.spacingXSmall), 10);
const bottomPadding = parseInt(remToPx(tokens.spacingMedium), 10);
const duration = tokens.transitionMedium;

const grid = (p: TimelineItemStyledProps) => {
  const radius = p.isSmall ? 10 : 15;
  const strokeWidth = p.isSmall ? 4 : 6;
  const leftOffset = p.isSmall ? (
    (parseInt(remToPx(tokens.spacing), 10) * 2 + parseInt(remToPx(tokens.spacingXSmall), 10)) / 2 - 
    (parseInt(remToPx(tokens.spacingSmall), 10) * 2 + parseInt(remToPx(tokens.spacing), 10) * 0.25) / 2
  ) : (
    0
  );
  
  return {
    radius,
    strokeWidth,
    leftOffset,
    width: radius * 2 + strokeWidth,
    height: radius * 2 + strokeWidth,
    origin: {
      x: radius + (strokeWidth / 2),
      y: radius + (strokeWidth / 2)
    }
  };
};

const TimelineItemStyled = styled.div<TimelineItemStyledProps>`
  display: flex;
  padding-bottom: ${bottomPadding}px;
  height: ${p => (p.lineHeight ?? 0) + contentTopPadding + bottomPadding}px;
  transition: all ${duration} ease-out;

  .icon {
    display: flex;
    margin-left: ${p => grid(p).leftOffset}px;
    
    svg {
      max-width: fit-content;
      width: ${p => grid(p).width}px;
      height: ${p => (p.lineHeight ?? 0) + contentTopPadding + bottomPadding}px;
      transition: all ${duration} ease-out;

      circle {
        fill: none;
        cx: ${p => grid(p).origin.x};
        cy: ${p => grid(p).origin.y};
        r: ${p => grid(p).radius};
        stroke: ${colors.grey[400]};
        stroke-linecap: round;
        stroke-width: ${p => grid(p).strokeWidth}px;
      }

      .bg {
        stroke: ${colors.grey[400]};
      }

      .indicator {
        stroke-dasharray: ${p => 2 * Math.PI * grid(p).radius};
        stroke-dashoffset: ${p => 2 * Math.PI * (grid(p).radius * ((100 - (p.percent ?? 0)) / 100))};
        transform: rotate(-90deg);
        transform-origin: center;
        transform-box: fill-box;
      }

      rect {
        stroke: none;
        fill: ${colors.grey[400]};
        x: ${p => grid(p).origin.x - (lineWidth / 2)};
        y: ${p => grid(p).height};
        width: ${lineWidth}px;
        height: ${p => (p.lineHeight ?? 0) + contentTopPadding + bottomPadding}px;
        transition: all ${duration} ease-out;
      }

      foreignObject {
        x: ${p => grid(p).origin.x - (parseInt(remToPx(p.isSmall ? tokens.fontSize10 : tokens.fontSize14), 10) / 2)};
        y: ${p => grid(p).origin.y - (parseInt(remToPx(p.isSmall ? tokens.fontSize10 : tokens.fontSize14), 10) / 2)};
        width: ${p => p.isSmall ? tokens.fontSize10 : tokens.fontSize14};
        height: ${p => p.isSmall ? tokens.fontSize10 : tokens.fontSize14};  
        ${IconStyled} > * {
          color: ${colors.grey[400]};
          width: ${p => p.isSmall ? tokens.fontSize10 : tokens.fontSize14};
          height: ${p => p.isSmall ? tokens.fontSize10 : tokens.fontSize14};
        }
      }
    }
  }

  .timeline-item-content {
    padding-top: ${p => p.isSmall ? 0 : contentTopPadding}px;
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
        transform: ${p => p.bodyVisible ? 'rotate(-90deg)' : ''};
        transition: all ${duration} ease-out;
      }
    }
    
    ${TimelineItemBodyStyled} {
      margin-top: ${tokens.spacingXSmall};
      transform: ${p => p.bodyVisible ? 'scaleY(1)' : 'scaleY(0)'};
      transform-origin: left top;
      transition: all ${duration} ease-out;
    }
  }
`;

export default TimelineItemStyled;
