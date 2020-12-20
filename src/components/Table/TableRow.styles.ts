import styled from 'styled-components';
import t from '../../styles/tokens';

const TableRowStyled = styled.tr`
  td,
  th {
    border-bottom: 1px solid ${t.colorBorder};
  }
`;

export default TableRowStyled;
