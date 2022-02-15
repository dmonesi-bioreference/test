import { hasChildren, isTag, isText } from 'domhandler';
import ReactHtmlParser, {
  convertNodeToElement,
  Transform,
} from 'react-html-parser';

import { client_config } from 'client_config';
import { Heading, Typography, TypographyLevel } from 'components';

import ContentStyled from './Content.styles';

type ContentProps = {
  children?: string;
  customAttributes?: {
    name: string;
    attributes: (currentAttributes: { [name: string]: string }) => { [name: string]: string };
  };
};

export const Content = ({ children, customAttributes }: ContentProps) => {
  const transform: Transform = (node, index) => {
    if (!hasChildren(node)) {
      if (isText(node)) return node.data;
    }

    if (isTag(node)) {
      if (customAttributes && customAttributes.name === node.name) {
        node.attribs = customAttributes.attributes(node.attribs);
      };

      switch (node.name) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
        case 'h7':
        case 'h8':
          return (
            <Heading level={node.name.split('')[1] as TypographyLevel}>
              {node.children.map((child, i) => transform(child, i))}
            </Heading>
          );
        case 'p':
          return (
            <Typography key={index} type="body">
              {node.children.map((child, i) => transform(child, i))}
            </Typography>
          );
        case 'ul':
          return (
            <Typography key={index} type="body">
              <ul>{node.children.map((child, i) => transform(child, i))}</ul>
            </Typography>
          );
        case 'ol':
          return (
            <Typography key={index} type="body">
              <ol>{node.children.map((child, i) => transform(child, i))}</ol>
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

export const ContentWithPimcore = ({ children }: ContentProps) => {
  return (
    <Content
      customAttributes={{
        name: 'img',
        attributes: (currentAttributes) => ({
          ...currentAttributes,
          src: `${client_config.pimcore.domain}${currentAttributes.src}`,
          style: '',
        })
      }}
    >
      {children}
    </Content>
  );
}
