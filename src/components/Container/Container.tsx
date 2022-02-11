import clsx from 'clsx';

import ContainerStyled from './Container.styles';

export interface ContainerProps {
  /** Use when a narrower width is required, like when wrapping form fields */
  narrow?: boolean;
  /** Center */
  centered?: boolean;
  /** Override styles directly */
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <ContainerStyled
      className={clsx(props.narrow && 'narrow', props.centered && 'centered')}
      style={props.style}
    >
      {props.children}
    </ContainerStyled>
  );
};

export default Container;
