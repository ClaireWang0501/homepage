const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'animation': './src/js/animation.js', 
    'header': './src/js/header.js', 
  },
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // watch: true,
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 9000
  },
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
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/icon/[hash]-[name].[ext]'
          } 
        }]
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