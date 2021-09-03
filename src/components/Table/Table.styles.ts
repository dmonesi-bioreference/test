import styled from 'styled-components';

import { tokens, colors } from 'styles/tokens';

/* stylelint-disable no-descending-specificity */

const TableStyled = styled.table`
  position: relative;
  box-sizing: border-box;
  font-family: ${tokens.fontFamilyBody};
  min-width: 100%;
  border-spacing: 0;
  border: 1px solid ${colors.grey[200]};
  border-radius: ${tokens.borderRadius};

  thead tr th {
    letter-spacing: 0.06rem;
    text-transform: uppercase;
    font-weight: ${tokens.fontWeightMedium};
    font-size: ${tokens.fontSize13};
    text-align: left;
    padding: ${tokens.spacing};
    color: ${colors.grey[500]};
    border-bottom: 1px solid ${colors.grey[200]};
    background-color: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(1px);
  }

  thead tr th:first-child {
    border-top-left-radius: ${tokens.borderRadius};
  }

  thead tr th:last-child {
    border-top-right-radius: ${tokens.borderRadius};
  }

  tbody tr:last-child th:first-child,
  tbody tr:last-child td:first-child {
    border-bottom-left-radius: ${tokens.borderRadius};
  }

  tbody tr:last-child th:last-child,
  tbody tr:last-child td:last-child {
    border-bottom-right-radius: ${tokens.borderRadius};
  }

  tbody tr th,
  tbody tr td,
  tfoot tr th,
  tfoot tr td {
    min-height: 2.25rem;
    text-align: left;
    font-size: ${tokens.fontSize16};
    padding: ${tokens.spacing};
    border-bottom: 1px solid ${colors.grey[200]};
  }

  tbody tr:last-child th,
  tbody tr:last-child td,
  tfoot tr:last-child th,
  tfoot tr:last-child td {
    border-bottom: 0;
  }

  tbody tr th,
  tfoot tr th,
  tfoot tr td {
    font-weight: ${tokens.fontWeightMedium};
  }

  tfoot tr th,
  tfoot tr td {
    border-top: 2px solid ${colors.grey[200]};
  }

  &.table--striped {
    tbody tr:nth-child(odd) th,
    tbody tr:nth-child(odd) td {
      background-color: ${colors.grey[50]};
    }
  }

  &.table--row-hover {
    tbody tr:hover th,
    tbody tr:hover td {
      background-color: ${colors.grey[100]};
    }
  }

  &.table--sticky-header {
    thead tr th {
      position: sticky;
      top: -1px;
    }
  }
`;

export default TableStyled;
