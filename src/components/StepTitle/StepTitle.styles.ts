import styled from 'styled-components';

import { base, tokens } from 'styles';

const StepTitleStyled = styled.div`
  ${base}

  &.step-title {
    display: flex;
    justify-content: center;
  }

  .step-title__label {
    margin-bottom: ${tokens.spacingXSmall};
    padding: 0 ${tokens.spacingLarge} 0 ${tokens.spacingLarge};
  }
`;

export default StepTitleStyled;
