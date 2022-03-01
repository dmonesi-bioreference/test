import styled from 'styled-components';

import { Container } from 'components/Container';
import { tokens } from 'styles';

const PageSectionStyled = styled(Container)`
  .page-section__header {
    margin-bottom: ${tokens.spacing};
  }
`;

export default PageSectionStyled;
