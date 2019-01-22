import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';
import Card from '.';

storiesOf('Components/Card', module)
  .add('basic', () => <Card title="Card" content="Card with basic content" />)
  .add('with component', () => (
    <Card title="Card with Component">
      <Button>Button</Button>
    </Card>
  ));
