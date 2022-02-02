/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, writeFile } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const { deploy, dump } = require('auth0-deploy-cli');
const builder = require('esbuild');
const handlebars = require('handlebars');

const { config, buildConfig } = require('./configuration');

const root = join.bind(null, __dirname, '..', '..', '..');
const dist = root.bind(null, 'dist');
const auth = root.bind(null, 'infrastructure', 'auth');
const read = promisify(readFile);
const write = promisify(writeFile);

async function getAuth0Deployment() {
  try {
    await dump({ output_folder: auth('deployment'), config });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function buildLoginPage() {
  await builder.build(buildConfig);

  const css = await read(dist('auth.css'));
  const js = await read(dist('auth.js'));
  const rawTemplate = await read(auth('templates', 'auth.html.hbs'));

  const template = handlebars.compile(rawTemplate.toString());

  await write(dist('auth.html'), template({ css, js }));

  await write(
    auth('deployment', 'pages', 'login.html'),
    await read(dist('auth.html'))
  );
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
  // First we retrieve the existing deployment. We want to update it, not replace it.
  // This way, we can grab the files and modify them, then republish.
  //
  await getAuth0Deployment();

  // Now we grab the local pages we want to build, and create single page versions
  // of them with a combination of esbuild + handlebars.
  //
  await buildLoginPage();

  // Finally, we upload the whole thing to our Auth0 tenant.
  //
  await deployAuth0Content();
}

main()
  .then(() => console.log('Deployment sync with Auth0 complete.'))
  .catch(console.error);
