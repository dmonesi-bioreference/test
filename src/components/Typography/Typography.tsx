import TypographyStyled from './Typography.styles';

export type TypographyProps =
  | { type: 'body' | 'category' }
  | {
      level: '1' | '2' | '3' | '4' | '5' | '6';
      type: 'heading';
    };

const Typography: React.FC<TypographyProps> = (props) => {
  switch (props.type) {
    case 'body':
    case 'category':
      return (
        <TypographyStyled className={props.type}>
          {props.children}
        </TypographyStyled>
      );
    case 'heading':
      return (
        <TypographyStyled
          as={`h${props.level}`}
          className={`${props.type}${props.level}`}
        >
          {props.children}
        </TypographyStyled>
      );
  }
};

export default Typography;
