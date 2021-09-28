import styled from 'styled-components';

import { inputs, base } from 'styles';

const InputHelperStyled = styled.div`
  ${base}
  display: flex;

  .input__helper--text {
    margin-top: ${inputs.spacingXSmall};
  }
`;

export default InputHelperStyled;
