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

export type TypographyColor = 'default' | 'primary' | 'minor' | 'white';

interface HeadingProps {
  level?: TypographyHeadingLevel;
  color?: TypographyColor;
  fontType?: 'serif' | 'sansSerif';
}

type TypographyProps =
  | {
      type: 'body' | 'list' | 'helper-text';
      color?: TypographyColor;
    }
  | {
      type: 'label';
      labelType: 'display' | 'title' | 'input';
      color?: TypographyColor;
    }
  | ({
      type: 'heading';
    } & HeadingProps);

const Typography: React.FC<TypographyProps> = (props) => {
  const color = props.color || 'default';

  switch (props.type) {
    case 'body':
    case 'list':
    case 'helper-text':
      return (
        <TypographyStyled className={`${props.type} ${color}`}>
          {props.children}
        </TypographyStyled>
      );
    case 'label': {
      return (
        <TypographyStyled
          className={`${props.type} ${color} label--${props.labelType}`}
        >
          {props.children}
        </TypographyStyled>
      );
    }
    case 'heading': {
      const level = props.level || '2';
      const fontType =
        props.fontType && parseInt(level) <= 3 ? props.fontType : 'sansSerif';

      return (
        <TypographyStyled
          as={`h${level}`}
          className={`${props.type}${level} ${color} ${fontType}`}
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
  children,
}: Props<HeadingProps>) => {
  return (
    <Typography type="heading" level={level} color={color} fontType={fontType}>
      {children}
    </Typography>
  );
};

export default Typography;
