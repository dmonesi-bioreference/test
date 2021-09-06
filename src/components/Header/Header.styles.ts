import styled from 'styled-components';

import { colors, base, tokens } from 'styles';

const HeaderStyled = styled.div`
  ${base}
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.white};
  border-bottom: ${colors.grey[200]} solid 1px;
  box-shadow: 0 4px 16px -10px rgba(27, 33, 50, 0.08);
  height: ${tokens.spacingXxxLarge};
  padding: 0 ${tokens.spacingLarge};
`;

export default HeaderStyled;
