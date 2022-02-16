/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

const dotenv = require('dotenv');
const globalsPlugin = require('esbuild-plugin-globals');
const svgrPlugin = require('esbuild-plugin-svgr');

const root = join.bind(null, __dirname, '..', '..', '..');
const dist = root.bind(null, 'dist');

dotenv.config({ path: root('.env.auth') });
dotenv.config({ path: root('.env') });

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

const buildConfig = {
  entryPoints: [root('src', 'auth.tsx')],
  bundle: true,
  minify: true,
  treeShaking: true,
  metafile: true,
  platform: 'browser',
  target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
  define: {
    'process.env.NEXT_PUBLIC_GTM_ID': `"${process.env.NEXT_PUBLIC_GTM_ID}"`,
    'process.env.NEXT_PUBLIC_PIMCORE_DOMAIN': `"${process.env.NEXT_PUBLIC_PIMCORE_DOMAIN}"`,
    'process.env.AUTH0_REALM': `"${process.env.AUTH0_REALM}"`,
    'process.env.NEXT_PUBLIC_API_HOST': `"${process.env.NEXT_PUBLIC_API_HOST}"`,
    'process.env.NODE_ENV': '"production"',
    'process.env.ARTIFACT_TARGET': '"auth0"',
    'process.env.__NEXT_TRAILING_SLASH': 'false',
    'process.env.__NEXT_ROUTER_BASEPATH': '""',
    'process.env.__NEXT_CROSS_ORIGIN': '""',
    'process.env.__NEXT_I18N_SUPPORT': 'false',
    'process.env.__NEXT_SCROLL_RESTORATION': 'null',
    'process.env.__NEXT_IMAGE_OPTS': 'undefined',
  },
  plugins: [
    svgrPlugin(),
    globalsPlugin({
      react: 'React',
      ['react-dom']: 'ReactDOM',
    }),
  ],
  outfile: dist('auth.js'),
  loader: {
    '.jpg': 'file',
    '.png': 'file',
    '.ttf': 'file',
    '.eot': 'file',
    '.woff': 'file',
    '.woff2': 'file',
  },
};

const ENVIRONMENT_VARIABLE_MISSING = 'missing';
const ENVIRONMENT_VARIABLE_PRESENT = 'present';
const REQUIRED_ENVIRONMENT_VARIABLES = [
  'AUTH0_CLIENT_SECRET',
  'AUTH0_CLIENT_ID',
  'AUTH0_DOMAIN',
  'AUTH0_REALM',
  'NEXT_PUBLIC_GTM_ID',
  'NEXT_PUBLIC_PIMCORE_DOMAIN',
  'NEXT_PUBLIC_API_HOST',
];

function performConfigurationPreflightCheck() {
  let configurationInvalid = false;
  const variableAnalysis = {};

  for (const environmentVariable of REQUIRED_ENVIRONMENT_VARIABLES) {
    if (typeof process.env[environmentVariable] === 'undefined') {
      variableAnalysis[environmentVariable] = ENVIRONMENT_VARIABLE_MISSING;
      configurationInvalid = true;
    } else {
      variableAnalysis[environmentVariable] = ENVIRONMENT_VARIABLE_PRESENT;
    }
  }

  if (configurationInvalid) {
    console.log(
      [
        'Auth configuration failed preflight check.',
        '',

        'Some values were missing.',
        '',
      ].join('\n')
    );

    console.dir(variableAnalysis);

    process.exit(1);
  }
}

performConfigurationPreflightCheck();

module.exports = { config, buildConfig };
