import styled from 'styled-components';

import { containers, tokens, base } from 'styles';

const PageSectionStyled = styled.section`
  ${base};
  margin: 0 auto;
  max-width: ${containers.maxPageWidth}px;
  width: 100%;

  &.narrow {
    max-width: ${containers.maxNarrowPageWidth}px;
  }

  &.page-section > * :not(:last-child) {
    margin-bottom: ${tokens.spacing};
  }

  .page-section__content > * :not(:last-child) {
    margin-bottom: ${tokens.spacingLarge};
  }
`;

export default PageSectionStyled;
