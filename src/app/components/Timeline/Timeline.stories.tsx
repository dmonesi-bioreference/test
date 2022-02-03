import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { createMany } from 'test-utils/server/mocks/tests';

import { Timeline } from './Timeline';

export default {
  component: Timeline,
  title: 'App/Timeline',
  parameters: {
    componentSubtitle:
      'Timeline to display the current stage of the test with future and past stages',
  },
  argTypes: {
    labStatus: {
      options: ['In Lab', 'Report Ready'],
      control: { type: 'select' },
    },
    appointmentStatus: {
      options: [undefined, 'at appointment', 'after appointment'],
      control: { type: 'select' },
    },
  },
};

const Template: Story = (args) => (
  <Shell
    onLoadTests={async () =>
      createMany({
        DueDate: '2021-11-11T00:00:00.000',
        LabStatus: args.labStatus,
      })
    }
    onAppointmentStatus={async () => ({
      appointmentStatus: args.appointmentStatus,
    })}
  >
    <Timeline />
  </Shell>
);

export const Waiting = Template.bind({});

Waiting.args = {
  labStatus: 'In Lab',
};

export const ResultsReady = Template.bind({});

ResultsReady.args = {
  labStatus: 'Report Ready',
};

export const AtAppointment = Template.bind({});

AtAppointment.args = {
  labStatus: 'Report Ready',
  appointmentStatus: 'at appointment',
};

export const AfterAppointment = Template.bind({});

AfterAppointment.args = {
  labStatus: 'Report Ready',
  appointmentStatus: 'after appointment',
};
