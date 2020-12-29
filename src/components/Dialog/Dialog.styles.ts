import styled from 'styled-components';
import t, { panels, modals } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';
import { hidden } from '../../styles/utilities/hidden';

const DialogStyled = styled.div`
  ${base}
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${t.zIndexDialog};

  &:not(.dialog--visible) {
    ${hidden}
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: 30rem;
    max-width: calc(100% - ${t.spacingXxLarge});
    max-height: calc(100% - ${t.spacingXxLarge});
    background-color: ${panels.backgroundColor};
    border-radius: ${t.borderRadiusMedium};
    box-shadow: ${panels.boxShadow};
    opacity: 0;
    transform: scale(0.9);
    transition: ${t.transitionMedium} opacity, ${t.transitionMedium} transform;

    &:focus {
      outline: none;
    }
  }

  &.dialog--open .dialog__panel {
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font-size: ${t.fontSize20};
    font-weight: ${t.fontWeightMedium};
    line-height: ${t.lineHeightDense};
    padding: ${t.spacingLarge};
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: ${t.fontSize24};
    padding: 0 ${t.spacingLarge};
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: ${t.spacingLarge};
    overflow: auto;
    --webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: ${t.spacingLarge};
  }

  &:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${modals.overlayBackgroundColor};
  }

  &.dialog--open .dialog__overlay {
    opacity: 1;
  }
`;

export default DialogStyled;
