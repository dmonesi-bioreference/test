import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const IconStyled = styled.div`
  ${base};
  fill: currentColor;
  display: grid;
  width: fit-content;
  height: fit-content;

  &.default {
    color: ${colors.grey[700]};
  }

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
    width: ${tokens.spacingLarge};
  }

  &.large {
    width: ${tokens.spacingXLarge};
  }

  &.encircled {
    background-color: ${colors.grey[300]};
    padding: ${tokens.spacingXSmall};
    border-radius: ${tokens.borderRadiusCircle};

    .default {
      color: ${colors.grey[700]};
    }

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
