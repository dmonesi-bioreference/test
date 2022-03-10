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

type CommonTypeProps = {
  /** Use to change the color of the text. */
  color?: TypographyColor;
  /** Use to align the text, either 'left', 'center' or 'right', defaults to 'left'. */
  alignment?: TypographyAlignment;
  /** Use to set the component type, defaults to 'span'. */
  as?: string | React.ComponentType<any>;
};

type TypographyProps =
  | ({
      type:
        | 'body'
        | 'list'
        | 'helper-text'
        | 'validation'
        | 'menu-item'
        | 'fine-print';
      /** Determines the heading level, ranges from 1 (H1) to 8 (H8). */
      level?: TypographyLevel;
    } & CommonTypeProps)
  | ({
      /** Use for labels. */
      type: 'label';
      labelType: 'display' | 'title' | 'input' | 'data';
    } & CommonTypeProps)
  | ({
      /** Use for headings. */
      type: 'heading';
      level: TypographyLevel;
    } & CommonTypeProps);

export const Typography: React.FC<TypographyProps> = (props) => {
  const color = props.color || 'default';
  const alignment = props.alignment || 'left';
  const componentType = props.as || 'span';

  switch (props.type) {
    case 'fine-print':
    case 'body': {
      return (
        /* Providing a level prop will override the default body styling */
        <TypographyStyled
          as={componentType}
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
          as={componentType}
          className={`level2 ${props.type} ${color} ${alignment}`}
        >
          {props.children}
        </TypographyStyled>
      );
    }
    case 'label': {
      return (
        <TypographyStyled
          as={componentType}
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
          {props.children}
        </TypographyStyled>
      );
    }
  }
};

/**
 * @returns Header component (eg. h1, h2, h3...)
 */
export const Heading: React.FC<
  Partial<TypographyProps> & {
    level?: TypographyLevel;
    type?: 'heading';
  }
> = (props) => {
  return (
    <Typography
      type="heading"
      level={props.level || '2'}
      color={props.color || 'default'}
      alignment={props.alignment || 'left'}
    >
      {props.children}
    </Typography>
  );
};
