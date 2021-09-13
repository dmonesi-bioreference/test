import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const InformationBannerStyled = styled.div`
  ${base}
  border-radius: ${tokens.borderRadius};
  box-shadow: ${tokens.shadowXxLarge};
  padding: ${tokens.spacingSmall} ${tokens.spacing} ${tokens.spacing};

  .information-banner__content > * {
    margin-bottom: ${tokens.spacingXSmall};
  }

  .information-banner__content :last-child {
    margin-bottom: 0;
  }

  .information-banner__title {
    margin-bottom: ${tokens.spacingXSmall};
  }

  &.default {
    background: ${colors.blue[50]};
    border: ${tokens.borderWidthThin} solid ${colors.blue[600]};
    color: ${colors.blue[900]};
  }

  &.major {
    background: ${colors.blue[800]};
    border-radius: ${tokens.borderRadius};
    color: white;
  }
`;

export default InformationBannerStyled;
