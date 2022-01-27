import { Typography } from '../Typography';

import ContentBlockStyled from './ContentBlock.styles';

export interface ContentBlockProps {
  title?: string;
  scale?: 'large' | 'small';
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const scale = props.scale || 'large';
  const headingLevel = scale === 'large' ? '3' : '5';
  return (
    <ContentBlockStyled className={`content-block--${scale}`}>
      {props.title ? (
        <Typography type={'heading'} level={headingLevel}>
          {props.title}
        </Typography>
      ) : null}

      <Typography type="body">{props.children}</Typography>
    </ContentBlockStyled>
  );
};

export default ContentBlock;
