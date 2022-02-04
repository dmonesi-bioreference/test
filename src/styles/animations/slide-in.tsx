export const slideInDown = {
  variants: {
    hidden: { opacity: 0, scaleY: 0, originY: 0 },
    visible: { opacity: 1, scaleY: 1 },
  },
  states: {
    hidden: 'hidden',
    visible: 'visible',
    animate: 'visible',
  },
  transition: { ease: 'easeOut' },
};

export const slideInRight = {
  variants: {
    hidden: { opacity: 0, y: '-50%' },
    visible: { opacity: 1, y: 0 },
  },
  states: {
    hidden: 'hidden',
    visible: 'visible',
    animate: 'visible',
  },
  transition: { ease: 'easeOut' },
};
