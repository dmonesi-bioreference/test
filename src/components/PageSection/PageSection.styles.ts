import styled from 'styled-components';

import { tokens, base } from 'styles';

const PageSectionStyled = styled.div`
  ${base}
  &.page-section > * {
    margin-bottom: ${tokens.spacingMedium};
    overflow: auto;
  }

  &.page-section :last-child {
    margin-bottom: 0;
  }

  .page-section__header {
    padding: 0 ${tokens.spacingXxSmall};
  }
`;

export default PageSectionStyled;
