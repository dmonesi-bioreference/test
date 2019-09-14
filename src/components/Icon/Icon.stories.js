import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon, { iconArray } from './Icon'

storiesOf('Components/Icon', module)
  .addParameters({ component: Icon })
  .add('library', () => (
    <div
      style={{
        display: 'grid',
        gridRowGap: '0.5rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      }}
    >
      {iconArray.map(name => (
        <div>
          <span>{`${name}: `}</span>
          <Icon name={name} />
        </div>
      ))}
    </div>
  ))
