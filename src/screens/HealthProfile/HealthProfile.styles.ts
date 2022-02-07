import styled from 'styled-components';

import ListCardStyled from 'components/ListCard/ListCard.styles';
import { base, tokens } from 'styles';

export const HealthProfileContainer = styled.div`
  ${base}

  .health-profile__download {
    justify-content: left;
  }

  ${ListCardStyled} {
    margin-bottom: ${tokens.spacingLarge};
  }
`;
