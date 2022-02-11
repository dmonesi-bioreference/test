import styled from 'styled-components';

import { containers, base } from 'styles';

const ContainerStyled = styled.div`
  ${base}
  max-width: ${containers.maxPageWidth}px;

  &.narrow {
    max-width: ${containers.maxNarrowPageWidth}px;
  }

  &.centered {
    margin: 0 auto;
  }
`;

export default ContainerStyled;
