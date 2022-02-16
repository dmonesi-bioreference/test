/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, writeFile, stat } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const builder = require('esbuild');
const handlebars = require('handlebars');

const { buildConfig } = require('./configuration');

const root = join.bind(null, __dirname, '..', '..', '..');
const dist = root.bind(null, 'dist');
const auth = root.bind(null, 'infrastructure', 'auth');
const statFile = promisify(stat);
const read = promisify(readFile);
const write = promisify(writeFile);

const THRESHOLD = 1_000 * 1024;

async function buildAndPrformBundleCheck() {
  await builder.build(buildConfig);

  const css = await read(dist('auth.css'));
  const js = await read(dist('auth.js'));
  const rawTemplate = await read(auth('templates', 'auth.html.hbs'));

  const template = handlebars.compile(rawTemplate.toString());

  await write(dist('auth.html'), template({ css, js }));

  const file = await statFile(dist('auth.html'));
  const bytes = file.size;
  const kb = (bytes / 1024).toFixed(0);

  if (bytes > THRESHOLD) {
    console.log(
      `Bundle too large at ${bytes} bytes (${kb}kb - limit is 1000kb)`
    );
    process.exit(1);
  } else {
    console.log(`Bundle size comes in at ${kb}kb - ready to deploy.`);
  }
}

// This file is purely to allow you to see what's going into the build output
// for a given page.
//
async function main() {
  await buildAndPrformBundleCheck();
}

main().catch(console.error);
