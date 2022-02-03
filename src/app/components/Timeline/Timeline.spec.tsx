import * as TestUtils from 'test-utils';

import { Timeline } from './Timeline';

test('Timeline displays correctly', async () => {
  const app = await TestUtils.renderWithShell(<Timeline />);

  await app.findByText('Your Timeline');
});

test('Timeline has current stage body visible by default', async () => {
  const app = await TestUtils.renderWithShell(<Timeline />, {
    onLoadTests: async () => [
      {
        ...TestUtils.Mocks.tests.single,
        LabStatus: 'In Lab',
      },
    ],
  });

  // Button text visible in body of Waiting should exist
  await app.findByText('Check out resources');

  // Text only found in "After your appointment" should not exist yet
  expect(
    app.queryByText('You may also have a follow up discussion')
  ).toBeNull();
});

test('Past timeline items are shown with smaller headline', async () => {
  const app = await TestUtils.renderWithShell(<Timeline />, {
    onLoadTests: async () => [
      {
        ...TestUtils.Mocks.tests.single,
        DueDate: '2021-11-11T00:00:00.000',
        LabStatus: 'Report Ready',
      },
    ],
  });
  const pastHeadline = await app.findByText('Waiting for Results');
  expect(pastHeadline).toHaveStyle('font-size: 0.875rem');
});
