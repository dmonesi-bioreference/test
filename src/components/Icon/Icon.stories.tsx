import React from 'react'
import Icon, { iconArray as icons } from './Icon'

export default {
  component: Icon,
  title: 'Components/Icon',
}

export const library = () => (
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
)
