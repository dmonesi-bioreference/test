/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, writeFile } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const builder = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');
const handlebars = require('handlebars');

const root = join.bind(null, __dirname, '..', '..', '..');
const dist = root.bind(null, 'dist');
const auth = root.bind(null, 'infrastructure', 'auth');
const read = promisify(readFile);
const write = promisify(writeFile);

require('dotenv').config({ path: root('.env.auth') });

async function buildAndAnalyzeLoginPage() {
  let output = await builder.build({
    entryPoints: [root('src', 'auth.tsx')],
    bundle: true,
    minify: true,
    treeShaking: true,
    metafile: true,
    platform: 'browser',
    target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
    define: {
      'process.env.AUTH0_REALM': `"${process.env.AUTH0_REALM}"`,
      'process.env.NODE_ENV': '"production"',
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

  console.log(await builder.analyzeMetafile(output.metafile));

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

// This file is purely to allow you to see what's going into the build output
// for a given page.
//
async function main() {
  await buildAndAnalyzeLoginPage();
}

main().catch(console.error);
