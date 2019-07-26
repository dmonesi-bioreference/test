import styled from 'styled-components';
import t from '../GlobalStyle/01_settings/tokens';

const TableRowStyled = styled.tr`
  td {
    border-bottom: 1px solid ${t.colorSecondary};
    padding: ${t.spacingSmall} 0;
  }

  &:last-child td {
    border-bottom: 0;
  }

  td:last-child {
    text-align: right;
  }
`;

export default TableRowStyled;
