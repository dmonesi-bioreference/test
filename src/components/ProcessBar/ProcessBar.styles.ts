import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const ProcessBarStyled = styled.div`
  ${base}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .process-bar__step-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }

  .process-bar__step {
    display: block;
    height: ${tokens.spacingMedium};
    width: ${tokens.spacingMedium};
    border-radius: ${tokens.borderRadiusCircle};
    z-index: 1;
  }

  .process-bar__link {
    height: ${tokens.borderWidthThick};
    width: ${tokens.spacingLarge};
    margin: 0 -${tokens.spacingXxxSmall};
  }

  .process-bar__step--complete {
    background: ${colors.powderBlue[500]};
    border: ${tokens.borderWidthThick} solid ${colors.powderBlue[500]};
  }

  .process-bar__link--complete {
    background-color: ${colors.powderBlue[700]};
  }

  .process-bar__step--incomplete {
    background: ${colors.white};
    border: ${tokens.borderWidthThick} solid ${colors.grey[400]};
  }

  .process-bar__link--incomplete {
    background-color: ${colors.grey[400]};
  }
`;

export default ProcessBarStyled;
