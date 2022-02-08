import { screen } from '@testing-library/react';

import { t } from 'localization';
import * as TestUtils from 'test-utils';

import { TermsAndConditions } from './index';

describe('Terms and conditions screen', () => {
  const assert = {
    heading: (name: string) => screen.findByRole('heading', { name }),
  };

  it('renders localized headings', async () => {
    await TestUtils.renderWithShell(<TermsAndConditions />);
    await assert.heading(t('pages.termsAndConditions.userAgreement.title'));
    await assert.heading(t('pages.termsAndConditions.privacyPolicy.title'));
    await assert.heading(t('pages.termsAndConditions.complains.title'));
    await assert.heading(t('pages.termsAndConditions.translations.title'));
  });
});
