const path = require('path')

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
  stories: ['../**/*.stories.(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
}
