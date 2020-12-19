import React from 'react';
import CardGrid from '.';
import Card from '../Card';

export default {
  component: CardGrid,
  title: 'Components/CardGrid',
};

export const withSingleColumn = () => (
  <CardGrid columns={1}>
    <Card title="card 1" content="card 1 content" />
    <Card title="card 2" content="card 2 content" />
    <Card title="card 3" content="card 3 content" />
  </CardGrid>
);

export const with2Columns = () => (
  <CardGrid columns={2}>
    <Card title="card 1" content="card 1 content" />
    <Card title="card 2" content="card 2 content" />
  </CardGrid>
);

export const with3Columns = () => (
  <CardGrid columns={3}>
    <Card title="card 1" content="card 1 content" />
    <Card title="card 2" content="card 2 content" />
    <Card title="card 3" content="card 3 content" />
  </CardGrid>
);
