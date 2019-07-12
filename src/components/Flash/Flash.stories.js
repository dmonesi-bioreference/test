import React from 'react';
import { storiesOf } from '@storybook/react';
import Flash from '.';

storiesOf('Components/Flash', module)
  .addParameters({ component: Flash })
  .add('default', () => <Flash message="This is a flash message." type="success" />)
  .add('collapsable', () => (
    <Flash message="This is a flash message that can be closed." type="success" collapsable />
  ))
  .add('error', () => <Flash message="This is a flash message." type="error" />);
