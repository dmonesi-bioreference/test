import React from 'react'
import { storiesOf } from '@storybook/react'
import CardGrid from '.'
import Card from '../Card'

storiesOf('Components/CardGrid', module)
  .addParameters({ component: CardGrid })
  .add('with single column', () => (
    <CardGrid columns={1}>
      <Card title="card 1" content="card 1 content" />
      <Card title="card 2" content="card 2 content" />
      <Card title="card 3" content="card 3 content" />
    </CardGrid>
  ))
  .add('with 2 columns', () => (
    <CardGrid columns={2}>
      <Card title="card 1" content="card 1 content" />
      <Card title="card 2" content="card 2 content" />
    </CardGrid>
  ))
  .add('with 3 columns', () => (
    <CardGrid columns={3}>
      <Card title="card 1" content="card 1 content" />
      <Card title="card 2" content="card 2 content" />
      <Card title="card 3" content="card 3 content" />
    </CardGrid>
  ))
