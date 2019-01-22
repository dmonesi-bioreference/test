import React from 'react';
import { configure, storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import GlobalStyle from '../src/components/GlobalStyle';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

function loadStories() {
  const req = require.context('../src', true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
