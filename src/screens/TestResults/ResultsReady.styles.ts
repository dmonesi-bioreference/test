import styled from 'styled-components';

import IconStyled from 'components/Icon/Icon.styles';
import { colors, tokens } from 'styles';

const ResultsStyled = styled.div`
  .results-ready__description {
    margin-bottom: ${tokens.spacingLarge};
  }

  .results-ready__audio {
    display: flex;
    justify-content: center;
    margin-bottom: ${tokens.spacingLarge};
  }

  .results-ready__report-attention {
    display: flex;
    padding: ${tokens.spacing} ${tokens.spacingXxxLarge} ${tokens.spacing}
      ${tokens.spacingMedium};
    background-color: ${colors.yellow[100]};

    ${IconStyled} {
      margin-right: ${tokens.spacing};
    }
  }

  .results-ready__report-description {
    padding: ${tokens.spacing} ${tokens.spacing} ${tokens.spacingLarge}
      ${tokens.spacing};
    background-color: ${colors.yellow[50]};
  }
`;
export default ResultsStyled;
