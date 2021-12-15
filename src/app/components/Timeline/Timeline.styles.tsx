import styled from 'styled-components';

import AvatarStyled from 'components/Avatar/Avatar.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { base, colors, tokens } from 'styles';


const TimelineStyled = styled.div`
  ${base}

  background-color: ${colors.sand[50]};

  .timeline-heading {
    display: inline-flex;
    width: 100%;
    padding: ${tokens.spacing};
    margin-bottom: calc(${tokens.spacing} * 2.5);
    background-color: ${colors.teal[700]};

    ${AvatarStyled} {
      padding-right: ${tokens.spacing};
    }

    ${TypographyStyled} {
      margin-bottom: ${tokens.spacingXxSmall};
    }
  }

  .timeline-body {
    margin-left: ${tokens.spacingLarge};
  }
`;

export default TimelineStyled;