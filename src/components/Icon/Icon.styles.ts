import styled from 'styled-components';
import { IconProps } from './Icon';

const IconStyled = styled.div`
  display: flex;
  align-items: center;

  span,
  div {
    display: flex;
    align-items: center;
    transform: rotate(${(props: IconProps) => props.rotate}deg);

    svg {
      width: 19px;
    }
  }
`;

export default IconStyled;
