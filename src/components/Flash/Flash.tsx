import React, { FC } from 'react';
import Icon from '../Icon/Icon';
import FlashStyled from './Flash.styles';

interface FlashProps {
  message: string;
  onCloseClick?: () => void;
  type: 'success' | 'error';
}

const Flash: FC<FlashProps> = ({ message, onCloseClick, type }) => {
  return (
    <FlashStyled data-type={type}>
      <div className="icon">
        {type === 'error' && <Icon name="exclamation-outline" />}
        {type === 'success' && <Icon name="checkmark" />}
      </div>
      <div className="message">{message}</div>
      {onCloseClick && (
        <div className="close">
          <button onClick={onCloseClick} type="button">
            <div className="visually-hidden">Close</div>
            <Icon name="close" />
          </button>
        </div>
      )}
    </FlashStyled>
  );
};

export default Flash;
