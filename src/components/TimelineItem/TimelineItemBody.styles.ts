import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import { tokens } from 'styles';

const TimelineItemBodyStyled = styled.div`
  ${ButtonStyled} {
    margin-top: ${tokens.spacingXSmall};
  }

  ${ButtonStyled} > * {
    text-decoration: underline;
  }
`;

export default TimelineItemBodyStyled;
