import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import { tokens, base } from 'styles';

const CarouselStyled = styled.div`
  ${base}

  .carousel__external-control {
    display: flex;
    justify-content: space-between;
    margin-top: ${tokens.spacingMedium};

    ${ButtonStyled} {
      .button__label {
        display: flex;
        align-items: center;
        gap: ${tokens.spacingXSmall};
      }
    }
  }

  .slider {
    display: grid;
    gap: ${tokens.spacing};
  }

  .slide {
    text-align: initial;
  }
`;

export default CarouselStyled;
