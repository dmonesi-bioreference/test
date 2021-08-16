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

interface HeadingProps {
  level?: TypographyHeadingLevel;
  color?: TypographyColor;
}

type TypographyProps =
  | {
      type: 'body' | 'category' | 'label' | 'helper-text';
      color?: TypographyColor;
    }
  | ({
      type: 'heading';
    } & HeadingProps);

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
    case 'heading': {
      const level = props.level || '2';

      return (
        <TypographyStyled
          as={`h${level}`}
          className={`${props.type}${level} ${color}`}
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
  children,
}: Props<HeadingProps>) => {
  return (
    <Typography type="heading" level={level} color={color}>
      {children}
    </Typography>
  );
};

export default Typography;
