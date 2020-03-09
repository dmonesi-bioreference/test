import styled from 'styled-components'

const IconStyled = styled.div`
  display: flex;
  align-items: center;

  span,
  div {
    display: flex;
    align-items: center;
    transform: rotate(${props => props.rotate}deg);

    svg {
      width: 19px;
    }
  }
`

export default IconStyled
