import { getSession, Session } from '@auth0/nextjs-auth0';
import { ManagementClient } from 'auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

type IdentityServiceConfig = Partial<{
  domain: string;
  id: string;
  secret: string;
  overrides: Partial<{
    ManagementClient: typeof ManagementClient;
    getSession: typeof getSession;
  }>;
}>;

export class IdentityService {
  private management: typeof ManagementClient;
  private getSession: typeof getSession;

  constructor(private options: IdentityServiceConfig = {}) {
    this.management = options.overrides?.ManagementClient || ManagementClient;
    this.getSession = options.overrides?.getSession || getSession;
  }

  get configured(): boolean {
    return !(!this.options.domain || !this.options.id || !this.options.secret);
  }

  session(
    request: NextApiRequest,
    response: NextApiResponse
  ): Session | undefined | null {
    return this.getSession(request, response);
  }

  async profile(id: string) {
    const client = new this.management({
      domain: this.options.domain || '',
      clientId: this.options.id || '',
      clientSecret: this.options.secret || '',
    });

    const { user_metadata } = await client.getUser({ id });

    return user_metadata;
  }
}
