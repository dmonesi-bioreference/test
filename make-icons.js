// Inspired by Shoelace (https://github.com/shoelace-style/shoelace)
//
// Copyright (c) 2020 A Beautiful Site, LLC
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
// to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
// PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

const Promise = require('bluebird');
const promisify = require('util').promisify;
const chalk = require('chalk');
const pascaleCase = require('change-case').pascalCase;
const del = require('del');
const download = require('download');
const fs = require('fs');
const glob = promisify(require('glob'));
const path = require('path');
const svgr = require('@svgr/core').default;

(async () => {
  try {
    const version = '0.4.2';
    const srcPath = `./.cache/icons/heroicons-${version}`;
    const url = `https://github.com/tailwindlabs/heroicons/archive/v${version}.zip`;

    try {
      await fs.stat(`${srcPath}/LICENSE`);
      console.log(chalk.cyan('Generating icons from cache ♻️'));
    } catch {
      // Download the source from GitHub (since not everything is published to NPM)
      console.log(chalk.cyan(`Downloading and extracting Heroicons ${version} 📦`));
      await download(url, './.cache/icons', { extract: true });
    }

    // Convert to React Components
    console.log(chalk.cyan('Converting to React Components ⚛️'));
    await del(['./src/icons/heroicons']);
    const styles = ['solid', 'outline'];

    await Promise.map(styles, async (style) => {
      const files = await glob(`${srcPath}/optimized/${style}/*.svg`);

      await Promise.map(files, async (file) => {
        const svg = fs.readFileSync(file, 'utf8');
        const name = pascaleCase(path.basename(file, path.extname(file)));
        const source = svgr.sync(
          svg,
          {
            icon: true,
            typescript: true,
            prettier: true,
            plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          },
          { componentName: name }
        );
        fs.mkdirSync(`./src/icons/heroicons/${style}`, { recursive: true });
        fs.writeFileSync(`./src/icons/heroicons/${style}/${name}.tsx`, source);
      });
    });

    // Generate types file
    console.log(chalk.cyan(`Generating TypeScript types 🏷`));
    const files = await glob(`${srcPath}/optimized/solid/*.svg`);
    let source = `/* AUTO-GENERATED FILE; DO NOT MODIFY */\n\nexport const heroiconArray = [\n`;
    await Promise.map(files, async (file) => {
      const name = path.basename(file, path.extname(file));
      source += `  '${name}',\n`;
    });
    source += `] as const;\n\nexport type HeroiconName = typeof heroiconArray[number];\n\nexport default HeroiconName;\n`;
    fs.writeFileSync(`./src/components/Icon/heroicon.ts`, source);

    console.log(chalk.green(`Successfully downloaded icons! ✨\n`));
  } catch (err) {
    console.error(err);
  }
})();
