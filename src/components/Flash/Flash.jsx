import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../components/Icon';

const Flash = ({
  collapsable,
  message,
  onCloseClick,
  type,
}) => {
  const bemClass = `c-flash--${type}`;

  return (
    <div className={bemClass}>
      <div className="c-flash__icon">
        {type === 'error' && <Icon name="error" />}
        {type === 'success' && <Icon name="checkmark" />}
      </div>
      <div className="c-flash__message">
        {message}
      </div>
      {collapsable &&
        <div className="c-flash__close">
          <button onClick={onCloseClick}>
            <Icon name="close" />
          </button>
        </div>}
    </div>
  );
};

Flash.propTypes = {
  collapsable: PropTypes.bool,
  message: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
};

Flash.defaultProps = {
  collapsable: false,
};

export default Flash;
