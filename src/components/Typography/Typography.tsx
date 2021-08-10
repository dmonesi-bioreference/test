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

export type TypographyColor = 'default' | 'primary' | 'minor';

export type TypographyProps =
  | {
      type: 'body' | 'category' | 'label' | 'helper-text';
      color?: TypographyColor;
    }
  | {
      level: TypographyHeadingLevel;
      type: 'heading';
      color?: TypographyColor;
    };

const Typography: React.FC<TypographyProps> = (props) => {
  const color = props.color || 'default';

  switch (props.type) {
    case 'body':
    case 'category':
    case 'label':
    case 'helper-text':
      return (
        <TypographyStyled className={`${props.type} ${color}`}>
          {props.children}
        </TypographyStyled>
      );
    case 'heading':
      return (
        <TypographyStyled
          as={`h${props.level}`}
          className={`${props.type}${props.level} ${color}`}
        >
          {props.children}
        </TypographyStyled>
      );
  }
};

export default Typography;
