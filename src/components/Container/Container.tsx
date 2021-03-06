import clsx from 'clsx';

import ContainerStyled from './Container.styles';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Use when a narrower width is required, like when wrapping form fields */
  narrow?: boolean;
  /** Center */
  centered?: boolean;
  horizontalPadding?: 'none' | 'base' | 'large';
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <ContainerStyled
      className={clsx(
        props.narrow && 'narrow',
        props.centered && 'centered',
        `horizontal-padding--${props.horizontalPadding}`,
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </ContainerStyled>
  );
};

export default Container;
