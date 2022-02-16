import styled from 'styled-components';

import TypographyStyled from 'components/Typography/Typography.styles';
import { colors, tokens } from 'styles';

const PatientBannerStyled = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: ${tokens.spacing};

  .patient-banner__background-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) =>
      theme.colors.bannerBackground || colors.white};

    svg {
      width: 90%;
      min-height: 100%;
    }
  }

  .patient-banner__content {
    position: relative;
    z-index: 1;
  }

  .patient-banner__label {
    margin-bottom: ${tokens.spacingXxSmall};

    ${TypographyStyled} {
      color: ${({ theme }) =>
        theme.colors.headerText || tokens.colorPrimaryText};
    }
  }
`;

export default PatientBannerStyled;
