import React, { FC } from 'react';
import t from '../../styles/tokens';

interface LoaderProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Loader: FC<LoaderProps> = ({ color = 'primary', size = 'medium' }) => {
  let tokenizedColor: string;
  let tokenizedSize: string;

  switch (color) {
    case 'primary':
      tokenizedColor = t.colorPrimary;
      break;
    case 'secondary':
      tokenizedColor = t.colorSecondary;
      break;
    default:
      break;
  }

  switch (size) {
    case 'small':
      tokenizedSize = '16px';
      break;
    case 'medium':
      tokenizedSize = '32px';
      break;
    case 'large':
      tokenizedSize = '48px';
      break;
    default:
      break;
  }

  return <></>;
};
export default Loader;
