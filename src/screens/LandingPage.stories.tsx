import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { createMany } from 'test-utils/server/mocks/tests';

import { LandingPage } from './LandingPage';

export default {
  component: LandingPage,
  title: 'Screens/Main',
  argTypes: {
    labStatus: {
      options: ['In Lab', 'Report Ready'],
      control: { type: 'select' },
    },
    appointmentStatus: {
      options: [undefined, 'at appointment', 'after appointment'],
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
    onAppointmentStatus={async () => ({
      appointmentStatus: args.appointmentStatus,
    })}
  >
    <LandingPage />
  </Shell>
);

export const LandingPageWithLabStatusInLab: Story = Template.bind({});

LandingPageWithLabStatusInLab.args = {
  labStatus: 'In Lab',
  appointmentStatus: undefined,
};

export const LandingPageWithLabStatusReady: Story = Template.bind({});

LandingPageWithLabStatusReady.args = {
  labStatus: 'Report Ready',
  appointmentStatus: undefined,
};
