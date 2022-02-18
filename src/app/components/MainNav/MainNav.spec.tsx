import * as TestUtils from 'test-utils';

import MainNav from './MainNav';

describe('MainNav', () => {
  it('has button links for major app actions', async () => {
    const nav = await TestUtils.renderWithShell(<MainNav isOpen />);
    const button = (name: string) => nav.findByRole('button', { name });

    await button('Home');
    await button('My Results');
    await button('Health Profile');
    await button('Resources');
    await button('Settings');
    await button('Log Out');
  });
});
