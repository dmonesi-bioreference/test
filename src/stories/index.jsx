import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { selectV2 } from '@storybook/addon-knobs/react';

import '../sass/styles.scss';

import Button from '../components/Button';
import Card from '../components/Card';
import Flash from '../components/Flash';
import Fieldset from '../components/Fieldset';
import { iconArray } from '../components/Icon';
import InputCheckbox from '../components/InputCheckbox';
import InputRadio from '../components/InputRadio';
import Select from '../components/InputSelect';
import InputText from '../components/InputText';
import InputTextArea from '../components/InputTextarea';
import LabelValue from '../components/LabelValue';
import Message from '../components/Message';
import Table, { TableBody, TableCell, TableHeader, TableRow } from '../components/Table';

addDecorator((story, context) => withInfo('')(story)(context));
addDecorator(withKnobs);
addDecorator(checkA11y);

storiesOf('Button', module)
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

storiesOf('Card', module)
  .add('basic', () => <Card title="Card" content="Card with basic content" />)
  .add('with component', () => <Card title="Card with Component"><Button label="Button" /></Card>);

storiesOf('Flash', module)
  .add('default', () => <Flash message="This is a flash message." type="success" />)
  .add('collapsable', () => <Flash message="This is a flash message that can be closed." type="success" collapsable />)
  .add('error', () => <Flash message="This is a flash message." type="error" />);

storiesOf('Inputs/Checkbox', module)
  .add('default', () => <InputCheckbox name="checkbox1" label="Checkbox Input" />);

storiesOf('Inputs/Radio', module)
  .add('default', () => <InputRadio name="radio1" label="Radio Input" />);

storiesOf('Inputs/Fieldset', module)
  .add('with text inputs', () => (
    <Fieldset label="Fieldset Label">
      <InputText name="field1" type="text" label="Field One" />
      <InputText name="field2" type="text" label="Field Two" />
    </Fieldset>))
  .add('with checkboxes', () => (
    <Fieldset label="Fieldset Label">
      <InputCheckbox name="checkbox1" label="Checkbox One" />
      <InputCheckbox name="checkbox2" label="Checkbox Two" />
    </Fieldset>))
  .add('with radio buttons', () => (
    <Fieldset label="Fieldset Label">
      <InputRadio name="radio1" label="Radio One" />
      <InputRadio name="radio1" label="Radio Two" />
    </Fieldset>));

const options = [
  { name: 'Option 1', value: 'option1' },
  { name: 'Option 2', value: 'option2' },
  { name: 'Option 3', value: 'option3' },
];

storiesOf('Inputs/Select', module)
  .add('default', () => <Select name="select" label="Select Label" options={options} />);

storiesOf('Inputs/Text', module)
  .add('default', () => <InputText name="text" type="text" label="Text Input" />)
  .add('password', () => <InputText name="password" type="password" label="Password Field" />)
  .add('left icon', () => <InputText name="text" type="text" label="Text Input w/ Left Icon" icon={selectV2('Icon', iconArray, 'search', null)} />)
  .add('placeholder', () => <InputText name="text" type="text" label="Text Input w/ Placeholder" placeholder="placeholder" />)
  .add('hidden label', () => <InputText name="text" type="text" label="Label" hideLabel placeholder="hidden label field" />)
  .add('error', () => <InputText name="text" type="text" label="Text Input Error State" invalid invalidMessage="This field is required." />)
  .add('disabled', () => <InputText name="text" type="text" label="Disabled Input Field" disabled />)
  .add('read only', () => <InputText name="text" type="text" label="Ready Only Input Field" value="read only" readonly />);

storiesOf('Inputs/Textarea', module)
  .add('default', () => <InputTextArea name="textarea" label="Text Area" />)
  .add('error', () => <InputTextArea name="textarea" label="Text Area Error State" invalidMessage="This field is required." invalid />)
  .add('disabled', () => <InputTextArea name="textarea" label="Disabled Text Area Field" disabled />)
  .add('read only', () => <InputTextArea name="textarea" label="Ready Only Text Area Field" value="Ready only value" readonly />);

storiesOf('Label Value', module)
  .add('default', () => <LabelValue label="Phone Number" value="555-555-5555" />)
  .add('reverse', () => <LabelValue label="Phone Number" value="555-555-5555" reverse />);

storiesOf('Message', module)
  .add('default', () => <Message text="Message text goes here." icon={selectV2('Icon', iconArray, undefined, null)} />)
  .add('info', () => <Message text="Message text goes here." type="info" icon={selectV2('Icon', iconArray, 'info', null)} />)
  .add('error', () => <Message text="Message text goes here." type="error" icon={selectV2('Icon', iconArray, 'error', null)} />)
  .add('success', () => <Message text="Message text goes here." type="success" icon={selectV2('Icon', iconArray, 'checkmark', null)} />);

storiesOf('Table', module)
  .add('default', () => (
    <Table caption="Table Data">
      <TableHeader>
        <TableRow>
          <TableCell header scope="col">Name</TableCell>
          <TableCell header scope="col">Email</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell header scope="row">John Appleseed</TableCell>
          <TableCell>jappleseed@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ));
