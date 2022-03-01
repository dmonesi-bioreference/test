import styled from 'styled-components';

import { tokens, base } from 'styles';

export interface GridProps {
  spacing?:
    | 'none'
    | 'small'
    | 'base'
    | 'medium'
    | 'large'
    | 'extraLarge'
    | 'extraExtraLarge';
  verticalPadding?:
    | 'none'
    | 'small'
    | 'medium'
    | 'large'
    | 'extraLarge'
    | 'extraExtraLarge';
}

/**
 * @description Provides vertical spacing between direct child elements and outside of a container.
 * @default spacing: 'large' verticalPadding: 'none'
 */
const Grid: React.FC<GridProps> = styled.div<GridProps>`
  ${base};
  display: flex;
  flex-direction: column;
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
      case 'base':
        return `
          gap: ${tokens.spacing};
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
      case 'extraExtraLarge':
        return `
          gap: ${tokens.spacingXxLarge};
        `;
    }
  }}
  ${({ verticalPadding = 'none' }) => {
    switch (verticalPadding) {
      case 'none':
        return `padding-top: 0; padding-bottom: 0`;
      case 'small':
        return `padding-top: ${tokens.spacingSmall}; padding-bottom: ${tokens.spacingSmall};`;
      case 'medium':
        return `padding-top: ${tokens.spacingMedium}; padding-bottom: ${tokens.spacingMedium};`;
      case 'large':
        return `padding-top: ${tokens.spacingLarge}; padding-bottom: ${tokens.spacingLarge};`;
      case 'extraLarge':
        return `padding-top: ${tokens.spacingXLarge}; padding-bottom: ${tokens.spacingXLarge};`;
      case 'extraExtraLarge':
        return `padding-top: ${tokens.spacingXxLarge}; padding-bottom: ${tokens.spacingXxLarge};`;
    }
  }}
`;

export default Grid;
