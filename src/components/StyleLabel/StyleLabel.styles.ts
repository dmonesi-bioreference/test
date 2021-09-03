import styled from 'styled-components';

import { tokens, base } from 'styles';

const StyleLabelStyled = styled.div`
  ${base}
  display: flex;
  align-items: flex-end;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${tokens.spacingXSmall};
  font-family: ${tokens.fontFamilyMonospace};

  .style-label__underline {
    border-bottom: dashed ${tokens.colorSecondary} ${tokens.borderWidthThick};
    width: 100%;
  }
`;

export default StyleLabelStyled;
