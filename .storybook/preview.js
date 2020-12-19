import { StorybookGlobalStyle } from '../src/components/GlobalStyle/GlobalStyle';

export const decorators = [
  (Story) => (
    <>
      <StorybookGlobalStyle />
      <Story />
    </>
  ),
];

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
