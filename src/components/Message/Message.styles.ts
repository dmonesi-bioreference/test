import styled from 'styled-components';
import t from '../../styles/tokens';
import { base } from '../../styles/utilities/base';

const MessageStyled = styled.div`
  ${base}
  display: inline-flex;
  align-items: center;
  padding: 0.15rem ${t.spacingXxxSmall};
  font-size: ${t.fontSize14};

  &.message--info {
    color: ${t.colorSecondaryText};
  }

  &.message--success {
    color: ${t.colorSuccessText};
  }

  &.message--warning {
    color: ${t.colorWarningText};
  }

  &.message--danger {
    color: ${t.colorDangerText};
  }

  .message__icon {
    display: flex;
    align-items: center;
    margin-right: ${t.spacingXxxSmall};
    font-size: ${t.fontSize18};
  }
`;

export default MessageStyled;
