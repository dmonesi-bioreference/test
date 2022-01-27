import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const FooterStyled = styled.footer`
  ${base}
  background-color: ${colors.indigo[100]};
  padding: ${tokens.spacingLarge} ${tokens.spacingXLarge};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${tokens.spacingXLarge};

  .footer__info-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: ${tokens.spacingLarge};
  }
`;

export default FooterStyled;
