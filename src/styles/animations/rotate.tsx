export const rotateDown = {
  variants: {
    none: { rotate: 0, },
    down: { rotate: -90 },
  },
  states: {
    down: 'down',
    none: 'none',
  },
  transition: { ease: 'easeOut' },
};
