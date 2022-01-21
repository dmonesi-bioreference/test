import styled from 'styled-components';

import { base, tokens } from 'styles';

const ReturnLinkStyled = styled.div`
  ${base}
  padding-bottom: ${tokens.spacingXLarge};

  .return-link__label {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;

export default ReturnLinkStyled;
