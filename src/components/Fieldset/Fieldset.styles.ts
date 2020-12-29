import styled from 'styled-components';
import t, { inputs, labels } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';
import { visuallyHidden } from '../../styles/utilities/hidden';

const FieldsetStyled = styled.fieldset`
  ${base};
  margin: 0;
  padding: 0;
  border: none;

  .fieldset__legend {
    margin: 0 0 ${t.spacingXSmall} 0;
    padding: 0;
    flex: 0 0 auto;
    color: ${labels.color};
    font-weight: ${labels.fontWeight};
    line-height: 1.8;
  }

  .fieldset__invalid-message,
  .fieldset__help-text {
    margin-bottom: ${t.spacingXSmall};
  }

  .fieldset__help-text {
    color: ${inputs.helpColor};
  }

  &.fieldset--hide-legend {
    .fieldset__legend {
      ${visuallyHidden}
    }
  }

  &.fieldset--horizontal {
    .fieldset__positioner {
      display: flex;
    }

    .fieldset__legend {
      margin-right: ${t.spacingMedium};
    }
  }

  &.fieldset--horizontal.fieldset--apart {
    .fieldset__positioner {
      justify-content: space-between;
    }
  }

  .fieldset__inputs--horizontal {
    display: flex;

    .form-control {
      margin-right: ${t.spacingMedium};
    }

    .form-control:not(.form-control--boolean)
      + .form-control:not(.form-control--boolean) {
      margin-top: 0;
    }

    .form-control--boolean + .form-control--boolean {
      margin-top: 0 !important;
    }
  }

  .fieldset__inputs--vertical {
    .form-control:not(.form-control--boolean)
      + .form-control:not(.form-control--boolean) {
      margin-top: ${t.spacingXSmall};
    }
  }
`;

export default FieldsetStyled;
