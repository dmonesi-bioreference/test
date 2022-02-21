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
    attributes: (currentAttributes: { [name: string]: string }) => {
      [name: string]: string;
    };
  };
  withBreaks?: boolean;
};

export const Content = ({
  children,
  customAttributes,
  withBreaks = false,
}: ContentProps) => {
  const transform: Transform = (node, index) => {
    if (!hasChildren(node)) {
      if (isText(node)) return node.data;
    }

    if (isTag(node)) {
      if (customAttributes && customAttributes.name === node.name) {
        node.attribs = customAttributes.attributes(node.attribs);
      }

      let transformedNode = convertNodeToElement(node, index, transform);

      switch (node.name) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
        case 'h7':
        case 'h8':
          transformedNode = (
            <Heading
              key={index}
              level={node.name.split('')[1] as TypographyLevel}
            >
              {node.children.map((child, i) => transform(child, i))}
            </Heading>
          );
          break;
        case 'span':
          transformedNode = (
            <Typography key={index} type="body">
              {node.children.map((child, i) => transform(child, i))}
            </Typography>
          );
          break;
        case 'ul':
          transformedNode = (
            <Typography key={index} type="body">
              <ul>{node.children.map((child, i) => transform(child, i))}</ul>
            </Typography>
          );
          break;
        case 'ol':
          transformedNode = (
            <Typography key={index} type="body">
              <ol>{node.children.map((child, i) => transform(child, i))}</ol>
            </Typography>
          );
          break;
        case 'strong':
          transformedNode = (
            <strong key={index}>
              {node.children.map((child, i) => transform(child, i))}
            </strong>
          );
          break;
      }

      return withBreaks ? (
        <>
          {transformedNode} <br key={index} />
        </>
      ) : (
        transformedNode
      );
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
        }),
      }}
    >
      {children}
    </Content>
  );
};
