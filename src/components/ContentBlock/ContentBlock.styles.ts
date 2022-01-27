import styled from 'styled-components';

import { tokens, base } from 'styles';

const ContentBlockStyled = styled.div`
  ${base};

  &.content-block--small > * :not(:last-child) {
    margin-bottom: ${tokens.spacingXxSmall};
  }

  &.content-block--large > * :not(:last-child) {
    margin-bottom: ${tokens.spacingSmall};
  }
`;

export default ContentBlockStyled;
