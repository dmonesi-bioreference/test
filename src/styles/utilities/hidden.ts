import { css } from 'styled-components';

export const hidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  pointer-events: none;
  visibility: hidden; /* prevent tab stops and screen reader discovery */
`;

export const visuallyHidden = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
