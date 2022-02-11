import styled from 'styled-components';

import { base, tokens } from 'styles';

const ListCardStyled = styled.div`
  ${base};
  display: flex;
  flex-direction: column;

  .list-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.headerText || tokens.colorPrimaryText};
    padding: ${tokens.spacing};
  }

  .list-card__heading {
    display: flex;
    align-items: center;
  }

  .list-card__heading > * :not(:last-child) {
    margin-right: ${tokens.spacingXSmall};
  }
`;

export default ListCardStyled;
