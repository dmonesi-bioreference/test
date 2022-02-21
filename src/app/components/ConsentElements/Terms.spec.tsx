import { waitFor } from '@testing-library/react';

import { renderWithShell } from 'test-utils';

import { Terms } from './Terms';

describe('Terms', () => {
  it('should render', async () => {
    const wrapper = await renderWithShell(<Terms />);
    expect(wrapper).toBeTruthy();
  });

  it('should be able to open terms and conditions', async () => {
    const wrapper = await renderWithShell(<Terms />);

    wrapper.getByRole('button', { name: 'terms & conditions' }).click();
    expect(wrapper.getByText('Terms and Conditions')).toBeTruthy();
  });

  it('should not check if the internal link is clicked', async () => {
    const wrapper = await renderWithShell(<Terms />);

    wrapper
      .getByRole('button', {
        name: 'terms & conditions',
      })
      .click();

    wrapper.getByLabelText('close').click();

    await waitFor(() =>
      expect(
        wrapper.getByRole('checkbox', {
          name: 'I have read and agree to the terms & conditions',
        })
      ).not.toBeChecked()
    );
  });

  it('should check the terms checkbox when agreed to through the modal', async () => {
    const wrapper = await renderWithShell(<Terms />);

    wrapper.getByRole('button', { name: 'terms & conditions' }).click();
    wrapper
      .getByRole('button', { name: 'I agree to the terms and conditions' })
      .click();

    await waitFor(() =>
      expect(
        wrapper.getByRole('checkbox', {
          name: 'I have read and agree to the terms & conditions',
        })
      ).toBeChecked()
    );
  });

  it('should navigate you to GeneDx if you decline registration', async () => {
    const wrapper = await renderWithShell(<Terms />);

    wrapper.getByRole('button', { name: 'terms & conditions' }).click();
    expect(
      wrapper.getByRole('link', { name: 'Decline and exit registration' })
    ).toHaveAttribute('href', 'https://genedx.com');
  });
});
