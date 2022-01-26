import Tippy from '@tippyjs/react';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/dist/tippy.css';
import { roundArrow } from 'tippy.js';

import { Icon } from 'components/Icon';
import { InformationBanner } from 'components/InformationBanner';

import ToolTipStyled from './ToolTip.styles';

export interface ToolTipProps {
  title: string;
  placement?: 'bottom' | 'top';
}

const ToolTip: React.FC<ToolTipProps> = (props) => {
  const placement = props.placement || 'top';
  return (
    <ToolTipStyled>
      <Tippy
        className="tooltip__content"
        arrow={roundArrow}
        interactive={true}
        placement={placement}
        content={
          <InformationBanner title={props.title} type="tooltip">
            {props.children}
          </InformationBanner>
        }
      >
        <div>
          <Icon name="question-mark-circle" color="primary" size="small" />
        </div>
      </Tippy>
    </ToolTipStyled>
  );
};

export default ToolTip;
