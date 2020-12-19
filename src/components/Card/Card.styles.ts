import styled from 'styled-components';
import t from '../GlobalStyle/01_settings/tokens';

const CardStyled = styled.div`
  border-radius: ${t.borderRadiusLarge};
  box-shadow: ${t.shadowSmall};

  .header {
    background-color: ${t.colorSecondary};
    border-top-left-radius: ${t.borderRadiusMedium};
    border-top-right-radius: ${t.borderRadiusMedium};
    padding: ${t.spacingSmall} ${t.spacingMedium};
    position: relative;
  }

  .title {
    color: ${t.colorSecondaryText};
    font-size: ${t.fontSize16};
    font-weight: ${t.fontWeightBold};
    text-transform: uppercase;
  }

  .body {
    background-color: ${t.colorWhite};
    padding: ${t.spacingSmall} ${t.spacingMedium};
  }
`;

export default CardStyled;
