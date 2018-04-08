import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { selectV2 } from '@storybook/addon-knobs/react';
import Button from '../Button';
import { iconArray } from '../Icon';

storiesOf('Button', module)
  .addDecorator(withSmartKnobs)
  .add('primary', () => <Button label="Primary Button" type="primary" />)
  .add('primary with icon', () => <Button label="Primary Icon Button" type="primary" icon={selectV2('Icon', iconArray, 'checkmark', null)} />)
  .add('medium button', () => <Button label="Medium Primary Button" type="primary" size="medium" />)
  .add('small button', () => <Button label="Small Primary Button" type="primary" size="small" />)
  .add('secondary', () => <Button label="Secondary Button" type="secondary" />)
  .add('black', () => <Button label="Black Button" type="black" />)
  .add('outline', () => <Button label="Outline Button" type="outline" />)
  .add('danger', () => <Button label="Danger Button" type="danger" />)
  .add('disabled', () => <Button label="Disabled Button" disabled />)
  .add('text', () => <Button label="Text Button" type="text" />);
