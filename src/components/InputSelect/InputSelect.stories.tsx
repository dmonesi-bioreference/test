import React from 'react';
import Select from '.';

const options = [
  { name: 'Option 1', value: 'option1' },
  { name: 'Option 2', value: 'option2' },
  { name: 'Option 3', value: 'option3' },
];

export default {
  component: Select,
  title: 'Components/Inputs/Select',
};

export const defaultStory = () => <Select name="select" label="Select Label" options={options} />;

export const boldWeightLabel = () => (
  <Select name="select" label="Select Label" options={options} labelStyle="emphasized" />
);

export const horizontalLayout = () => (
  <Select name="select" label="Select Label" options={options} orientation="horizontal" />
);
