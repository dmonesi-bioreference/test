import styled from 'styled-components';

import LinkCardStyles from 'components/LinkCard/LinkCard.styles';
import { base, tokens } from 'styles';

const InternalLinkCardsStyled = styled.div`
  ${base}

  ${LinkCardStyles} {
    margin-bottom: ${tokens.spacingLarge};

    .label {
      margin-bottom: ${tokens.spacingSmall};
    }
  }
`;

export default InternalLinkCardsStyled;
