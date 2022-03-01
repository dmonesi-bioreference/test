import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const ListStyled = styled.ul`
  ${base}

  &.list {
    margin: 0;
  }

  &.list--divided {
    padding: 0;
  }

  &.list--bulleted > * :not(:last-child) {
    border-bottom: none;
  }

  &.list--divided > * :not(:first-child) {
    padding-top: ${tokens.spacing};
  }

  &.list--divided > * :not(:last-child) {
    border-bottom: ${tokens.borderWidthThin} solid ${colors.grey[300]};
    padding-bottom: ${tokens.spacing};
  }

  .list__item--bulleted {
    list-style-type: disc;
  }

  .list__item--divided {
    list-style-type: none;
  }

  &.list--plain {
    padding: 0;
  }

  .list__item--plain {
    list-style-type: none;
  }

  &.list--plain > * :not(:last-child) {
    padding-bottom: ${tokens.spacingMedium};
  }
`;

export default ListStyled;
