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

export const HealthProfileContent = styled.div`
  opacity: ${(props: { pending: boolean }) => (props.pending ? 0.4 : 1)};
  pointer-events: ${(props: { pending: boolean }) =>
    props.pending ? 'none' : 'default'};
  transition: 0.3s ease-in-out;
`;

export const HealthProfileActivity = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${tokens.spacingXLarge};
`;
