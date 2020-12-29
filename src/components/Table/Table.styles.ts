import styled from 'styled-components';
import t, { colors } from '../../styles/tokens';

/* stylelint-disable no-descending-specificity */

const TableStyled = styled.table`
  position: relative;
  box-sizing: border-box;
  font-family: ${t.fontFamilyBody};
  min-width: 100%;
  border-spacing: 0;
  border: 1px solid ${colors.coolGray[200]};
  border-radius: ${t.borderRadiusLarge};

  thead tr th {
    letter-spacing: 0.06rem;
    text-transform: uppercase;
    font-weight: ${t.fontWeightMedium};
    font-size: ${t.fontSize13};
    text-align: left;
    padding: ${t.spacingMedium};
    color: ${colors.coolGray[500]};
    border-bottom: 1px solid ${colors.coolGray[200]};
    background-color: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(1px);
  }

  thead tr th:first-child {
    border-top-left-radius: ${t.borderRadiusLarge};
  }

  thead tr th:last-child {
    border-top-right-radius: ${t.borderRadiusLarge};
  }

  tbody tr:last-child th:first-child,
  tbody tr:last-child td:first-child {
    border-bottom-left-radius: ${t.borderRadiusLarge};
  }

  tbody tr:last-child th:last-child,
  tbody tr:last-child td:last-child {
    border-bottom-right-radius: ${t.borderRadiusLarge};
  }

  tbody tr th,
  tbody tr td,
  tfoot tr th,
  tfoot tr td {
    min-height: 2.25rem;
    text-align: left;
    font-size: ${t.fontSize16};
    padding: ${t.spacingMedium};
    border-bottom: 1px solid ${colors.coolGray[200]};
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
    font-weight: ${t.fontWeightMedium};
  }

  tfoot tr th,
  tfoot tr td {
    border-top: 2px solid ${colors.coolGray[200]};
  }

  &.table--striped {
    tbody tr:nth-child(odd) th,
    tbody tr:nth-child(odd) td {
      background-color: ${colors.coolGray[50]};
    }
  }

  &.table--row-hover {
    tbody tr:hover th,
    tbody tr:hover td {
      background-color: ${colors.coolGray[100]};
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
