import styled from 'styled-components';

import AvatarStyled from 'components/Avatar/Avatar.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { base, colors, tokens, containers } from 'styles';
import media from 'styles/media-queries';

const TimelineStyled = styled.div`
  ${base}

  ${media.smallOnly} {
    margin-left: -${containers.spacingGutter};
    margin-right: -${containers.spacingGutter};
  }

  ${media.mediumUp} {
    border-radius: ${tokens.borderRadius};
    box-shadow: ${tokens.shadowMedium};
    overflow: hidden;
    background-color: ${colors.indigo[50]};
  }

  transition: all ${tokens.transitionFast} ease-in-out;

  .timeline__heading {
    display: inline-flex;
    width: 100%;
    padding: ${tokens.spacing};
    background-color: ${colors.cornflowerBlue[700]};

    ${AvatarStyled} {
      padding-right: ${tokens.spacing};
    }

    ${TypographyStyled} {
      margin-bottom: ${tokens.spacingXxSmall};
    }
  }

  .timeline__body {
    margin: 0 ${tokens.spacingLarge};
    padding: ${tokens.spacingMedium} 0;
  }
`;

export default TimelineStyled;
