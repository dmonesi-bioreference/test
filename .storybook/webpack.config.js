const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true,
            data: '@import "./src/sass/variables";',
            includePaths: [
              path.resolve(__dirname, './src/components/')
            ]
          }
        }, {
          loader: 'postcss-loader', options: {
            plugins: [require('autoprefixer')]
          }
        }]
      }
    ]
  }
};
