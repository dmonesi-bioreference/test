import TypographyStyled from './Typography.styles';

export type TypographyHeadingLevel =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8';

export type TypographyAlignment = 'left' | 'center' | 'right';

export type TypographyColor =
  | 'default'
  | 'primary'
  | 'minor'
  | 'white'
  | 'error';

interface HeadingProps {
  level?: TypographyHeadingLevel;
  color?: TypographyColor;
  alignment?: TypographyAlignment;
  fontType?: 'serif' | 'sansSerif';
}

type TypographyProps =
  | {
      type: 'body' | 'list' | 'helper-text' | 'validation';
      color?: TypographyColor;
      alignment?: TypographyAlignment;
    }
  | {
      type: 'label';
      labelType: 'display' | 'title' | 'input';
      color?: TypographyColor;
      alignment?: TypographyAlignment;
    }
  | ({
      type: 'heading';
    } & HeadingProps);

const Typography: React.FC<TypographyProps> = (props) => {
  const color = props.color || 'default';
  const alignment = props.alignment || 'left';
  switch (props.type) {
    case 'body':
    case 'list':
    case 'helper-text':
    case 'validation':
      return (
        <TypographyStyled className={`${props.type} ${color} ${alignment}`}>
          {props.children}
        </TypographyStyled>
      );
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
      const fontType =
        props.fontType && parseInt(level) <= 3 ? props.fontType : 'sansSerif';

      if (level === '7' || level === '8') {
        return (
          <TypographyStyled
            className={`${props.type}${level} ${color} ${fontType} ${alignment}`}
          >
            {props.children}
          </TypographyStyled>
        );
      }

      return (
        <TypographyStyled
          as={`h${level}`}
          className={`${props.type}${level} ${color} ${fontType} ${alignment}`}
        >
          {props.children}
        </TypographyStyled>
      );
    }
  }
};

export const Heading = ({
  level = '2',
  color = 'default',
  fontType = 'sansSerif',
  alignment = 'left',
  children,
}: Props<HeadingProps>) => {
  return (
    <Typography
      type="heading"
      level={level}
      color={color}
      fontType={fontType}
      alignment={alignment}
    >
      {children}
    </Typography>
  );
};

export default Typography;
