const path = require('path');
const PATHS = {
  build: path.resolve(__dirname, 'build'),
};
const nodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: './src/index.js',
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react-native'],
        },
        exclude: path.join(__dirname, '/node_modules/'),
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
};

module.exports = config;
