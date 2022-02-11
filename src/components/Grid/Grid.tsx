import styled from 'styled-components';

import { tokens, base } from 'styles';

export interface GridProps {
  spacing?: 'none' | 'small' | 'medium' | 'large' | 'extraLarge';
  verticalPadding?: 'none' | 'small' | 'medium' | 'large' | 'extraLarge';
}

/**
 * @description Provides vertical spacing between direct child elements and outside of a container.
 * @default spacing: 'large' verticalPadding: 'none'
 */
const Grid: React.FC<GridProps> = styled.div<GridProps>`
  ${base}
  display: grid;
  grid-template-columns: 1fr;
  ${({ spacing = 'large' }) => {
    switch (spacing) {
      case 'none':
        return `
          gap: 0;
        `;
      case 'small':
        return `
          gap: ${tokens.spacingSmall};
        `;
      case 'medium':
        return `
          gap: ${tokens.spacingMedium};
        `;
      case 'large':
        return `
          gap: ${tokens.spacingLarge};
        `;
      case 'extraLarge':
        return `
          gap: ${tokens.spacingXLarge};
        `;
    }
  }}
  ${({ verticalPadding = 'none' }) => {
    switch (verticalPadding) {
      case 'none':
        return `padding: 0`;
      case 'small':
        return `padding-top: ${tokens.spacingSmall}; padding-bottom: ${tokens.spacingSmall};`;
      case 'medium':
        return `padding-top: ${tokens.spacingMedium}; padding-bottom: ${tokens.spacingMedium};`;
      case 'large':
        return `padding-top: ${tokens.spacingLarge}; padding-bottom: ${tokens.spacingLarge};`;
      case 'extraLarge':
        return `padding-top: ${tokens.spacingXLarge}; padding-bottom: ${tokens.spacingXLarge};`;
    }
  }}
`;

export default Grid;
