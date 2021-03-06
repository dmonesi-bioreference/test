import clsx from 'clsx';

import { Typography } from '../Typography';

import ContentBlockStyled from './ContentBlock.styles';

export interface ContentBlockProps {
  /** Title text of content block. */
  title?: string;
  /** Sets heading level: small = 3 & large = 5, and margin bottom: small = 4px & large = 12px */
  scale?: 'large' | 'small';
  /** Adds a custom css class. */
  className?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const scale = props.scale || 'large';
  const headingLevel = scale === 'large' ? '3' : '5';
  return (
    <ContentBlockStyled
      className={clsx(`content-block--${scale}`, props.className)}
    >
      {props.title ? (
        <Typography type={'heading'} level={headingLevel}>
          {props.title}
        </Typography>
      ) : null}

      {scale === 'large' ? (
        <Typography type="body" level="7" as="span">
          {props.children}
        </Typography>
      ) : (
        <Typography type="body" as="span">
          {props.children}
        </Typography>
      )}
    </ContentBlockStyled>
  );
};

export default ContentBlock;
