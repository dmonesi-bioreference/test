import { motion } from 'framer-motion';
import styled from 'styled-components';

import { tokens } from 'styles';

export const AsyncRegionContainer = motion(styled.div`
  pointer-events: ${(props: { pending: boolean }) =>
    props.pending ? 'none' : 'default'};
`);

export const AsyncRegionActivity = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${tokens.spacingXLarge};
`;

export const AsyncRegionActivityIndicator = motion.div;
