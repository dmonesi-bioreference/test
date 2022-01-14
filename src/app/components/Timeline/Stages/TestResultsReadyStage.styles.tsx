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
    width: 0px;
    height: 0px;
  }


  &.present {
    ${TimelineItemStyled} {
      .icon > svg {
        circle {
          stroke: ${colors.teal[500]};
        }

        rect {
          fill: ${p => `url(#${p.linearGradient})`};
        }

        foreignObject {
          ${IconStyled} > * {
            color: ${colors.blue[700]};
          }
        }
      }

      .timeline-item-content {
        ${ButtonStyled} {
          ${TypographyStyled} {
            color: ${colors.teal[700]};
          }

          ${IconStyled} {
            color: ${colors.teal[700]};
          }
        }
      }
    }
  }

  &.past {
    ${TimelineItemStyled} {
      .icon > svg {
        circle {
          stroke: ${colors.sand[900]};
        }

        rect {
          fill: ${p => `url(#${p.linearGradient})`};
        }

        foreignObject {
          ${IconStyled} > * {
            color: ${colors.sand[700]};
          }
        }
      }

      .timeline-item-content {
        ${ButtonStyled} {
          ${TypographyStyled} {
            color: ${colors.teal[800]};
          }

          ${IconStyled} {
            color: ${colors.teal[800]};
          }
        }
      }
    }
  }

  &.future {
    ${TimelineItemStyled} {
      .icon > svg {
        circle {
          stroke: ${colors.sand[400]};
        }

        rect {
          fill: ${p => `url(#${p.linearGradient})`};
        }

        foreignObject {
          ${IconStyled} > * {
            color: ${colors.sand[600]};
          }
        }
      }

      .timeline-item-content {
        ${ButtonStyled} {
          ${TypographyStyled} {
            color: ${colors.sand[700]};
          }

          ${IconStyled} {
            color: ${colors.sand[700]};
          }
        }
      }
    }
  }
`;

export default TestResultsReadyStageStyled;