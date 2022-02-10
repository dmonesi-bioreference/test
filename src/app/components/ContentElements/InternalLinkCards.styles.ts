import styled from 'styled-components';

import ContentCardStyles from 'components/ContentCard/ContentCard.styles';
import { base, tokens } from 'styles';

const InternalLinkCardsStyled = styled.div`
  ${base}

  ${ContentCardStyles} {
    margin-bottom: ${tokens.spacingLarge};

    .label {
      margin-bottom: ${tokens.spacingSmall};
    }
  }
`;

export default InternalLinkCardsStyled;
