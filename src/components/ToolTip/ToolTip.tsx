import { useState } from 'react';

import { Icon, InformationBanner, Typography } from 'components';

import ToolTipStyled from './ToolTip.styles';

export interface ToolTipProps {
  helperMessage: string;
  title: string;
}

const ToolTip: React.FC<ToolTipProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipStyle = {
    display: isOpen ? 'block' : 'none',
  };
  const handleMouseOver = () => {
    setIsOpen(true);
  };
  const handleMouseOut = () => {
    setIsOpen(false);
  };
  return (
    <ToolTipStyled>
      <div className="tooltip__helper">
        <Typography type="helper-text" color="minor">
          {props.helperMessage}
        </Typography>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onFocus={handleMouseOver}
          onBlur={handleMouseOut}
        >
          <Icon name="question-mark-circle" color="primary" size="small" />
        </div>
      </div>
      <div
        style={tooltipStyle}
        className="tooltip__content"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={handleMouseOver}
        onBlur={handleMouseOut}
      >
        <div className="tip">
          <Icon name="toolTipPoint" kind="custom" />
        </div>
        <InformationBanner title={props.title} color="major">
          {props.children}
        </InformationBanner>
      </div>
    </ToolTipStyled>
  );
};

export default ToolTip;
