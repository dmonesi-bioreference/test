import { remToPx } from 'polished';
import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const IconStyled = styled.div`
  ${base};
  fill: currentColor;
  display: grid;
  width: fit-content;
  height: fit-content;

  &.primary {
    color: ${tokens.colorPrimary};
  }

  &.danger {
    color: ${tokens.colorDanger};
  }

  &.white {
    color: ${colors.white};
  }

  &.small {
    width: ${remToPx(tokens.spacingLarge)};
  }

  &.large {
    width: ${remToPx(tokens.spacingXLarge)};
  }

  &.encircled {
    background-color: ${colors.grey[100]};
    padding: ${tokens.spacingXSmall};
    border-radius: ${tokens.borderRadiusCircle};

    .primary {
      color: ${tokens.colorPrimary};
    }

    .danger {
      color: ${tokens.colorDanger};
    }

    .white {
      color: ${colors.white};
    }

    .small {
      width: ${tokens.spacingLarge};
    }

    .large {
      width: ${tokens.spacingXLarge};
    }
  }
`;

export default IconStyled;
