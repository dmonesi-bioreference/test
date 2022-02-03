import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { colors, tokens, parseRemToPx } from 'styles';
import media from 'styles/media-queries';

import { TimelineItemProps } from './TimelineItem';
import TimelineItemBodyStyled from './TimelineItemBody.styles';

interface TimelineItemStyledProps extends TimelineItemProps {
  bodyVisible: boolean;
  contentHeight: number;
  figure: {
    radius: number;
    lineWidth: number;
    iconStrokeWidth: number;
    diameter: number;
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
const verticalContentPadding = parseRemToPx(tokens.spacing);
const spaceBetweenItems = parseRemToPx(tokens.spacing);

const TimelineItemStyled = styled.div<TimelineItemStyledProps>`
  display: grid;
  grid-template-columns: 35px auto;
  width: 100%;

  .icon {
    display: flex;
    margin-left: ${(p) => (p.isSmall ? smallLeftOffset : 0)}px;

    svg {
      max-width: fit-content;
      width: ${(p) => p.figure.diameter}px;
      height: ${(p) =>
        p.bodyVisible
          ? p.contentHeight + spaceBetweenItems + verticalContentPadding * 2
          : p.contentHeight + spaceBetweenItems}px;
      transition: all ${tokens.transitionXFast} ease-out;

      circle {
        fill: none;
        stroke-linecap: round;
        stroke-width: ${(p) => p.figure.iconStrokeWidth}px;
      }

      .bg {
        stroke: ${colors.grey[400]};
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
    margin-left: ${tokens.spacing};
    border-radius: ${tokens.borderRadius};
    height: min-content;
    max-width: 100%;

    ${media.smallOnly} {
      box-shadow: ${tokens.shadowSmall};
      background-color: ${colors.white};
    }

    ${media.mediumUp} {
      box-shadow: ${tokens.shadowXSmall};
      background-color: ${colors.white};
    }

    ${ButtonStyled}.header__link {
      justify-content: space-between;
      text-decoration: none;
      display: inline-flex;
      padding: ${verticalContentPadding}px;
      width: 100%;

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
        transition: all ${tokens.transitionFast} ease-out;
        transform: ${(p) => (p.bodyVisible ? 'rotate(-90deg)' : '')};
      }
    }

    ${TimelineItemBodyStyled} {
      margin: ${verticalContentPadding}px;
      margin-top: 0;
    }
  }
`;

export default TimelineItemStyled;
