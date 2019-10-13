import React, { FC } from 'react'
import CardStyled from './Card.styles'

interface CardProps {
  content?: string
  title: string
}

const Card: FC<CardProps> = ({ children, content, title }) => {
  return (
    <CardStyled>
      <header className="header">
        <div className="title">{title}</div>
      </header>
      <div className="body">
        {children}
        {content}
      </div>
    </CardStyled>
  )
}

export default Card
