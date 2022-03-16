import styled from 'styled-components';

import { tokens, base, colors } from 'styles';

const StyleLabelStyled = styled.div`
  ${base}
  display: flex;
  align-items: flex-end;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${tokens.spacingXxSmall};
  font-family: ${tokens.fontFamilyMonospace};

  .style-label__underline {
    border-bottom: dashed ${colors.yellow[400]} ${tokens.borderWidthThin};
    width: 100%;
  }
`;

export default StyleLabelStyled;
