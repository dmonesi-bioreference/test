import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { StorybookGlobalStyle } from '../src/components/GlobalStyle/GlobalStyle'
import { DocsPage } from '@storybook/addon-docs/blocks'

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(story => (
  <>
    <StorybookGlobalStyle />
    {story()}
  </>
))

addParameters({
  backgrounds: [{ name: 'white', value: '#fff', default: true }],
  docs: DocsPage,
})

configure(require.context('../src/', true, /\.stories\.js$/), module)
