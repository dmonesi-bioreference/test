module.exports = {
  stories: ['../**/*.stories.@(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
  ],
  core: {
    builder: 'webpack5',
  },
};
