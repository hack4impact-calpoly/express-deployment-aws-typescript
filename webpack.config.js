const path = require('path');
const Dotenv = require('dotenv-webpack');

// https://webpack.js.org/guides/typescript/
module.exports = {
  entry: './lambda.js',
  target: 'node',
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new Dotenv({ path: './backend/.env' }),
  ],
};
