import styled from 'styled-components';

import { tokens, base } from 'styles';

const AvatarStyled = styled.div`
  ${base}

  &.large > * {
    height: ${tokens.spacingXxxxLarge};
    width: ${tokens.spacingXxxxLarge};
  }

  &.small > * {
    height: calc(${tokens.spacingMedium} * 2);
    width: calc(${tokens.spacingMedium} * 2);
  }

  &.circular > * {
    border-radius: ${tokens.borderRadiusCircle};
  }

  &.square > * {
    border-radius: ${tokens.borderRadius};
  }
`;

export default AvatarStyled;
