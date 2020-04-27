const path = require('path');

// Plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'yval',
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
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      include: /lib/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
            arguments: true,
            booleans_as_integers: true,
            ecma: 6,
            module: true,
            passes: 5,
            pure_funcs: [
              'createAction',
              'flattenObject',
              'getActionType',
              'field',
              'validateObject',
              'email',
              'fieldType',
            ],
            pure_getters: true,
            toplevel: true,
            unsafe_methods: true,
            unsafe_proto: true,
            unsafe_regexp: true,
          },
          mangle: {
            module: true,
            toplevel: true,
          },
        },
      }),
    ],
  },
};
