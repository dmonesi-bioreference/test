import styled from 'styled-components'

const IconStyled = styled.div`
  align-items: center;
  display: flex;

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
