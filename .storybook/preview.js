import GlobalStyle from '../src/styles/global';
import * as nextImage from 'next/image';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

Object.defineProperty(nextImage, 'default', {
    configurable: true,
      value: (props) => <img {...props} />
    });

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFF',
      },
      {
        name: 'blue gray',
        value: '#F0F4F8',
      },
    ],
  },
};
