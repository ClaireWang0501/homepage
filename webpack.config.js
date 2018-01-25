const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: ['html-loader', 'pug-html-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      hash: true,
      template: './src/index.pug'
    })
  ],
};