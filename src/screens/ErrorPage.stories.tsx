import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';

import { ErrorPage } from './ErrorPage';

export default {
  component: ErrorPage,
  title: 'Screens/ErrorPage',
  parameters: {
    componentSubtitle: 'Defines layout for 404 and 500 errors.',
  },
  argTypes: {
    statusCode: {
      control: {
        type: 'select',
      },
      options: {
        '404': 404,
        '500': 500,
      },
    },
  },
};

const Template: Story = ({ statusCode = 404 }) => {
  return (
    <Shell>
      <ErrorPage statusCode={statusCode}></ErrorPage>
    </Shell>
  );
};

export const FourOhFour = Template.bind({});

FourOhFour.args = {
  statusCode: 404,
};

export const FiveHundred = Template.bind({});

FiveHundred.args = {
  statusCode: 500,
};
