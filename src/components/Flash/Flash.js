import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import FlashStyled from './Flash.styles';

const Flash = ({
  collapsable, message, onCloseClick, type,
}) => {
  return (
    <FlashStyled data-type={type}>
      <div className="icon">
        {type === 'error' && <Icon name="error" />}
        {type === 'success' && <Icon name="checkmark" />}
      </div>
      <div className="message">{message}</div>
      {collapsable && (
        <div className="close">
          <button onClick={onCloseClick}>
            <Icon name="close" />
          </button>
        </div>
      )}
    </FlashStyled>
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
