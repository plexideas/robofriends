const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '..', 'src');
const BUILD_DIR = path.resolve(__dirname, '..', 'dist');

module.exports = {
  entry: `${APP_DIR}/index.tsx`,
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    contentBase: BUILD_DIR,
    historyApiFallback: true,
    compress: true,
    port: 9001
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${APP_DIR}/templates/index.html`,
      title: 'RobotFriends',
    }),
  ],
};
