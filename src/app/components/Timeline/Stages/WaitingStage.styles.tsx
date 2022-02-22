import styled from 'styled-components';

import AccordionStyled from 'components/Accordion/Accordion.styles';
import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TimelineItemStyled from 'components/TimelineItem/TimelineItem.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { base, colors } from 'styles';

interface WaitingStageStyledProps {
  linearGradient?: string;
}

const WaitingStageStyled = styled.div<WaitingStageStyledProps>`
  ${base}

  .linearGradientSvg {
    display: flex;
    position: fixed;
  }

  &.present {
    ${TimelineItemStyled} {
      .icon > svg {
        circle {
          stroke: ${colors.cornflowerBlue[100]};
        }

        .indicator {
          stroke: ${colors.cornflowerBlue[500]};
        }

        .bg {
          stroke: ${colors.cornflowerBlue[100]};
        }

        rect {
          fill: ${(p) => `url(#${p.linearGradient})`};
        }

        foreignObject {
          ${IconStyled} > * {
            color: ${colors.indigo[700]};
          }
        }
      }

      ${AccordionStyled} {
        ${ButtonStyled} {
          ${TypographyStyled} {
            color: ${colors.powderBlue[700]};
          }

          ${IconStyled} {
            color: ${colors.powderBlue[700]};
          }
        }
      }
    }
  }

  &.past {
    ${TimelineItemStyled} {
      .icon > svg {
        circle {
          stroke: ${colors.powderBlue[800]};
        }

        rect {
          fill: ${(p) => `url(#${p.linearGradient})`};
        }

        foreignObject {
          ${IconStyled} > * {
            color: ${colors.powderBlue[700]};
          }
        }
      }

      ${AccordionStyled} {
        ${ButtonStyled} {
          ${TypographyStyled} {
            color: ${colors.powderBlue[800]};
          }

          ${IconStyled} {
            color: ${colors.powderBlue[800]};
          }
        }
      }
    }
  }
`;

export default WaitingStageStyled;
