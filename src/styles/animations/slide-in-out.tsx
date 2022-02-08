export const slideInOut = {
  variants: {
    enter: { x: '110%', opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: '-110%', opacity: 0 },
  },
  states: {
    enter: 'enter',
    center: 'center',
    exit: 'exit',
  },
  transition: {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.4 },
  },
};
