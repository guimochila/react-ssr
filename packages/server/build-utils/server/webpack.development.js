const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = ({ mode }) => ({
  mode,
  // Inform webpack that we're building a bundle
  // for NodeJS, reather than for website
  target: 'node',
  // Tell webpack the root file of our
  // server application
  entry: './src/server.tsx',
  // Tell webpack where to put the output
  // file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  externals: [webpackNodeExternals()],
});
