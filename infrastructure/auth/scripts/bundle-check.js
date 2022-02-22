/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { buildLoginPage } = require('./build-login-page');
const { dist, statFile } = require('./project-paths');

const THRESHOLD = 1_000 * 1024;

async function buildAndPrformBundleCheck() {
  await buildLoginPage(async () => {
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
  });
}

// This file is purely to allow you to see what's going into the build output
// for a given page.
//
async function main() {
  await buildAndPrformBundleCheck();
}

main().catch(console.error);
