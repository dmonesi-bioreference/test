import styled from 'styled-components';

import { base, tokens } from 'styles';

const ConfirmationButtonStyled = styled.div`
  ${base}

  .confirmation-button__confirm {
    display: inline-flex;
    align-items: center;
  }

  .confirmation-button__prompt {
    margin-right: ${tokens.spacing};
    font-weight: ${tokens.fontWeightMedium};
  }

  .confirmation-button__confirm-button {
    margin-right: ${tokens.spacing};
  }
`;

export default ConfirmationButtonStyled;
