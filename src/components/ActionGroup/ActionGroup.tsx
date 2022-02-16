import clsx from 'clsx';

import ActionGroupStyled from './ActionGroup.styles';

interface ActionGroupProps {
  narrow?: boolean;
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
