import { Api } from './api';
import { createServiceClients } from './create-service-clients';
import { Errors } from './errors';

export const Client = { Api, Errors, Services: createServiceClients() };
