import styled from 'styled-components';

import { base, tokens } from 'styles';

export interface PageBorderProps {
  loading?: boolean;
}

const PageBorder = styled.div<PageBorderProps>`
  ${base}
  height: ${tokens.borderWidthExtraThick};
  background: ${({ theme }) => theme.colors.borderHighlight};
  ${({ loading, theme }) =>
    loading &&
    `
    background: linear-gradient(
      to right,
      ${theme.colors.background} 0%,
      ${theme.colors.borderHighlight} 50%,
      ${theme.colors.background} 100%
      );
      background-size: 200% 100%;
      animation: 2s loading infinite;

      `}

  @keyframes loading {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

export default PageBorder;
