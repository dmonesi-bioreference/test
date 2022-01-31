import { IdentityService } from './identity-service';

describe('IdentityService', () => {
  it('#configured requires domain, id, and secret be set', () => {
    expect(new IdentityService().configured).toBe(false);
    expect(new IdentityService({ id: 'id' }).configured).toBe(false);
    expect(new IdentityService({ secret: 'secret' }).configured).toBe(false);
    expect(new IdentityService({ domain: 'domain' }).configured).toBe(false);

    expect(
      new IdentityService({ id: 'id', secret: 'secret', domain: 'domain ' })
        .configured
    ).toBe(true);
  });

  it('#session calls overrides.getSession', () => {
    const sub = 'a subscriber id';
    const listener = jest.fn(() => ({ sub }));
    const auth = new IdentityService({
      overrides: { getSession: listener as any },
    });
    const request = { request: true } as any;
    const response = { response: true } as any;
    const result: { sub: string } = auth.session(request, response) as any;

    expect(listener).toHaveBeenCalledWith(request, response);
    expect(result.sub).toEqual(sub);
  });

  it('#profile calls management.getUser with session id', async () => {
    const sub = 'a subscriber id';
    const expectedProfile = { stuff: 'things' };
    const clientListener = jest.fn();
    const userListener = jest.fn(async () => ({
      user_metadata: expectedProfile,
    }));
    class MockClient {
      constructor(...args: any[]) {
        clientListener(...args);
      }

      getUser(...args: any[]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return userListener(...args);
      }
    }

    const options = { id: 'id', secret: 'secret', domain: 'domain' };
    const overrides = { ManagementClient: MockClient as any };
    const profile = new IdentityService({ ...options, overrides }).profile(sub);

    expect(clientListener).toHaveBeenCalledWith({
      domain: options.domain,
      clientId: options.id,
      clientSecret: options.secret,
    });

    expect(userListener).toHaveBeenCalledWith({
      id: sub,
    });

    expect(await profile).toEqual(expectedProfile);
  });
});
