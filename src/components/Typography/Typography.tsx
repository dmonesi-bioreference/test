import { ReactNode } from 'react';

import TypographyStyled from './Typography.styles';

export type TypographyLevel = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type TypographyAlignment = 'left' | 'center' | 'right';

export type TypographyColor =
  | 'default'
  | 'primary'
  | 'inherit'
  | 'minor'
  | 'white'
  | 'blue'
  | 'error';

interface HeadingProps {
  level?: TypographyLevel;
  color?: TypographyColor;
  alignment?: TypographyAlignment;
  objectToWrap?: ReactNode;
}

type TypographyProps =
  | {
      type:
        | 'body'
        | 'list'
        | 'helper-text'
        | 'validation'
        | 'menu-item'
        | 'fine-print';
      color?: TypographyColor;
      alignment?: TypographyAlignment;
      level?: TypographyLevel;
    }
  | {
      type: 'label';
      labelType: 'display' | 'title' | 'input' | 'data';
      color?: TypographyColor;
      alignment?: TypographyAlignment;
    }
  | ({
      type: 'heading';
    } & HeadingProps);

export const Typography: React.FC<TypographyProps> = (props) => {
  const color = props.color || 'default';
  const alignment = props.alignment || 'left';
  switch (props.type) {
    case 'fine-print':
    case 'body': {
      return (
        /* Providing a level prop will override the default body styling */
        <TypographyStyled
          as="p"
          role="paragraph"
          className={`${
            props.level ? 'level' + props.level : props.type
          } ${color} ${alignment}`}
        >
          {props.children}
        </TypographyStyled>
      );
    }
    case 'list':
    case 'helper-text':
    case 'validation':
    case 'menu-item': {
      return (
        <TypographyStyled
          className={`level2 ${props.type} ${color} ${alignment}`}
        >
          {props.children}
        </TypographyStyled>
      );
    }
    case 'label': {
      return (
        <TypographyStyled
          className={`${props.type} ${color} label--${props.labelType} ${alignment}`}
        >
          {props.children}
        </TypographyStyled>
      );
    }
    case 'heading': {
      const level = props.level || '2';

      if (level === '7' || level === '8') {
        return (
          <TypographyStyled
            role="heading"
            aria-level={parseInt(level)}
            className={`level${level} ${color} ${alignment}`}
          >
            {props.children}
          </TypographyStyled>
        );
      }

      return (
        <TypographyStyled
          as={`h${level}`}
          className={`level${level} ${color} ${alignment}`}
          role="heading"
          aria-level={parseInt(level)}
        >
          {props.objectToWrap ? (
            <div className="floated">{props.objectToWrap}</div>
          ) : (
            ''
          )}
          {props.children}
        </TypographyStyled>
      );
    }
  }
};

export const Heading = ({
  level = '2',
  color = 'default',
  alignment = 'left',
  children,
}: Props<HeadingProps>) => {
  return (
    <Typography
      type="heading"
      level={level}
      color={color}
      alignment={alignment}
    >
      {children}
    </Typography>
  );
};
