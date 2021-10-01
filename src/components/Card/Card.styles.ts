import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const CardStyled = styled.div`
  ${base}
  background-color: ${colors.white};
  border-radius: ${tokens.borderRadius};
  box-shadow: ${tokens.shadowXxLarge};
  overflow: hidden;

  .card__header {
    img {
      height: auto;
      object-fit: cover;
      width: 100%;
    }
  }

  .card__content {
    padding: 24px;
  }
`;

export default CardStyled;
