import styled from 'styled-components';

import { base, hidden, colors, tokens } from 'styles';

const AlertStyled = styled.div`
  ${base}
  display: flex;
  align-items: stretch;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey[200]};
  border-top-width: 3px;
  border-radius: ${tokens.borderRadiusMedium};
  font-size: ${tokens.fontSize14};
  line-height: 1.6;
  color: ${tokens.colorSecondaryText};
  opacity: 0;
  transform: scale(0.9);
  transition: ${tokens.transitionMedium} opacity ease,
    ${tokens.transitionMedium} transform ease;

  &:not(.alert--visible) {
    ${hidden}
  }

  &.alert--open {
    opacity: 1;
    transform: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: ${tokens.fontSize24};

    > * {
      margin-left: ${tokens.spacingLarge};
    }
  }

  &.alert--info {
    border-top-color: ${tokens.colorSecondary};

    .alert__icon {
      color: ${tokens.colorSecondary};
    }
  }

  &.alert--success {
    border-top-color: ${tokens.colorSuccess};

    .alert__icon {
      color: ${tokens.colorSuccess};
    }
  }

  &.alert--warning {
    border-top-color: ${tokens.colorWarning};

    .alert__icon {
      color: ${tokens.colorWarning};
    }
  }

  &.alert--danger {
    border-top-color: ${tokens.colorDanger};

    .alert__icon {
      color: ${tokens.colorDanger};
    }
  }

  .alert__message {
    flex: 1 1 auto;
    padding: ${tokens.spacingLarge};
    overflow: hidden;
  }

  .alert__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: ${tokens.fontSize18};
    padding-right: ${tokens.spacingMedium};
  }
`;

export default AlertStyled;
