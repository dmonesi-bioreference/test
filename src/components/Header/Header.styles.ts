import styled from 'styled-components';

import { colors, base, tokens, containers } from 'styles';

const HeaderStyled = styled.div`
  ${base}
  height: ${containers.headerHeight};

  header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${colors.white};
    border-bottom: ${colors.grey[200]} solid 1px;
    box-shadow: 0 4px 16px -10px rgba(27, 33, 50, 0.08);
    padding: 0 ${tokens.spacingLarge};
    height: 100%;
  }

  .main-nav__toggle {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .main-nav__logo--center {
    margin: 0 auto;
  }
`;

export default HeaderStyled;
