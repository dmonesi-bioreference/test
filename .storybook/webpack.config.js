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
        },
        {
          loader: 'postcss-loader', options: {
            sourceMap: true,
            plugins: [require('autoprefixer')]
          }
        },
        {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      }
    ]
  }
};
