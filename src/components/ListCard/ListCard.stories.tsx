import { Story } from '@storybook/react/types-6-0';

import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';

import ListCard, { ListCardProps } from './ListCard';

export default {
  component: ListCard,
  title: 'Components/ListCard',
  parameters: {
    componentSubtitle:
      'A Card component to display lists, for example of data elements or actions.',
  },
};

const Template: Story<ListCardProps> = (args) => (
  <ListCard {...args}>
    <Typography type="heading" level="5">
      Item One
    </Typography>
    <Typography type="heading" level="5">
      Item Two
    </Typography>
    <Button kind="link-medium" suffix={<Icon name="chevron-right" />}>
      And an action
    </Button>
  </ListCard>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'My List Card',
  iconName: 'information-circle',
};
