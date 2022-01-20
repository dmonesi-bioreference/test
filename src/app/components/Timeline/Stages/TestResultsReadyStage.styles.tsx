import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TimelineItemStyled from 'components/TimelineItem/TimelineItem.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { base, colors } from 'styles';

interface TestResultsReadyStageStyledProps {
  linearGradient?: string;
}

const TestResultsReadyStageStyled = styled.div<TestResultsReadyStageStyledProps>`
  ${base}

  .linearGradientSvg {
    display: flex;
    width: 0;
    height: 0;
  }

  &.present {
    ${TimelineItemStyled} {
      .icon > svg {
        circle {
          stroke: ${colors.powderBlue[500]};
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

      .timeline-item-content {
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
          stroke: ${colors.violet[900]};
        }

        rect {
          fill: ${(p) => `url(#${p.linearGradient})`};
        }

        foreignObject {
          ${IconStyled} > * {
            color: ${colors.violet[700]};
          }
        }
      }

      .timeline-item-content {
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

  &.future {
    ${TimelineItemStyled} {
      .icon > svg {
        circle {
          stroke: ${colors.violet[400]};
        }

        rect {
          fill: ${(p) => `url(#${p.linearGradient})`};
        }

        foreignObject {
          ${IconStyled} > * {
            color: ${colors.violet[600]};
          }
        }
      }

      .timeline-item-content {
        ${ButtonStyled} {
          ${TypographyStyled} {
            color: ${colors.violet[700]};
          }

          ${IconStyled} {
            color: ${colors.violet[700]};
          }
        }
      }
    }
  }
`;

export default TestResultsReadyStageStyled;
