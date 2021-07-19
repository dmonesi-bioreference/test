import Fieldset, { FieldsetProps } from './Fieldset';
import Checkbox from '../Checkbox/Checkbox';
import Radio from '../Radio/Radio';
import Input from '../Input/Input';
import RadioGroup from '../Radio/RadioGroup';
import { Story } from '@storybook/react/types-6-0';

export default {
  component: Fieldset,
  title: 'Components/Form Elements/Fieldset',
  parameters: {
    componentSubtitle: 'Fieldsets group together related form elements.',
  },
};

const Template: Story<FieldsetProps> = (args) => (
  <Fieldset {...args}>
    <Input name="field1" type="text" label="Field One" />
    <Input name="field2" type="text" label="Field Two" />
  </Fieldset>
);

export const Primary = Template.bind({});

Primary.args = {
  legend: 'Fieldset Legend',
};

export const withCheckboxes = () => (
  <Fieldset legend="Check all that apply.">
    <Checkbox name="checkbox1" label="Checkbox One" />
    <Checkbox name="checkbox2" label="Checkbox Two" />
  </Fieldset>
);

export const withHorizontalLayoutRadio = () => (
  <Fieldset legend="Favorite Mobile OS" orientation="horizontal">
    <RadioGroup name="radio1">
      <Radio value="android" label="Android" />
      <Radio value="ios" label="iOS" />
    </RadioGroup>
  </Fieldset>
);

export const withHorizontalApartLayoutRadio = () => (
  <Fieldset
    legend="What&#8217;s your favorite ice cream flavor?"
    orientation="horizontal-apart"
  >
    <RadioGroup name="radio1">
      <Radio value="chocolate" label="Chocolate" />
      <Radio value="vanilla" label="Vanilla" />
      <Radio value="strawberry" label="Strawberry" />
    </RadioGroup>
  </Fieldset>
);

export const withHorizontalChildren = () => (
  <Fieldset legend="Cats or dogs?" inputOrientation="horizontal">
    <RadioGroup name="radio1">
      <Radio value="cat" label="😸" />
      <Radio value="dog" label="🐶" />
    </RadioGroup>
  </Fieldset>
);

export const withHiddenLegend = () => (
  <Fieldset legend="Fieldset Label" hideLegend={true}>
    <RadioGroup name="radio1">
      <Radio value="one" label="Radio One" />
      <Radio value="two" label="Radio Two" />
    </RadioGroup>
  </Fieldset>
);
