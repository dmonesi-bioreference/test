import styled from 'styled-components';

import { base, tokens } from 'styles';

type LoadingState = 'loading' | 'loaded';
export interface PageBorderProps {
  /** Options are 'loading' or 'loaded' */
  loading?: LoadingState;
}

/**
 * @description Provides top border on PageLayout, indicating loading state when applicable
 * @param loading The loading state of the page, 'loading' or 'loaded'
 * @note State is passed in string form (non-boolean form), as it is passed to html attributes/styled components
 */
const PageBorder = styled.div<PageBorderProps>`
  ${base}
  height: ${tokens.borderWidthExtraThick};
  background: ${({ theme }) => theme.colors.borderHighlight};
  ${({ loading, theme }) =>
    loading === 'loading' &&
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
