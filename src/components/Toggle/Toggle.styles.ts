import styled from 'styled-components';

import { colors, tokens, toggle } from 'styles';

const ToggleStyled = styled.div`
&.switch {
  height: ${tokens.spacingLarge};
  position: absolute;
  width: ${toggle.width};

  .switch__handle {
    background-color: ${colors.white};
    border-radius: ${tokens.borderRadiusCircle};
    display: block;
    height: ${toggle.handleSize};
    margin: ${toggle.handleMargin};
    padding: 0;
    position: absolute;
    top: 0;
    transition: all .2s ease-in-out;
    transition-property: transform;
    width: ${toggle.handleSize};
  }

  .switch__background {
    background-color: ${colors.grey[300]};
    border-radius: ${tokens.spacing};
    box-sizing: border-box;
    display: block;
    flex: 0 0 auto;
    height: ${tokens.spacingLarge};
    margin: 0;
    position: absolute;
    top: 0;
    width: ${toggle.width};
  } 

  .switch__input {
    opacity: 0;
    .switch__background {
      background: ${colors.grey[300]};
    }

    &:checked {
      ~ .switch__background {
        background: ${colors.teal[600]};
      }
      ~ .switch__handle {
        transform: translateX(${tokens.fontSize20});
      }
    }
  }
  
  .switch__label {
    cursor: pointer;
  }
 
}
  `;


export default ToggleStyled;