import styled from 'styled-components';
import t from '../../styles/tokens';
import { base } from '../../styles/utilities/base';

const DataStyled = styled.dl`
  ${base}
  display: flex;
  flex-flow: column;
  margin: 0 0 ${t.spacingSmall};

  .label-value__label {
    font-size: ${t.fontSize13};
    font-weight: ${t.fontWeightLight};
  }

  .label-value__value {
    margin-left: 0;
    white-space: pre-line;
    font-weight: ${t.fontWeightMedium};
  }

  &.label-value--vertical {
    .label-value__label {
      margin-bottom: ${t.spacingXxxSmall};
    }
  }

  &.label-value--reversed {
    flex-flow: column-reverse;

    .label-value__label {
      margin-top: ${t.spacingXxxSmall};
      margin-bottom: 0;
    }
  }

  &.label-value--horizontal {
    flex-flow: row;
    align-items: center;

    .label-value__value {
      margin-left: ${t.spacingXSmall};
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
      margin-right: ${t.spacingXSmall};
      margin-left: 0;
    }
  }
`;

export default DataStyled;
