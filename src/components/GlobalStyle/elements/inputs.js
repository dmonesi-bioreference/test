/* stylelint-disable property-no-vendor-prefix */
/* stylelint-disable no-descending-specificity */

import { css } from 'styled-components';
import tokens from '../settings/tokens';

const inputs = css`
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  label,
  legend {
    color: ${tokens.colorBlack};
    display: block;
    font-size: ${tokens.fontSizeTextMedium};
    line-height: ${tokens.lineHeightTall};
    position: relative;
  }

  label {
    margin-bottom: ${tokens.spacingXSmall};
  }

  legend {
    font-weight: ${tokens.fontWeightBold};
  }

  [type='text'],
  [type='password'],
  [type='date'],
  [type='datetime'],
  [type='datetime-local'],
  [type='month'],
  [type='week'],
  [type='email'],
  [type='number'],
  [type='search'],
  [type='tel'],
  [type='time'],
  [type='url'],
  [type='color'],
  textarea,
  select {
    border: ${tokens.borderWidthThin} solid ${tokens.colorBorderInput};
    border-radius: ${tokens.borderRadiusMedium};
    box-shadow: ${tokens.shadowInsertSubtle};
    display: block;
    font-family: ${tokens.fontFamily};
    font-size: ${tokens.fontSizeTextLarge};
    outline: 0;
    padding: ${tokens.spacingXSmall};
    transition: all ${tokens.durationPromptly} ease-in-out;
    width: 100%;

    &:hover {
      border-color: ${tokens.colorBorderInputHover};
    }

    &:focus {
      border-color: ${tokens.colorPrimary};
    }

    &:disabled {
      background-color: ${tokens.colorBackground};
      cursor: not-allowed;

      &:hover {
        border-color: ${tokens.colorBorderInput};
      }
    }
  }

  [data-icon='search'] {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#AAA" fill-rule="evenodd" d="M19.707,18.293 L14.314,12.9 C15.403,11.504 16,9.799 16,8 C16,5.863 15.167,3.854 13.656,2.344 C12.146,0.832 10.137,0 8,0 C5.863,0 3.854,0.832 2.344,2.344 C0.833,3.854 0,5.863 0,8 C0,10.137 0.833,12.146 2.344,13.656 C3.854,15.168 5.863,16 8,16 C9.799,16 11.504,15.404 12.9,14.314 L18.293,19.706 L19.707,18.293,M8,14 C6.397,14 4.891,13.376 3.758,12.243 C2.624,11.11 2,9.603 2,8 C2,6.398 2.624,4.891 3.758,3.758 C4.891,2.624 6.397,2 8,2 C9.603,2 11.109,2.624 12.242,3.758 C13.376,4.891 14,6.398 14,8 C14,9.603 13.376,11.11 12.242,12.243 C11.109,13.376 9.603,14 8,14 Z"/></svg>');
    background-origin: content-box;
    background-position: left -1.5rem center;
    background-repeat: no-repeat;
    background-size: 1rem;
    padding-left: 2rem;
  }

  select {
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='#000'></polygon></svg>");
    background-origin: content-box;
    background-position: right -1rem center;
    background-repeat: no-repeat;
    background-size: 9px 6px;
    padding-right: 1.5rem;
  }

  [type='date'] {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 18 20'><path fill='#000' fill-rule='evenodd' d='M16.2,3 L15.3,3 L15.3,0 L13.5,0 L13.5,5 L12.6,5 L12.6,3 L6.3,3 L6.3,0 L4.5,0 L4.5,5 L3.6,5 L3.6,3 L1.8,3 C0.8073,3 0,3.898 0,5 L0,18 C0,19.103 0.8073,20 1.8,20 L16.2,20 C17.1927,20 18,19.103 18,18 L18,5 C18,3.898 17.1927,3 16.2,3 Z M16.1973,18 L1.8,18 L1.8,7 L16.2,7 L16.1973,18 Z'/></svg>");
    background-origin: content-box;
    background-position: right -1rem center;
    background-repeat: no-repeat;
    cursor: pointer;
    padding-right: 1.5rem;
  }

  .o-input-focus {
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    left: 3px;
  }

  [type='checkbox'],
  [type='radio'] {
    margin-left: ${tokens.spacingXxSmall};
    margin-right: ${tokens.spacingSmall};

    &:focus {
      outline: 0;
    }

    &:focus + .o-input-focus {
      display: inline-block;
      outline: 1px solid ${tokens.colorPrimary};
    }

    &::before {
      background-color: ${tokens.colorWhite};
      border: ${tokens.borderWidthThin} solid ${tokens.colorBorderInput};
      box-shadow: ${tokens.shadowInsertSubtle};
      color: ${tokens.colorPrimary};
      content: '';
      display: inline-block;
      height: 22px;
      left: -2px;
      position: relative;
      text-align: center;
      top: -5px;
      width: 22px;
    }

    &:disabled {
      cursor: not-allowed;

      &::before {
        background-color: ${tokens.colorBackground};
        color: ${tokens.colorBlackSecondary};
        cursor: not-allowed;
      }
    }
  }

  [type='checkbox'] {
    &::before {
      border-radius: ${tokens.borderRadiusSmall};
    }

    &:checked {
      &::before {
        color: ${tokens.colorPrimary};
        content: '\\2714';
        font-size: 1.1rem;
      }
    }
  }

  [type='radio'] {
    &::before {
      border-radius: ${tokens.borderRadiusCircle};
    }

    &:checked {
      &::before {
        content: '\\2022';
        font-size: 3.41rem;
        line-height: 0.43;
      }
    }
  }

  [invalid] {
    border-color: ${tokens.colorError};

    &:hover,
    &:focus {
      border-color: ${tokens.colorErrorHover};
    }
  }

  [readonly] {
    border-color: ${tokens.colorBackground};

    &:hover {
      border-color: ${tokens.colorBackground};
    }
  }
`;

export default inputs;
