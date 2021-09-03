import styled from 'styled-components';

import { base, tokens } from 'styles';

const DataStyled = styled.dl`
  ${base}
  display: flex;
  flex-flow: column;
  margin: 0 0 ${tokens.spacingSmall};

  .label-value__label {
    font-size: ${tokens.fontSize13};
    font-weight: ${tokens.fontWeightLight};
  }

  .label-value__value {
    margin-left: 0;
    white-space: pre-line;
    font-weight: ${tokens.fontWeightMedium};
  }

  &.label-value--vertical {
    .label-value__label {
      margin-bottom: ${tokens.spacingXxSmall};
    }
  }

  &.label-value--reversed {
    flex-flow: column-reverse;

    .label-value__label {
      margin-top: ${tokens.spacingXxSmall};
      margin-bottom: 0;
    }
  }

  &.label-value--horizontal {
    flex-flow: row;
    align-items: center;

    .label-value__value {
      margin-left: ${tokens.spacingSmall};
    }
  }

  &.label-value--horizontal.label-value--reversed {
    flex-flow: row-reverse;
    align-items: center;
    justify-content: flex-end;

    .label-value__label {
      margin-top: 0;
    }

    .label-value__value {
      margin-right: ${tokens.spacingSmall};
      margin-left: 0;
    }
  }
`;

export default DataStyled;
