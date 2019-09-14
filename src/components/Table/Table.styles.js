import styled from 'styled-components'
import t from '../GlobalStyle/01_settings/tokens'

const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;

  caption {
    text-align: left;
    padding: ${t.spacingSmall};
    font-weight: ${t.fontWeightSemibold};
    color: ${t.colorBlackSecondary};
  }

  td,
  th {
    padding: ${t.spacingXxSmall} ${t.spacingSmall};
  }

  thead th {
    background-color: ${t.colorSecondary};
    border: 0;
    color: ${t.colorWhite};
    text-align: left;
    font-weight: ${t.fontWeightSemibold};
  }

  tbody th {
    text-align: left;
    font-weight: ${t.fontWeightSemibold};
  }
`

export default TableStyled
