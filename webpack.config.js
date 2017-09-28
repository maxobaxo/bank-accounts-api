const webpack = require('webpack');
const resolve = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    resolve(__dirname, src, 'index.jsx')
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, build),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        options: {
          presets: [
            ['es2015', {'modules': false}],
            'react',
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'template.ejs',
      appMountId: 'react-app-root',
      title: 'Bank Account API App',
      filename: resolve(__dirname, 'build', 'index.html'),
    }),
  ]
}
