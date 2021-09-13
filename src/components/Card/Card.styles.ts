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
      width: 100%;
      object-fit: cover;
    }
  }

  .card__content {
    padding: 24px;
  }
`;

export default CardStyled;
