import styled from 'styled-components';

import { base, tokens } from 'styles';

const SubTitleStyled = styled.div`
  ${base};

  &.sub-title {
    display: flex;
    justify-content: center;
    padding: ${tokens.spacing} 0;
  }

  .sub-title__label {
    margin-bottom: ${tokens.spacingXSmall};
    padding: 0 ${tokens.spacingLarge} 0 ${tokens.spacingLarge};
  }
`;

export default SubTitleStyled;
