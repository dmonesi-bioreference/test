/* stylelint-disable property-no-vendor-prefix */
/* stylelint-disable no-descending-specificity */

import { css } from 'styled-components';
import t, { colors } from '../01_settings/tokens';

const inputs = css`
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;

    &[data-orientation='horizontal'] {
      legend,
      label {
        float: left;
        margin-right: ${t.spacingMedium};
      }

      label {
        margin-top: 0.35rem;
        margin-bottom: 0;
      }
    }

    [data-children-orientation='horizontal'] {
      label {
        float: left;
        margin-right: ${t.spacingMedium};
      }
    }
  }

  label,
  legend {
    color: ${t.colorSecondaryText};
    display: block;
    font-size: ${t.fontSize14};
    line-height: ${t.lineHeightTall};
    position: relative;

    span {
      line-height: ${t.lineHeightText};
    }
  }

  label {
    margin-bottom: ${t.spacingXSmall};

    &[data-orientation='horizontal'] {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr;
      justify-items: start;
      align-items: center;

      > span {
        margin-right: ${t.spacingMedium};
        flex-shrink: 0;
      }
    }

    &[data-style='emphasized'] {
      font-weight: ${t.fontWeightSemibold};
    }
  }

  [data-input-type='radio'],
  [data-input-type='checkbox'] {
    color: ${t.colorBlack};
    font-size: ${t.fontSize16};
  }

  [data-input-type='textarea'] {
    &[data-orientation='horizontal'] {
      align-items: flex-start;
    }
  }

  legend {
    font-weight: ${t.fontWeightSemibold};

    span {
      display: inline-block;
    }

    &[data-size='large'] {
      font-size: ${t.fontSize18};
    }

    &[data-style='normal'] {
      font-weight: ${t.fontWeightRegular};
    }

    &[data-style='header'] {
      width: 100%;
      margin-bottom: ${t.spacingXxSmall};
      padding: 0 ${t.spacingXxSmall};
      background-color: ${colors.blueGray[200]};
      border-radius: ${t.borderRadiusMedium};
    }
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
    border: ${t.borderWidthThin} solid ${t.colorBorderInput};
    border-radius: ${t.borderRadiusMedium};
    box-shadow: ${t.shadowInsertSubtle};
    display: block;
    font-family: ${t.fontFamilyBody};
    font-size: ${t.fontSize16};
    padding: ${t.spacingXSmall};
    transition: all ${t.durationPromptly} ease-in-out;
    width: 100%;
    line-height: 1.2;

    &:hover {
      border-color: ${t.colorBorderInputHover};
    }

    &:focus {
      border-color: ${colors.blueGray[500]};
    }

    &:disabled {
      background-color: ${t.colorBackground};
      cursor: not-allowed;

      &:hover {
        border-color: ${t.colorBorderInput};
      }
    }
  }

  [data-icon='search'] {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="%23C1C3CD" d="M15.545,13.467 L11.766,9.688 C12.336,8.753 12.664,7.653 12.664,6.478 C12.664,3.061 9.703,0.101 6.286,0.101 C2.869,0.1 0.1,2.87 0.1,6.287 C0.1,9.703 3.061,12.664 6.477,12.664 C7.614,12.664 8.677,12.355 9.592,11.82 L13.391,15.621 C13.763,15.992 14.366,15.992 14.737,15.621 L15.68,14.678 C16.051,14.307 15.916,13.838 15.545,13.467 Z M2.004,6.287 C2.004,3.921 3.921,2.004 6.286,2.004 C8.652,2.004 10.76,4.111 10.76,6.478 C10.76,8.843 8.842,10.761 6.477,10.761 C4.111,10.76 2.004,8.652 2.004,6.287 L2.004,6.287 Z"/></svg>');
    background-origin: content-box;
    background-position: left -1.5rem center;
    background-repeat: no-repeat;
    background-size: 1rem;
    padding-left: 2.5rem;
  }

  [data-icon='send'] {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="%23C1C3CD" d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"/></svg>');
    background-origin: content-box;
    background-position: right -1.5rem center;
    background-repeat: no-repeat;
    background-size: 1rem;
    padding-right: ${t.spacingXLarge};
  }

  select {
    -webkit-appearance: none;
    background-color: ${t.colorWhite};
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='%23000'></polygon></svg>");
    background-origin: content-box;
    background-position: right -1rem center;
    background-repeat: no-repeat;
    background-size: 9px 6px;
    padding-right: 1.85rem;
    padding-left: 0.5rem;

    &.placeholder {
      color: ${t.colorBlackSecondary};
    }

    option {
      color: ${t.colorBlack};
    }
  }

  [type='date'] {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 18 20'><path fill='%23000' fill-rule='evenodd' d='M16.2,3 L15.3,3 L15.3,0 L13.5,0 L13.5,5 L12.6,5 L12.6,3 L6.3,3 L6.3,0 L4.5,0 L4.5,5 L3.6,5 L3.6,3 L1.8,3 C0.8073,3 0,3.898 0,5 L0,18 C0,19.103 0.8073,20 1.8,20 L16.2,20 C17.1927,20 18,19.103 18,18 L18,5 C18,3.898 17.1927,3 16.2,3 Z M16.1973,18 L1.8,18 L1.8,7 L16.2,7 L16.1973,18 Z'/></svg>");
    background-origin: content-box;
    background-position: right -1rem center;
    background-repeat: no-repeat;
    cursor: pointer;
    padding-right: 1.5rem;
  }

  [type='checkbox'],
  [type='radio'] {
    align-self: flex-start;
    margin-left: 0.2rem;
    margin-right: ${t.spacingSmall};
    margin-top: 0.35rem;
    -moz-appearance: initial;
    width: 14px;
    height: 14px;

    &::before {
      background-color: ${t.colorWhite};
      background-repeat: no-repeat;
      background-position: 50% 50%;
      border: ${t.borderWidthThin} solid ${t.colorBorderInput};
      box-shadow: ${t.shadowInsertSubtle};
      color: ${t.colorPrimary};
      content: '';
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      height: 22px;
      left: -2px;
      position: relative;
      text-align: center;
      width: 22px;
      top: -3px;
    }

    &:focus {
      outline: none;

      &::before {
        box-shadow: 0 0 1px 3px rgba(0, 103, 244, 0.6);
        border-color: #3c6dce;
      }
    }

    &:disabled {
      cursor: not-allowed;

      &::before {
        background-color: ${t.colorBackground};
        color: ${t.colorBlackSecondary};
        cursor: not-allowed;
      }
    }

    + span {
      margin-left: ${t.spacingXxxSmall};
      flex: 2;
    }
  }

  [type='checkbox'] {
    &::before {
      border-radius: ${t.borderRadiusSmall};
    }

    &:checked {
      &::before {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"><path fill="%235f8ec4" d="M13.0254194,35 C11.8846422,35 10.804182,34.492461 10.1118483,33.6173938 L0.741740832,21.8139872 C-0.477710606,20.2813695 -0.160390984,18.0987019 1.44980941,16.9361126 C3.06263228,15.7685229 5.35205401,16.0760465 6.57150545,17.6111645 L12.736947,25.3717605 L28.2384039,1.63993778 C29.3057517,0.00981257825 31.5610812,-0.490225827 33.2761807,0.527352328 C34.9886577,1.54243029 35.5157754,3.69259543 34.4458051,5.32772102 L16.1304312,33.3548736 C15.495792,34.3324487 14.3969745,34.9424956 13.1932579,34.9949996 C13.1355634,35 13.0831139,35 13.0254194,35 Z"/></svg>');
        background-size: 0.8rem;
        font-size: 1.1rem;
      }
    }
  }

  [type='radio'] {
    margin-right: ${t.spacingMedium};

    &::before {
      border-radius: ${t.borderRadiusCircle};
    }

    &:checked {
      &::before {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="6" fill="%235F8EC3" fill-rule="evenodd"/></svg>');
        color: ${t.colorSecondary};
      }
    }
  }

  [invalid] {
    border-color: ${t.colorError};

    &:hover,
    &:focus {
      border-color: ${t.colorErrorHover};
    }
  }

  [readonly] {
    border-color: ${t.colorBackground};

    &:hover {
      border-color: ${t.colorBackground};
    }
  }
`;

export default inputs;
