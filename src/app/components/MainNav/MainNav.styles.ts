import styled from 'styled-components';

import IconStyled from 'components/Icon/Icon.styles';
import IconButtonStyled from 'components/Icon/Icon.styles';
import { base, colors, tokens, containers } from 'styles';
import media from 'styles/media-queries';

const MainNavStyled = styled.nav`
  ${base}
  height: max-content;
  left: ${tokens.spacingSmall};
  min-height: max-content;
  position: absolute;
  right: ${tokens.spacingSmall};
  top: calc(${containers.headerHeight} + ${tokens.spacingSmall});
  z-index: ${tokens.zIndexDropdown};

  ${media.mediumUp} {
    border-radius: ${tokens.borderRadius};
    left: auto;
    right: ${tokens.spacingMedium};
    width: ${containers.maxNavWidth}px;
  }

  .menu {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${tokens.spacingXxSmall};
    justify-content: left;
    padding: ${tokens.spacingXSmall};
    list-style: none;
    background-color: ${colors.white};
    box-shadow: ${tokens.shadowXxxLarge};
    border-radius: ${tokens.borderRadius};
  }

  .menu__item {
    width: 100%;

    ${IconStyled} {
      background-color: ${colors.indigo[50]};
      border: 2px solid;
      transition: all ${tokens.transitionMedium} ease-in-out;
    }

    ${IconButtonStyled} {
      transition: all ${tokens.transitionMedium} ease-in-out;
    }

    &.home ${IconButtonStyled} {
      border-color: ${colors.violet[300]};
      color: ${colors.indigo[800]};
    }

    &:hover.home ${IconButtonStyled} {
      background-color: ${colors.violet[100]};
      border-color: ${colors.violet[800]};
      color: ${colors.indigo[900]};
    }

    &.results ${IconButtonStyled} {
      border-color: ${colors.indigo[300]};
      color: ${colors.indigo[700]};
    }

    &:hover.results ${IconButtonStyled} {
      background-color: ${colors.indigo[100]};
      border-color: ${colors.indigo[800]};
      color: ${colors.indigo[900]};
    }

    &.health-profile ${IconButtonStyled} {
      border-color: ${colors.powderBlue[300]};
      color: ${colors.powderBlue[700]};
    }

    &:hover.health-profile ${IconButtonStyled} {
      background-color: ${colors.powderBlue[100]};
      border-color: ${colors.powderBlue[800]};
      color: ${colors.powderBlue[900]};
    }

    &.resources ${IconButtonStyled} {
      border-color: ${colors.cornflowerBlue[300]};
      color: ${colors.cornflowerBlue[700]};
    }

    &:hover.resources ${IconButtonStyled} {
      background-color: ${colors.cornflowerBlue[100]};
      border-color: ${colors.cornflowerBlue[800]};
      color: ${colors.cornflowerBlue[900]};
    }

    &.settings ${IconButtonStyled} {
      border-color: ${colors.indigo[300]};
      color: ${colors.indigo[600]};
    }

    &:hover.settings ${IconButtonStyled} {
      background-color: ${colors.indigo[100]};
      border-color: ${colors.indigo[800]};
      color: ${colors.indigo[900]};
    }

    &.logout ${IconButtonStyled} {
      border-color: ${colors.red[300]};
      color: ${colors.red[700]};
    }

    &:hover.logout ${IconButtonStyled} {
      background-color: ${colors.red[100]};
      border-color: ${colors.red[800]};
      color: ${colors.red[900]};
    }
  }

  .menu__item button {
    align-items: center;
    border-radius: ${tokens.borderRadius};
    display: grid;
    gap: ${tokens.spacingSmall};
    grid-template-columns: auto 1fr;
    padding: ${tokens.spacingXSmall} ${tokens.spacingXSmall};
    text-decoration: none;
    transition: background-color ${tokens.transitionMedium} ease-in-out;
    width: 100%;

    &:hover {
      background-color: ${colors.indigo[50]};
    }
  }
`;

export default MainNavStyled;
