import React from 'react'
import Card from '.'
import Button from '../Button'

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
