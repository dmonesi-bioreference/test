import styled from 'styled-components'
import t from '../GlobalStyle/01_settings/tokens'

const MessageStyled = styled.div`
  color: ${t.colorBlack};
  display: block;
  line-height: ${t.lineHeightText};

  span {
    align-content: center;
    display: inline-flex;
    padding: 0.15rem ${t.spacingXxxSmall};
    border-radius: ${t.borderRadiusMedium};
  }

  svg {
    margin-top: 0.1rem;
    margin-right: ${t.spacingXxxSmall};
    transform: scale(0.8);
  }

  &[data-type='error'] {
    color: ${t.colorError};

    path,
    polygon {
      fill: ${t.colorError};
    }
  }

  &[data-type='success'] {
    color: ${t.colorSuccess};

    path,
    polygon {
      fill: ${t.colorSuccess};
    }
  }

  &[data-type='warning'] {
    color: ${t.colorWarning};

    path,
    polygon {
      fill: ${t.colorWarning};
    }
  }
`

export default MessageStyled
