import styled from 'styled-components';

import { inputs, base } from 'styles';

const InputHelperStyled = styled.div`
  ${base}
  display: flex;
  align-items: center;
  position: relative;
  margin-top: ${inputs.spacingXSmall};
`;

export default InputHelperStyled;
