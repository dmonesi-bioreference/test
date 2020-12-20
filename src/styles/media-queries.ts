const mediaQuery = (minWidth: number) => `@media (min-width: ${minWidth / 16}em)`;
const minMaxQuery = (minWidth: number, maxWidth: number) =>
  `@media (min-width: ${minWidth / 16}em) and (max-width: ${maxWidth / 16}em)`;

const media = {
  smallOnly: minMaxQuery(0, 687),
  mediumUp: mediaQuery(688),
  mediumOnly: minMaxQuery(688, 879),
  large: mediaQuery(880),
};

export default media;
