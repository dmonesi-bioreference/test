import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Components/Button', module)
  .addParameters({ component: Button })
  .add('primary', () => <Button kind="primary">Primary Button</Button>)
  .add('primary with icon', () => (
    <Button kind="primary" icon="checkmark">
      Primary Icon Button
    </Button>
  ))
  .add('medium button', () => (
    <Button kind="primary" size="medium">
      Medium Primary Button
    </Button>
  ))
  .add('small button', () => (
    <Button kind="primary" size="small">
      Small Primary Button
    </Button>
  ))
  .add('secondary', () => <Button kind="secondary">Secondary Button</Button>)
  .add('black', () => <Button kind="black">Black Button</Button>)
  .add('outline', () => <Button kind="outline">Outline Button</Button>)
  .add('danger', () => <Button kind="danger">Danger Button</Button>)
  .add('disabled', () => <Button disabled>Disabled Button</Button>)
  .add('text', () => <Button kind="text">Text Button</Button>);
