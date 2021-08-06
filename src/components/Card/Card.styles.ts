import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const CardStyled = styled.div`
  ${base}
  background-color: ${colors.white};
  border-radius: ${tokens.borderRadiusXLarge};
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  .card__header {
    img {
      width: 100%;
    }
  }

  .card__content {
    padding: 24px;
  }
`;

export default CardStyled;
