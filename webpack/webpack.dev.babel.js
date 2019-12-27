const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'src/index.html',
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/, // exclude node_modules
    failOnError: false, // show a warning when there is a circular dependency
  }),
];

module.exports = require('./webpack.base.babel')({
  mode: 'development',
  entry: [
    'webpack-dev-server/client?',
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'src/index.jsx'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    minimize: false,
  },
  plugins,
  // faster for debugging
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3001,
    disableHostCheck: false,
  },
  performance: {
    hints: false,
  },
});
