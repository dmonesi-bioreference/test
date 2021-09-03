import styled from 'styled-components';

import { base, tokens } from 'styles';

const ProgressBarStyled = styled.div`
  ${base}
  display: flex;
  flex-direction: row;
  gap: ${tokens.spacingXxSmall};
`;

export default ProgressBarStyled;
