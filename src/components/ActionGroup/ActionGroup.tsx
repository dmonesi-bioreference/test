import clsx from 'clsx';

import ActionGroupStyled from './ActionGroup.styles';

interface ActionGroupProps {
  /** Set to true to allow for narrow styling. */
  narrow?: boolean;
  /** Set to true to add top padding. */
  topPadding?: boolean;
}

const ActionGroup: React.FC<ActionGroupProps> = (props) => {
  return (
    <ActionGroupStyled
      className={clsx(
        props.narrow && 'narrow',
        props.topPadding && 'top-padding'
      )}
    >
      {props.children}
    </ActionGroupStyled>
  );
};

export default ActionGroup;
