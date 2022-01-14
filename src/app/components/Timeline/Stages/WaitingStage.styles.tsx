import styled from 'styled-components';


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
    width: 0px;
    height: 0px;
  }

  &.present {
    ${TimelineItemStyled} {
      .icon > svg {
        circle {
          stroke: ${colors.teal[500]};
        }

        .bg {
          stroke: ${colors.teal[50]};
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
          stroke: ${colors.teal[800]};
        }

        rect {
          fill: ${p => `url(#${p.linearGradient})`};
        }
        
        foreignObject {
          ${IconStyled} > * {
            color: ${colors.teal[700]};
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
`;

export default WaitingStageStyled;