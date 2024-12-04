const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// webpack can figure out which modules should be shared
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
      // shared: ['react', 'react-dom'],
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, devConfig);