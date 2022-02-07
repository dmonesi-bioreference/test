/* eslint-disable @typescript-eslint/no-unused-vars */
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import * as dotenv from 'dotenv'

const config: Cypress.PluginConfig = (on, config) => {
  dotenv.config({ path: '.env.local' })

  config.env.AUTH0_ROOT = process.env.CYPRESS_AUTH0_ROOT;
  config.env.AUTH0_GUID_TEST_ORDERED = process.env.CYPRESS_AUTH0_GUID_TEST_ORDERED;
  config.env.AUTH0_USERNAME_TEST_ORDERED = process.env.CYPRESS_AUTH0_USERNAME_TEST_ORDERED;
  config.env.AUTH0_PASSWORD_TEST_ORDERED = process.env.CYPRESS_AUTH0_PASSWORD_TEST_ORDERED;
  config.env.AUTH0_GUID_TEST_IN_LAB = process.env.CYPRESS_AUTH0_GUID_TEST_IN_LAB;
  config.env.AUTH0_USERNAME_TEST_IN_LAB = process.env.CYPRESS_AUTH0_USERNAME_TEST_IN_LAB;
  config.env.AUTH0_PASSWORD_TEST_IN_LAB = process.env.CYPRESS_AUTH0_PASSWORD_TEST_IN_LAB;
  config.env.AUTH0_GUID_RESULTS_READY = process.env.CYPRESS_AUTH0_GUID_RESULTS_READY;
  config.env.AUTH0_USERNAME_RESULTS_READY = process.env.CYPRESS_AUTH0_USERNAME_RESULTS_READY;
  config.env.AUTH0_PASSWORD_RESULTS_READY = process.env.CYPRESS_AUTH0_PASSWORD_RESULTS_READY;
  config.env.AUTH0_GUID_RESULTS_VIEWED = process.env.CYPRESS_AUTH0_GUID_RESULTS_VIEWED;
  config.env.AUTH0_USERNAME_RESULTS_VIEWED = process.env.CYPRESS_AUTH0_USERNAME_RESULTS_VIEWED;
  config.env.AUTH0_PASSWORD_RESULTS_VIEWED = process.env.CYPRESS_AUTH0_PASSWORD_RESULTS_VIEWED;

  return config;
};

export default config;
