export const fadeWhileWorking = {
  variants: {
    working: { opacity: 0.5 },
    idle: { opacity: 1, y: 0 },
  },
  states: {
    working: 'working',
    idle: 'idle',
  },
  transition: { ease: 'easeInOut' },
};
