import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { selectV2 } from '@storybook/addon-knobs/react';
import Button from '.';
import { iconArray } from '../Icon';

storiesOf('Components/Button', module)
  .addDecorator(withSmartKnobs)
  .add('primary', () => <Button kind="primary">Primary Button</Button>)
  .add('primary with icon', () => (
    <Button kind="primary" icon={selectV2('Icon', iconArray, 'checkmark', null)}>
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
