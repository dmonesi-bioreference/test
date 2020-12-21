import styled from 'styled-components';
import t, { colors } from '../../styles/tokens';
import { ModalProps } from './Modal';

const ModalStyled = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  position: fixed;
  z-index: 10001;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;

  .modal-content {
    background-color: ${colors.white};
    margin: auto;
    border-radius: ${t.borderRadiusMedium};
    position: relative;
    border: 0;
    padding: 0;
    min-width: 20rem;
    box-shadow: ${t.shadowMedium};

    header {
      background-color: ${(props: ModalProps) =>
        props.hideHeader ? colors.white : t.colorSecondary};
      position: relative;
      padding: ${t.spacingSmall} ${t.spacingMedium};
      padding-bottom: ${(props: ModalProps) =>
        props.hideHeader ? '0' : t.spacingSmall};
      display: flex;
      justify-content: ${(props) =>
        props.title ? 'space-between' : 'flex-end'};
      border-top-left-radius: ${t.borderRadiusMedium};
      border-top-right-radius: ${t.borderRadiusMedium};

      h4 {
        margin: 0;
        color: ${t.colorSecondaryText};
        font-size: ${t.fontSize16};
        font-weight: ${t.fontWeightSemibold};
      }

      path,
      polygon {
        fill: ${(props: ModalProps) =>
          props.hideHeader ? colors.coolGray[800] : colors.white};
      }
    }

    footer {
      background-color: ${t.colorBackground};
      border-bottom-left-radius: ${t.borderRadiusMedium};
      border-bottom-right-radius: ${t.borderRadiusMedium};
    }

    header,
    .content,
    footer {
      padding: ${t.spacingSmall} ${t.spacingMedium};
    }

    .content {
      position: relative;
      overflow: hidden;
    }
  }
`;

export default ModalStyled;
