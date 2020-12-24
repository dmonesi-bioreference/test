import styled from 'styled-components';
import t, { colors } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';
import { hidden } from '../../styles/utilities/hidden';

const AlertStyled = styled.div`
  ${base}
  display: flex;
  align-items: stretch;
  background-color: ${colors.white};
  border: 1px solid ${colors.coolGray[200]};
  border-top-width: 3px;
  border-radius: ${t.borderRadiusMedium};
  font-size: ${t.fontSize14};
  line-height: 1.6;
  color: ${t.colorSecondaryText};
  opacity: 0;
  transform: scale(0.9);
  transition: ${t.transitionMedium} opacity ease,
    ${t.transitionMedium} transform ease;

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
    font-size: ${t.fontSize24};

    > * {
      margin-left: ${t.spacingLarge};
    }
  }

  &.alert--info {
    border-top-color: ${t.colorSecondary};

    .alert__icon {
      color: ${t.colorSecondary};
    }
  }

  &.alert--success {
    border-top-color: ${t.colorSuccess};

    .alert__icon {
      color: ${t.colorSuccess};
    }
  }

  &.alert--warning {
    border-top-color: ${t.colorWarning};

    .alert__icon {
      color: ${t.colorWarning};
    }
  }

  &.alert--danger {
    border-top-color: ${t.colorDanger};

    .alert__icon {
      color: ${t.colorDanger};
    }
  }

  .alert__message {
    flex: 1 1 auto;
    padding: ${t.spacingLarge};
    overflow: hidden;
  }

  .alert__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: ${t.fontSize18};
    padding-right: ${t.spacingMedium};
  }
`;

export default AlertStyled;
