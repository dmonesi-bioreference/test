import styled from 'styled-components';

import { tokens, base } from 'styles';

const BulletItemStyled = styled.div`
  ${base}
  display: flex;

  .bullet-item__text {
    margin-left: ${tokens.spacing};
  }

  .bullet-item__text > * :not(:last-child) {
    margin-bottom: ${tokens.spacingXSmall};
  }
`;

export default BulletItemStyled;
