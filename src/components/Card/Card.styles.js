import styled from 'styled-components';
import t from '../GlobalStyle/settings/tokens';

const CardStyled = styled.div`
  border-radius: ${t.borderRadiusLarge};
  box-shadow: ${t.shadowSmall};

  .header {
    background-color: ${t.colorPrimary};
    border-top-left-radius: ${t.borderRadiusMedium};
    border-top-right-radius: ${t.borderRadiusMedium};
    padding: ${t.spacingSmall} ${t.spacingMedium};
    position: relative;
  }

  .title {
    color: ${t.colorWhite};
    font-size: ${t.fontSizeHeadingXSmall};
    font-weight: ${t.fontWeightBold};
    text-transform: uppercase;
  }

  .body {
    background-color: ${t.colorWhite};
    padding: ${t.spacingSmall} ${t.spacingMedium};
  }
`;

export default CardStyled;
