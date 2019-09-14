import React from 'react'
import { storiesOf } from '@storybook/react'
import InputCheckbox from '.'

storiesOf('Components/Inputs/Checkbox', module)
  .addParameters({ component: InputCheckbox })
  .add('default', () => <InputCheckbox name="checkbox1" label="Checkbox Input" />)
