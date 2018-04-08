import React from 'react';
import { configure, storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import '../src/sass/styles.scss';

addDecorator((story, context) => withInfo('')(story)(context));
addDecorator(withKnobs);
addDecorator(checkA11y);

function loadStories() {
  const req = require.context('../src/components', true, /\.story\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
