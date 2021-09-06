import styled from 'styled-components';

import { colors, tokens } from 'styles';

const LogoStyled = styled.div<{ type?: string }>`
  svg {
    color: ${(props) => {
      return props.type === 'dark' ? tokens.colorPrimary : colors.white;
    }};
  }
`;

export default LogoStyled;
