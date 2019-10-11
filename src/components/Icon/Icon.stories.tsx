import { storiesOf } from '@storybook/react'
import React from 'react'
import Icon, { iconArray as icons } from './Icon'

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
      {icons.map(name => (
        <div key={name}>
          <span>{`${name}: `}</span>
          <Icon name={name} />
        </div>
      ))}
    </div>
  ))
