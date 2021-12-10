import styled from 'styled-components';

import { tokens } from 'styles';

const ContentAudioStyledDiv = styled.div`
  .pre-results-pause__details {
    color: ${tokens.colorSecondaryText};
  }

  .pre-results-pause__details > * :not(:last-child) {
    margin-bottom: ${tokens.spacing};
  }

  .pre-results-pause__actions > * :not(:last-child) {
    margin-bottom: ${tokens.spacing};
  }
`;
export default ContentAudioStyledDiv;
