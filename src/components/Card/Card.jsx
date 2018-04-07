import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  content,
  title,
}) => {
  return (
    <div className="c-card">
      <header className="c-card__header">
        <div className="c-card__title">{title}</div>
      </header>
      <div className="c-card__body">
        {children}
        {content}
      </div>
    </div>
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
