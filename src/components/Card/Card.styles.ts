import styled from 'styled-components';
import t, { colors } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';

const CardStyled = styled.div`
  ${base}
  background-color: ${colors.white};
  border: 1px solid ${colors.grey[200]};
  border-radius: ${t.borderRadiusLarge};

  .card__header {
    padding: ${t.spacingLarge};
    border-bottom: 1px solid ${colors.grey[200]};
  }

  .card__title {
    color: ${t.colorSecondaryText};
    font-size: ${t.fontSize18};
    font-weight: ${t.fontWeightMedium};
  }

  .card__body {
    padding: ${t.spacingMedium} ${t.spacingLarge};
  }
`;

export default CardStyled;
