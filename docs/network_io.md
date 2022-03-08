# Network IO

## Introduction

There are two client packages, `api` and `services`. Ultimatey, what we are trying to do is:

Communicate with our external sources where our uncertainties lie using the server-side API call (`service` client package) that transform the response payload into domain code, serving it to the client-side API call that originally made the request (`api` client package) and which trust that guarantee

### `api` Client Package

The `api` client package uses `node-fetch` (which comes out of the box with Next.js) to call our Next.js API routes. It is at `cient/api/index.ts` exporting methods found in the modules imported, for example:

```
articles: async (): Promise<Article[]> => {
  const result = await client.get('/api/content/articles');
  return (await result.json()) as Article[];
}
```

The methods within the modules imported use `node-fetch` through the `client` module which acts as a single place where the request is prepared (like prepending the base URL).

### `service` Client Package

The `service` client package are meant to be used within our Next.js API routes found at `pages/api` (backend, server-side) _privately_, and leverage Axios to connect to the external services making the necessary GraphQL and REST requests. It is at `client/services.ts` exporting methods (called handlers) found in the modules imported, like the following:

```
const report = async (userId: string, reportId: string) => {
  const response = await client
    .get<Blob>(`/v1.0.1/api/PatientPortal/Report/${userId}/${reportId}`)
    .catch(
      (error: AxiosError) => error.response as AxiosResponse<Blob>
    );

  if (response?.status !== 200) {
    throw response?.data;
  }
  
  return response;
}
```

Within the method, `client` refers to the Axios client/agent created for making the request.

Notice how we have transformation and type verification taking place here, which allows us to guarantee the type of the "thing" coming outside of our domain as Axios would fail if the transformation/mapping fails, which can happen when we are receiving empty structures or invalid payloads as a result of an invalid response. As a result of an invalid response or an updated response. This means that we are also guaranteeing a successful response from the external service if Axios does not fail.

