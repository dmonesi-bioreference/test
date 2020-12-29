import styled from 'styled-components';
import t from '../../styles/tokens';
import { base } from '../../styles/utilities/base';

const ConfirmationButtonStyled = styled.div`
  ${base}

  .confirmation-button__confirm {
    display: inline-flex;
    align-items: center;
  }

  .confirmation-button__prompt {
    margin-right: ${t.spacingMedium};
    font-weight: ${t.fontWeightMedium};
  }

  .confirmation-button__confirm-button {
    margin-right: ${t.spacingMedium};
  }
`;

export default ConfirmationButtonStyled;
