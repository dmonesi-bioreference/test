import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AsyncRegionContainer = motion(styled.div`
  pointer-events: ${(props: { pending: boolean }) =>
    props.pending ? 'none' : 'default'};
`);

export const AsyncRegionActivityIndicator = motion.div;
