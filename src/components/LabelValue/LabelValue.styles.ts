import styled from 'styled-components';
import t from '../../styles/tokens';
import { base } from '../../styles/utilities/base';

const LabelValueStyled = styled.dl`
  ${base}
  display: flex;
  flex-flow: column;
  margin: 0 0 ${t.spacingSmall};

  dt {
    color: ${t.colorBlackSecondary};
    font-size: ${t.fontSize14};
    font-weight: ${t.fontWeightRegular};
  }

  dd {
    color: ${t.colorBlack};
    font-size: ${t.fontSize18};
    margin-left: 0;
    white-space: pre-line;
  }

  &[data-reverse='true'] {
    flex-flow: column-reverse;
  }

  &[data-orientation='horizontal'] {
    flex-flow: row;
    align-items: center;

    dd {
      margin-left: ${t.spacingSmall};
    }
  }

  &[data-orientation='horizontal'][data-reverse='true'] {
    flex-flow: row-reverse;
    align-items: center;
    justify-content: flex-end;

    dd {
      margin-right: ${t.spacingSmall};
      margin-left: 0;
    }
  }
`;

export default LabelValueStyled;
