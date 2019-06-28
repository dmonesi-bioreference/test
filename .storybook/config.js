import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import GlobalStyle from '../src/components/GlobalStyle';

addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
