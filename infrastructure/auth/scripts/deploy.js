/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, writeFile } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const { deploy, dump } = require('auth0-deploy-cli');
const builder = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');
const handlebars = require('handlebars');

const root = join.bind(null, __dirname, '..', '..', '..');
const dist = root.bind(null, 'dist');
const auth = root.bind(null, 'infrastructure', 'auth');
const read = promisify(readFile);
const write = promisify(writeFile);

require('dotenv').config({ path: root('.env.auth') });

// You will need to get these environment variables somehow. If they
// aren't already present in your environment variables, you can also
// drop them into the above `.env.auth` file.
//
const config = {
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_ALLOW_DELETE: false,
  EXCLUDED_PROPS: {
    clients: ['client_secret'],
    connections: ['options.client_secret'],
  },
};

async function getAuth0Deployment() {
  try {
    await dump({ output_folder: auth('deployment'), config });
  } catch (error) {
    console.error(`Unable to get tenant from Auth0: ${error}`);
  }
}

async function buildLoginPage() {
  await builder.build({
    entryPoints: [root('src', 'auth.tsx')],
    bundle: true,
    minify: true,
    treeShaking: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
    define: {
      'process.env.AUTH0_REALM': process.env.AUTH0_REALM,
      'process.env.NODE_ENV': '"auth0"',
      'process.env.__NEXT_TRAILING_SLASH': 'false',
      'process.env.__NEXT_ROUTER_BASEPATH': '""',
      'process.env.__NEXT_CROSS_ORIGIN': '""',
      'process.env.__NEXT_I18N_SUPPORT': 'false',
      'process.env.__NEXT_SCROLL_RESTORATION': 'null',
      'process.env.__NEXT_IMAGE_OPTS': 'undefined',
    },
    plugins: [svgrPlugin()],
    outfile: dist('auth.js'),
    loader: {
      '.jpg': 'file',
      '.png': 'file',
      '.ttf': 'file',
      '.eot': 'file',
      '.woff': 'file',
      '.woff2': 'file',
    },
  });

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
    console.error(`Unable to get tenant from Auth0: ${error}`);
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
