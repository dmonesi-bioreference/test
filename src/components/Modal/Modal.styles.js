import styled from 'styled-components'
import t from '../GlobalStyle/01_settings/tokens'

const ModalStyled = styled.div`
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  position: fixed;
  z-index: 10001;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${t.colorHaze};

  .modal-content {
    background-color: ${t.colorWhite};
    margin: auto;
    border-radius: ${t.borderRadiusMedium};
    position: relative;
    border: 0;
    padding: 0;
    min-width: 20rem;
    box-shadow: ${t.shadowMedium};

    header {
      background-color: ${props => (props.hideHeader ? t.colorWhite : t.colorSecondary)};
      position: relative;
      padding: ${t.spacingSmall} ${t.spacingMedium};
      padding-bottom: ${props => (props.hideHeader ? '0' : t.spacingSmall)};
      display: flex;
      justify-content: ${props => (props.title ? 'space-between' : 'flex-end')};
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
        fill: ${props => (props.hideHeader ? t.colorBlackSecondary : t.colorWhite)};
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
`

export default ModalStyled
