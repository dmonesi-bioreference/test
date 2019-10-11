import React from 'react'
import Button from '../Button'
import Card from '.'

export default {
  component: Card,
  title: 'Components/Card',
}

export const basic = () => <Card title="Card" content="Card with basic content" />

export const withComponent = () => (
  <Card title="Card with Component">
    <Button>Button</Button>
  </Card>
)
