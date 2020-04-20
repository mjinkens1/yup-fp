const path = require('path');

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'i18n-jsfp',
    libraryTarget: 'umd',
  },
  externals: {
    ramda: {
      commonjs: 'ramda',
      commonjs2: 'ramda',
      amd: 'ramda',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
