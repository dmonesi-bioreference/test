import { hasChildren, isTag, isText } from 'domhandler';
import ReactHtmlParser, {
  convertNodeToElement,
  Transform,
} from 'react-html-parser';

import { Typography } from 'components/Typography';

import ContentStyled from './Content.styles';

type ContentProps = {
  children?: string;
};

export const Content = ({ children }: ContentProps) => {
  const transform: Transform = (node, index) => {
    if (!hasChildren(node)) {
      if (isText(node)) return node.data;
    }

    if (isTag(node)) {
      switch (node.name) {
        case 'p':
          return (
            <Typography key={index} type="body">
              {node.children.map((child, i) => transform(child, i))}
            </Typography>
          );
        case 'strong':
          return (
            <strong key={index}>
              {node.children.map((child, i) => transform(child, i))}
            </strong>
          );
        default:
          return convertNodeToElement(node, index, transform);
      }
    }
  };

  if (!children) return <></>;

  return (
    <ContentStyled>
      <div>{ReactHtmlParser(children, { transform })}</div>
    </ContentStyled>
  );
};
