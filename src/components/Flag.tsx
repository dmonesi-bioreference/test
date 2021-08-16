import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';
import { tokens } from 'styles';

export const Flag = (
  props: Props<{
    iconName: string;
    marginBottom?: string;
  }>
) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: props.marginBottom,
      }}
    >
      <div style={{ marginRight: tokens.spacingLarge }}>
        <Icon name={props.iconName} kind="custom" />
      </div>
      <Typography type="body">{props.children}</Typography>
    </div>
  );
};
