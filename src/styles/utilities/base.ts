import { css } from 'styled-components';
import tokens from '../tokens';

export const base = css`
  display: block;
  box-sizing: border-box;
  font-family: ${tokens.fontFamilyBody};

  & *,
  & *::before,
  & *::after {
    box-sizing: border-box;
  }
`;
