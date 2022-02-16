import userEvents from '@testing-library/user-event';

import { useAppSelector } from 'app/components/Shell';
import * as TestUtils from 'test-utils';

import { CaregiverContactElements } from './CaregiverContactElements';
import { IdentityElements } from './IdentityElements';

function SynchronizationDiagnostics(props: Props<unknown>) {
  const identityPhone = useAppSelector(
    (state) => state.context.forms.identity.values.phone
  );

  const identityEmail = useAppSelector(
    (state) => state.context.forms.identity.values.email
  );

  const caregiverContactPhone = useAppSelector(
    (state) => state.context.forms.caregiverContact.values.phone
  );

  const caregiverContactEmail = useAppSelector(
    (state) => state.context.forms.caregiverContact.values.email
  );

  return (
    <div>
      <div>Caregiver contact email: {caregiverContactEmail}</div>
      <div>Caregiver contact phone: {caregiverContactPhone}</div>
      <div>Identity email: {identityEmail}</div>
      <div>Identity phone: {identityPhone}</div>
      <div>{props.children}</div>
    </div>
  );
}

test('IdentityElements.EmailAddress synchronizes with caregiver contact', async () => {
  const email = 'person@example.com';
  const component = await TestUtils.renderWithShell(
    <SynchronizationDiagnostics>
      <IdentityElements.EmailAddress />
    </SynchronizationDiagnostics>
  );

  userEvents.type(await component.findByLabelText('Email address'), email);

  await component.findByText(`Identity email: ${email}`);
  await component.findByText(`Caregiver contact email: ${email}`);
});

test('CaregiverContactElements.EmailAddress synchronizes with identity', async () => {
  const email = 'person@example.com';
  const component = await TestUtils.renderWithShell(
    <SynchronizationDiagnostics>
      <CaregiverContactElements.EmailAddress />
    </SynchronizationDiagnostics>
  );

  userEvents.type(await component.findByLabelText('Your Email Address'), email);

  await component.findByText(`Identity email: ${email}`);
  await component.findByText(`Caregiver contact email: ${email}`);
});

test('IdentityElements.PhoneNumber synchronizes with caregiver contact', async () => {
  const phone = '212 345 9998';
  const component = await TestUtils.renderWithShell(
    <SynchronizationDiagnostics>
      <IdentityElements.PhoneNumber />
    </SynchronizationDiagnostics>
  );

  userEvents.type(await component.findByLabelText('Your Mobile Phone'), phone);

  await component.findByText(`Identity phone: ${phone}`);
  await component.findByText(`Caregiver contact phone: ${phone}`);
});

test('CaregiverContactElements.PhoneNumber synchronizes with identity', async () => {
  const phone = '(212) 345-9998';
  const component = await TestUtils.renderWithShell(
    <SynchronizationDiagnostics>
      <CaregiverContactElements.PhoneNumber />
    </SynchronizationDiagnostics>
  );

  userEvents.type(await component.findByLabelText('Your Mobile Number'), phone);

  await component.findByText(`Identity phone: ${phone}`);
  await component.findByText(`Caregiver contact phone: ${phone}`);
});
