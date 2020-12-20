import { css } from 'styled-components';
import { labels } from '../tokens';
import { visuallyHidden } from '../utilities/hidden';

const label = css`
  label {
    flex-shrink: 0;

    [class$='__label'] {
      display: block;
      color: ${labels.color};
      font-size: ${labels.fontSize};
      font-weight: ${labels.fontWeight};
    }
  }

  .label--hidden {
    [class$='__label'] {
      ${visuallyHidden}
    }
  }

  .label--top {
    display: flex;
    flex-flow: column;

    [class$='__label'] {
      margin-bottom: ${labels.spacing};
    }
  }

  .label--right {
    display: flex;
    align-items: center;
    flex-flow: row-reverse;
    justify-content: flex-end;

    [class$='__label'] {
      margin-left: ${labels.spacing};
    }
  }

  .label--bottom {
    display: flex;
    flex-flow: column-reverse;

    [class$='__label'] {
      margin-top: ${labels.spacing};
    }
  }

  .label--left {
    display: flex;
    align-items: center;

    [class$='__label'] {
      margin-right: ${labels.spacing};
    }
  }

  .label--left.label--apart,
  .label--right.label--apart {
    display: flex;
    justify-content: space-between;
  }
`;

export default label;
