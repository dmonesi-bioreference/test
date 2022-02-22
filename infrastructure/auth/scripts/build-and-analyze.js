/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const { buildLoginPage } = require('./build-login-page');

async function buildAndAnalyzeLoginPage() {
  await buildLoginPage(async (_content, analysis) => {
    console.log(analysis);
  });
}

// This file is purely to allow you to see what's going into the build output
// for a given page.
//
async function main() {
  await buildAndAnalyzeLoginPage();
}

main().catch(console.error);
