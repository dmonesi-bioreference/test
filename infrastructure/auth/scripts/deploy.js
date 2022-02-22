/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { rm } = require('fs/promises');

const { deploy, dump } = require('auth0-deploy-cli');

const { buildLoginPage } = require('./build-login-page');
const { config } = require('./configuration');
const { write, auth, root } = require('./project-paths');

async function clean() {
  try {
    await rm(auth('deployment'), { recursive: true, force: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAuth0Deployment() {
  try {
    await dump({ output_folder: auth('deployment'), config });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deployAuth0Content() {
  try {
    await deploy({
      input_file: root('infrastructure', 'auth', 'deployment'),
      config,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function main() {
  // We clean out any prior artifacts, in order to ensure we don't push one
  // deployment to another tenant by accident.
  await clean();

  // We retrieve the existing deployment. We want to update it, not replace it.
  // This way, we can grab the files and modify them, then republish.
  //
  await getAuth0Deployment();

  // Now we grab the local pages we want to build, and create single page versions
  // of them with a combination of esbuild + handlebars.
  //
  await buildLoginPage(async (contents) => {
    await write(auth('deployment', 'pages', 'login.html'), contents);
  });

  // Finally, we upload the whole thing to our Auth0 tenant.
  //
  await deployAuth0Content();
}

main()
  .then(() => console.log('Deployment sync with Auth0 complete.'))
  .catch(console.error);
