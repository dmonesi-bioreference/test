import styled from 'styled-components';
import t from '../../styles/tokens';

const ConfirmationButtonStyled = styled.div`
  .confirmation--prompt {
    display: inline-grid;
    grid-auto-flow: column;
    grid-gap: ${t.spacingMedium};
    align-items: center;
    border-radius: ${t.borderRadiusLarge};
    font-weight: ${t.fontWeightSemibold};
  }
`;

export default ConfirmationButtonStyled;
