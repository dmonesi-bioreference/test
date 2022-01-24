import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TimelineItemStyled from 'components/TimelineItem/TimelineItem.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { base, colors } from 'styles';

const AfterAppointmentStageStyled = styled.div`
  ${base}
  display: flex;

  &.present {
    ${TimelineItemStyled} {
      .icon > svg {
        circle {
          stroke: ${colors.powderBlue[500]};
        }

        foreignObject > * {
          color: ${colors.indigo[700]};
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

  &.future {
    ${TimelineItemStyled} {
      .icon > svg {
        color: ${colors.violet[600]};

        circle {
          stroke: ${colors.violet[400]};
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

export default AfterAppointmentStageStyled;
