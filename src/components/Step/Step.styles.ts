import styled from 'styled-components';

import { colors, tokens, base } from 'styles';

const StepStyled = styled.div`
  ${base}
  .step__bar {
    border-radius: ${tokens.borderRadiusPill};
    height: ${tokens.spacingSmall};
    margin-top: ${tokens.spacingXxxSmall};
    width: 100%;
  }

  &.step--past {
    color: ${colors.grey[800]};
    display: flex;
    flex-direction: column;
    flex-basis: ${tokens.spacingXxLarge};
    .step__bar {
      background-color: ${colors.grey[700]};
    }
  }

  &.step--current {
    color: ${tokens.colorPrimaryText};
    flex: 1;
    .step__bar {
      background-color: ${tokens.colorPrimary};
    }
  }

  &.step--next {
    color: ${colors.grey[700]};
    flex: 1;
    .step__bar {
      background-color: ${colors.grey[400]};
    }
  }

  &.step--future {
    color: ${colors.grey[700]};
    display: flex;
    flex-direction: column;
    flex-basis: ${tokens.spacingXxLarge};
    .step__bar {
      background-color: ${colors.grey[400]};
    }
  }
`;

export default StepStyled;
