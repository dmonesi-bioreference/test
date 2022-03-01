import clsx from 'clsx';

import { Typography } from '../Typography';

import ContentBlockStyled from './ContentBlock.styles';

export interface ContentBlockProps {
  title?: string;
  scale?: 'large' | 'small';
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
        <Typography type="body" level="7">
          {props.children}
        </Typography>
      ) : (
        <Typography type="body">{props.children}</Typography>
      )}
    </ContentBlockStyled>
  );
};

export default ContentBlock;
