import React, { FC } from 'react';
import Spinner from 'react-svg-spinner';
import t from '../GlobalStyle/01_settings/tokens';

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

  return <Spinner size={tokenizedSize} color={tokenizedColor} />;
};
export default Loader;
