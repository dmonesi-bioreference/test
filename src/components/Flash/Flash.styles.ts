import styled from 'styled-components';
import t from '../../styles/tokens';

const FlashStyled = styled.div`
  align-items: center;
  background-color: ${t.colorBackground};
  box-shadow: ${t.shadowSubtle};
  display: flex;
  margin: 0;
  padding: ${t.spacingXSmall} ${t.spacingSmall};
  width: 100%;

  .message {
    flex-grow: 2;
  }

  .icon {
    flex-shrink: 1;
    margin-right: ${t.spacingXSmall};

    path,
    polygon {
      fill: ${t.colorWhite};
    }
  }

  .close {
    display: flex;
    cursor: pointer;
    flex-shrink: 1;

    svg {
      width: 0.8rem;
    }

    path,
    polygon {
      fill: ${t.colorOffWhite};
    }
  }

  &:hover .close {
    path,
    polygon {
      fill: ${t.colorWhite};
    }
  }

  &[data-type='success'] {
    background-color: ${t.colorSuccess};
    color: ${t.colorWhite};
  }

  &[data-type='error'] {
    background-color: ${t.colorError};
    color: ${t.colorWhite};
  }
`;

export default FlashStyled;
