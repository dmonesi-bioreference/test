import styled from 'styled-components';

import { tokens, base } from 'styles';

export interface GridProps {
  spacing?: 'small' | 'medium' | 'large' | 'extraLarge';
  verticalPadding?: 'small' | 'medium' | 'large' | 'extraLarge';
}

const Grid: React.FC<GridProps> = styled.div<GridProps>`
  ${base}
  display: grid;
  grid-template-columns: 1fr;
  ${({ spacing }) => {
    switch (spacing) {
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
      default:
        return `
          gap: ${tokens.spacingLarge};
        `;
    }
  }}
  ${({ verticalPadding }) => {
    switch (verticalPadding) {
      case 'small':
        return `padding-top: ${tokens.spacingSmall}; padding-bottom: ${tokens.spacingSmall};`;
      case 'medium':
        return `padding-top: ${tokens.spacingMedium}; padding-bottom: ${tokens.spacingMedium};`;
      case 'large':
        return `padding-top: ${tokens.spacingLarge}; padding-bottom: ${tokens.spacingLarge};`;
      case 'extraLarge':
        return `padding-top: ${tokens.spacingXLarge}; padding-bottom: ${tokens.spacingXLarge};`;
      default:
        return `padding: 0`;
    }
  }}
`;

export default Grid;
