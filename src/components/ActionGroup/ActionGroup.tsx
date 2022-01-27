import ActionGroupStyled from './ActionGroup.styles';

const ActionGroup: React.FC = (props) => {
  return <ActionGroupStyled>{props.children}</ActionGroupStyled>;
};

export default ActionGroup;
