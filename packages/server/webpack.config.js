const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const modeConfig = (env) =>
  require(`./build-utils/${env.target}/webpack.${env.mode}`)(env);
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({
  mode = 'development',
  presets = ['typescript'],
  target = 'server',
}) => {
  return webpackMerge(
    {
      mode,
      context: path.resolve('.'),
      resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        symlinks: true,
      },
      plugins: [new webpack.ProgressPlugin()],
    },
    modeConfig({ mode, target }),
    presetConfig({ mode, presets }),
  );
};
