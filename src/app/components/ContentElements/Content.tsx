import { hasChildren, isTag, isText } from 'domhandler';
import { Fragment } from 'react';
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

      let transformedNode;

      const breakNode =
        index != 0 && withBreaks ? <br key={`break-${index}`} /> : null;

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
        case 'p':
          transformedNode = (
            <Typography key={index} type="body" as={node.name}>
              {node.children.map((child, i) => transform(child, i))}
            </Typography>
          );
          break;
        case 'ul':
        case 'ol':
          transformedNode = (
            <Typography key={index} type="list" as={node.name}>
              {node.children.map((child, i) => transform(child, i))}
            </Typography>
          );
          break;
          break;
        case 'strong':
          transformedNode = (
            <strong key={index}>
              {node.children.map((child, i) => transform(child, i))}
            </strong>
          );
          break;
        default:
          transformedNode = convertNodeToElement(node, index, transform);
      }

      return (
        <Fragment key={index}>
          {breakNode}
          {transformedNode}
        </Fragment>
      );
    }
  };

  if (!children) return null;

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
