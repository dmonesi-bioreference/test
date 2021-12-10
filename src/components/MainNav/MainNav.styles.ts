import styled from 'styled-components';

import { base, colors, tokens, containers } from 'styles';
import media from 'styles/media-queries';

const MainNavStyled = styled.nav`
  ${base}
  position: fixed;
  top: ${containers.headerHeight};
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  transition: opacity ${tokens.transitionFast} ease-in-out;
  z-index: ${tokens.zIndexDropdown};

  ${media.mediumUp} {
    top: calc(${containers.headerHeight} + ${tokens.spacingSmall});
    max-width: ${containers.maxNavWidth};
    height: min-content;
    box-shadow: ${tokens.shadowMedium};
    border-radius: ${tokens.borderRadius};
    right: ${tokens.spacingMedium};
  }

  .menu {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${tokens.spacingSmall};
    justify-content: left;
    padding: ${tokens.spacingSmall};
    list-style: none;
  }

  .menu__item {
    width: 100%;
  }

  .menu__item button {
    align-items: center;
    border-radius: ${tokens.borderRadius};
    display: grid;
    gap: ${tokens.spacingSmall};
    grid-template-columns: auto 1fr;
    padding: ${tokens.spacingSmall} ${tokens.spacingMedium};
    text-decoration: none;
    transition: background-color ${tokens.transitionMedium} ease-in-out;
    width: 100%;

    &:hover {
      background-color: ${colors.blue[50]};
    }
  }
`;

export default MainNavStyled;
