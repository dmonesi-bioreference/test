import styled from 'styled-components';

import AccordionStyled, { AccordionBodyStyled, AccordionHeaderStyled } from 'components/Accordion/Accordion.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { colors, tokens, parseRemToPx } from 'styles';
import media from 'styles/media-queries';

import { TimelineItemProps } from './TimelineItem';

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

  ${AccordionStyled} {
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

    ${AccordionHeaderStyled} {
      background-color: transparent;

      ${TypographyStyled} {
        color: ${colors.grey[400]};
      }
    }

    ${AccordionBodyStyled} {
      background-color: transparent;
      padding-top: 0;
    }
  }
`;

export default TimelineItemStyled;
