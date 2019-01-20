import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { selectV2 } from '@storybook/addon-knobs/react';
import Button from '.';
import { iconArray } from '../Icon';

storiesOf('Components/Button', module)
  .addDecorator(withSmartKnobs)
  .add('primary', () => <Button type="primary">Primary Button</Button>)
  .add('primary with icon', () => (
    <Button type="primary" icon={selectV2('Icon', iconArray, 'checkmark', null)}>
      Primary Icon Button
    </Button>
  ))
  .add('medium button', () => (
    <Button type="primary" size="medium">
      Medium Primary Button
    </Button>
  ))
  .add('small button', () => (
    <Button type="primary" size="small">
      Small Primary Button
    </Button>
  ))
  .add('secondary', () => <Button type="secondary">Secondary Button</Button>)
  .add('black', () => <Button type="black">Black Button</Button>)
  .add('outline', () => <Button type="outline">Outline Button</Button>)
  .add('danger', () => <Button type="danger">Danger Button</Button>)
  .add('disabled', () => <Button disabled>Disabled Button</Button>)
  .add('text', () => <Button type="text">Text Button</Button>);
