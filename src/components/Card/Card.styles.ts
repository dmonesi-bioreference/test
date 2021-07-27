import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const CardStyled = styled.div`
  ${base}
  background-color: ${colors.white};
  border: 1px solid ${colors.grey[200]};
  border-radius: ${tokens.borderRadiusLarge};

  .card__header {
    padding: ${tokens.spacingLarge};
    border-bottom: 1px solid ${colors.grey[200]};
  }

  .card__title {
    color: ${tokens.colorSecondaryText};
    font-size: ${tokens.fontSize18};
    font-weight: ${tokens.fontWeightMedium};
  }

  .card__body {
    padding: ${tokens.spacingMedium} ${tokens.spacingLarge};
  }
`;

export default CardStyled;
