/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
const builder = require('esbuild');
const handlebars = require('handlebars');

const { variables, buildConfig } = require('./configuration');
const { auth, dist, read, write } = require('./project-paths');

async function buildLoginPage(done) {
  const output = await builder.build(buildConfig);
  const css = await read(dist('auth.css'));
  const js = await read(dist('auth.js'));
  const rawTemplate = await read(auth('templates', 'auth.html.hbs'));

  const template = handlebars.compile(rawTemplate.toString());
  const favicon = `${variables.deploymentHost}/favicon.ico`;

  await write(dist('auth.html'), template({ css, js, favicon }));
  await write(
    dist('auth-build-metafile.json'),
    JSON.stringify(output.metafile)
  );

  await done(
    await read(dist('auth.html')),
    await builder.analyzeMetafile(output.metafile)
  );
}

module.exports = { buildLoginPage };
