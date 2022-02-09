import { client_config } from 'client_config';

function createClient(base: string) {
  const get = (url: string) => fetch([base, url].join(''));
  const post = <Payload extends object>(url: string, payload: Payload) =>
    fetch([base, url].join(''), {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  return { get, post };
}

export const client = createClient(client_config.api.host);
