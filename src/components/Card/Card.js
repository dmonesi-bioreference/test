import React from 'react';
import PropTypes from 'prop-types';
import CardStyled from './Card.styles';

const Card = ({ children, content, title }) => {
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
  );
};

Card.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  children: null,
  content: null,
};

export default Card;
