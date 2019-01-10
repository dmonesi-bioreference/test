import styled from 'styled-components';
import t from '../GlobalStyle/settings/tokens';

const MessageStyled = styled.div`
  align-content: center;
  color: ${t.colorBlack};
  display: flex;

  svg {
    margin-right: ${t.spacingXxSmall};
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
`;

export default MessageStyled;
