import styled from 'styled-components'
import media from '../GlobalStyle/01_settings/media-queries'

const CardGridStyled = styled.div`
  align-items: stretch;
  display: grid;
  grid-gap: 2rem;

  & + & {
    margin-top: 2rem;
  }

  &[data-columns='1'] {
    grid-template-columns: 1fr;
  }

  &[data-columns='2'] {
    grid-template-columns: 1fr;

    ${media.mediumUp} {
      grid-template-columns: 1fr 1fr;
    }
  }

  &[data-columns='3'] {
    grid-template-columns: 1fr;

    ${media.mediumUp} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export default CardGridStyled
