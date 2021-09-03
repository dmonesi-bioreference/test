const path = require('path');
const tsConfig = require('../tsconfig.json');

module.exports = {
  stories: ['../**/*.stories.@(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '..', tsConfig.compilerOptions.baseUrl),
    ];
    return config;
  },
};
