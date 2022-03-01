import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { TestResults } from 'screens/TestResults/TestResults';
import { createMany } from 'test-utils/server/mocks/tests';

export default {
  component: TestResults,
  title: 'Screens/TestResults',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    labStatus: {
      options: ['In Lab', 'Report Ready'],
      control: { type: 'select' },
    },
  } as const,
};

const Template: Story = (args) => (
  <Shell
    onLoadTests={async () =>
      createMany({
        DueDate: '2022-11-11T00:00:00.000',
        LabStatus: args.labStatus,
      })
    }
  >
    <TestResults />
  </Shell>
);

export const WaitingForResults: Story = Template.bind({});

WaitingForResults.args = {
  labStatus: 'In Lab',
};

export const ResultsReady: Story = Template.bind({});

ResultsReady.args = {
  labStatus: 'Report Ready',
};
