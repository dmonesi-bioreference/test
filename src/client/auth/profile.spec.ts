import { profile } from './profile';

describe('profile request handler', () => {
  it("bails with 'not-configured' if the IdentityService isn't configured", async () => {
    const [result] = await profile({} as any, {} as any, {
      service: { configured: false } as any,
    });

    expect(result).toEqual('not-configured');
  });

  it('calls IdentityService.session with its given request/response', async () => {
    const request = { request: true };
    const response = { response: true };
    const listener = jest.fn();

    await profile(request as any, response as any, {
      service: { configured: true, session: listener } as any,
    });

    expect(listener).toHaveBeenCalledWith(request, response);
  });

  it("bails with 'no-session' if the IdentityService.session returns none", async () => {
    const [result] = await profile({} as any, {} as any, {
      service: { configured: true, session: () => null } as any,
    });

    expect(result).toEqual('no-session');
  });

  it("bails with 'no-caregiver' if the IdentityService.profile returns none", async () => {
    const [result] = await profile({} as any, {} as any, {
      service: {
        configured: true,
        session: () => ({ user: { sub: '1234' } }),
        profile: () => undefined,
      } as any,
    });

    expect(result).toEqual('no-caregiver');
  });

  it("returns ['success', profile] if the IdentityService.profile returns a user", async () => {
    const expectation = { user: 'profile' };
    const result = await profile({} as any, {} as any, {
      service: {
        configured: true,
        session: () => ({ user: { sub: '1234' } }),
        profile: () => expectation,
      } as any,
    });

    expect(result).toEqual(['success', expectation]);
  });
});
