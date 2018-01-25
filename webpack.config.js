const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./src/js/animation.js', './src/styles/animation.sass'],
  output: {
    filename: './js/animation.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: ['html-loader', 'pug-html-loader'],
      },
      {
        test:/\.(s*)ass$/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                minimize: true
              }
          }, {
              loader: "sass-loader",
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/pug/animation.pug',
      filename: './html/animation.html'
    }),
    new ExtractTextPlugin("./styles/animation.css"),
  ],
};