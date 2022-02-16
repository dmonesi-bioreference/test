import styled from 'styled-components';

import { tokens, base } from 'styles';

const ActionGroupStyled = styled.div`
  ${base};
  display: flex;
  flex-direction: column;
  align-items: center;

  &.narrow {
    max-width: 30rem;
  }

  &.top-padding {
    margin-top: ${tokens.spacingXLarge};
  }

  & > .button :not(:last-child) {
    margin-bottom: ${tokens.spacingSmall};
  }

  .button--link {
    margin-top: ${tokens.spacingSmall};
  }
`;

export default ActionGroupStyled;
