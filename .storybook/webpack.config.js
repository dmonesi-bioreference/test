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
            sourceMap: true
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
