import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters } from '@storybook/react'
import { StorybookGlobalStyle } from '../src/components/GlobalStyle/GlobalStyle'
import { DocsPage } from '@storybook/addon-docs/blocks'
import StoryRouter from 'storybook-react-router'

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(StoryRouter())
addDecorator(story => (
  <>
    <StorybookGlobalStyle />
    {story()}
  </>
))

addParameters({
  backgrounds: [
    { name: 'white', value: '#FFF', default: true },
    { name: 'blue gray', value: '#F0F4F8' },
  ],
  docs: DocsPage,
  options: {
    storySort: (a, b) => {
      const sectionA = a[1].id.split('-')[0]
      const sectionB = b[1].id.split('-')[0]

      return sectionB.localeCompare(sectionA)
    },
  },
})
