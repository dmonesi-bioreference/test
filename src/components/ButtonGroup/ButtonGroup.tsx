import React, { FC } from 'react';
import ButtonGroupStyled from './ButtonGroup.styles';

const ButtonGroup: FC = ({ children }) => (
  <ButtonGroupStyled>{children}</ButtonGroupStyled>
);

export default ButtonGroup;
