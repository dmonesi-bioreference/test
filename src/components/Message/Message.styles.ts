import styled from 'styled-components';
import t from '../GlobalStyle/01_settings/tokens';

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
    color: ${t.colorErrorText};

    path,
    polygon {
      fill: ${t.colorErrorText};
    }
  }

  &[data-type='success'] {
    color: ${t.colorSuccessText};

    path,
    polygon {
      fill: ${t.colorSuccessText};
    }
  }

  &[data-type='warning'] {
    color: ${t.colorWarningText};

    path,
    polygon {
      fill: ${t.colorWarningText};
    }
  }
`;

export default MessageStyled;
