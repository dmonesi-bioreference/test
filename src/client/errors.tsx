import { NextApiRequest, NextApiResponse } from 'next';

import { logger } from 'logging';

const trace = () => new Date().getTime();
const api = (message: string) => ({ message });

/**
 * badRequest creates a traceID, logs an info message, and then outputs a warning
 * message for client consumption with that trace ID.
 *
 * @param details Any kind of metadata for the warning log
 * @param message A string of some kind
 * @returns A client-friendly error payload
 */
function badRequest(details: any, message: string) {
  const traceId = trace();
  const payload = api(`Bad request - ${message}. TraceID: ${traceId}`);

  logger.info({ ...details, payload, traceId }, payload.message);

  return payload;
}

/**
 * internal creates a traceID, logs an error, and then outputs an error
 * message for client consumption with that trace ID.
 *
 * @param error Any error of some kind
 * @returns A client-friendly error payload
 */
function internal(error: any) {
  const traceId = trace();
  const payload = api(`Internal server error. Trace ID: ${traceId}`);

  logger.error({ traceId, error, payload }, payload.message);

  return payload;
}

/**
 * missingConfig creates a traceID, logs an error, and then outputs an error
 * message for client consumption with that trace ID.
 *
 * @param message A string of some kind
 * @returns A client-friendly error payload
 */
function missingConfig(value: string) {
  const traceId = trace();
  const payload = api(
    `Expected config value: ${value}, nothing found. ${traceId}`
  );

  logger.error({ value, payload, traceId }, payload.message);

  return payload;
}

/**
 * unauthorized creates a traceID, logs an info message, and then outputs a warning
 * message for client consumption with that trace ID.
 *
 * @param details Any kind of metadata for the warning log
 * @param message A string of some kind
 * @returns A client-friendly error payload
 */
function unauthorized(details: any, message: string) {
  const traceId = trace();
  const payload = api(`Unauthorized - ${message}. TraceID: ${traceId}`);

  logger.info({ ...details, payload, traceId }, payload.message);

  return payload;
}

/**
 * AsyncHandler is a local type meant only to convince the rest of our system
 * to default to async in all request handlers.
 */
type AsyncHandler = (
  request: NextApiRequest,
  response: NextApiResponse
) => Promise<void>;

/**
 * wrap takes a Next.js request handler and wraps it with an internal error
 * catch block, taking care of a good amount of boilerplate doing the same.
 *
 * @param handler An async Next request handler
 * @returns A wrapped handler that explodes gracefully with an error message
 */
const wrap =
  (handler: AsyncHandler): AsyncHandler =>
  async (request, response) => {
    try {
      return handler(request, response);
    } catch (error) {
      return response.status(500).json(Errors.internal(error));
    }
  };

export const Errors = {
  api,
  internal,
  badRequest,
  missingConfig,
  unauthorized,
  wrap,
};
