import styled from 'styled-components';
import t from '../GlobalStyle/settings/tokens';

const LabelValueStyled = styled.dl`
  display: flex;
  flex-flow: column;
  margin: 0;

  dt {
    color: ${t.colorBlackSecondary};
    font-size: ${t.fontSizeHeadingXxSmall};
    font-weight: ${t.fontWeightRegular};
    text-transform: uppercase;
  }

  dd {
    color: ${t.colorPrimary};
    font-size: ${t.fontSizeTextXLarge};
    margin-left: 0;
  }

  &[data-reverse='true'] {
    flex-flow: column-reverse;
  }
`;

export default LabelValueStyled;
