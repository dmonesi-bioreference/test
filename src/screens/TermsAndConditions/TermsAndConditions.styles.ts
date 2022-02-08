import styled from 'styled-components';

import { ContentBlock } from 'components';
import { base, tokens } from 'styles';

export const TermsAndConditionsContainer = styled.div`
  ${base}

  p + p {
    margin-top: ${tokens.spacing};
  }

  li {
    list-style-type: disc;
    margin-bottom: ${tokens.spacingSmall};
  }
`;

export const Introduction = styled(ContentBlock)`
  margin-bottom: ${tokens.spacingSmall};
`;
