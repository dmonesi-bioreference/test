/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, writeFile } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const builder = require('esbuild');
const handlebars = require('handlebars');

const { buildConfig } = require('./configuration');

const root = join.bind(null, __dirname, '..', '..', '..');
const dist = root.bind(null, 'dist');
const auth = root.bind(null, 'infrastructure', 'auth');
const read = promisify(readFile);
const write = promisify(writeFile);

async function buildAndAnalyzeLoginPage() {
  let output = await builder.build(buildConfig);

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
