import styled from 'styled-components';

import { tokens } from 'styles';

export const SettingsContent = styled.div`
  opacity: ${(props: { pending: boolean }) => (props.pending ? 0.4 : 1)};
  pointer-events: ${(props: { pending: boolean }) =>
    props.pending ? 'none' : 'default'};
  transition: 0.3s ease-in-out;
`;

export const SettingsActivity = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${tokens.spacingXLarge};
`;
