import styled from 'styled-components';

import { base, tokens } from 'styles';

const MessageStyled = styled.div`
  ${base}
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0;
  font-size: ${tokens.fontSize14};

  &.message--info {
    color: ${tokens.colorSecondaryText};
  }

  &.message--success {
    color: ${tokens.colorSuccessText};
  }

  &.message--warning {
    color: ${tokens.colorWarningText};
  }

  &.message--danger {
    color: ${tokens.colorDangerText};
  }

  .message__icon {
    display: flex;
    align-items: center;
    margin-right: ${tokens.spacingXxxSmall};
    font-size: ${tokens.fontSize18};
  }
`;

export default MessageStyled;
