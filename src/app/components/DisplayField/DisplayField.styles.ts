import styled from 'styled-components';

import { tokens, base } from 'styles';

const DisplayFieldStyled = styled.div`
  ${base};

  & > * :not(:last-child) {
    margin-bottom: ${tokens.spacingXxSmall};
  }
`;

export default DisplayFieldStyled;
