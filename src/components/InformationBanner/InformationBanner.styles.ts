import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const InformationBannerStyled = styled.div`
  ${base}
  border-radius: ${tokens.borderRadius};
  box-shadow: ${tokens.shadowXxLarge};
  padding: ${tokens.spacingSmall} ${tokens.spacing} ${tokens.spacing};
  border: ${tokens.borderWidthThin} solid ${colors.indigo[600]};

  .information-banner__content > * {
    margin-bottom: ${tokens.spacingXSmall};
  }

  .information-banner__content :last-child {
    margin-bottom: 0;
  }

  .information-banner__title {
    margin-bottom: ${tokens.spacingXSmall};
  }

  &.information-banner--default {
    background: ${colors.indigo[50]};
    color: ${colors.indigo[900]};
  }

  &.information-banner--tooltip {
    max-width: 300px;
    background: ${colors.indigo[800]};
    color: white;
    border: none;
  }

  &.information-banner--error {
    background: ${colors.red[50]};
    border-color: ${colors.red[400]};
  }
`;

export default InformationBannerStyled;
