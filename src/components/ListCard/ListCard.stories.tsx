import { Story } from '@storybook/react/types-6-0';

import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';
import { Theme } from 'styles';

import ListCard from './ListCard';

export default {
  component: ListCard,
  title: 'Components/ListCard',
  parameters: {
    componentSubtitle:
      'A Card component to display lists, for example of data elements or actions.',
  },
  argTypes: {
    theme: {
      options: [
        'defaultTheme',
        'resourcesTheme',
        'healthProfileTheme',
        'communityTheme',
      ],
      control: { type: 'radio' },
    },
  },
};

const Template: Story = ({ theme = 'defaultTheme', ...args }) => (
  <Theme theme={theme}>
    <ListCard title={args.title} iconName={args.iconName}>
      <Typography type="body" level="5">
        Item One
      </Typography>
      <Typography type="body" level="5">
        Item Two
      </Typography>
      <Button
        kind="link-medium"
        suffix={<Icon name="chevron-right" />}
        spreadContent
      >
        And an action
      </Button>
    </ListCard>
  </Theme>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'My List Card',
  iconName: 'information-circle',
  theme: 'defaultTheme',
};
