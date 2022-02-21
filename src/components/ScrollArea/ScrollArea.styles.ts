import styled from 'styled-components';

import { tokens, colors, base, containers } from 'styles';

const ScrollAreaStyled = styled.div`
  ${base}
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  min-height: ${containers.scrollArea.minHeight};
  height: ${containers.scrollArea.height};
  border-bottom: 1px solid ${colors.grey[200]};
  padding: ${tokens.spacingSmall} 0;
`;

export default ScrollAreaStyled;
