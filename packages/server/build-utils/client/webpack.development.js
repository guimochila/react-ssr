const path = require('path');

module.exports = () => ({
  target: 'web',
  // Tell webpack the root file of our
  // server application
  entry: './src/pages/index.tsx',
  // Tell webpack where to put the output
  // file that is generated
  output: {
    filename: 'bundleapp.js',
    path: path.resolve('dist/public'),
  },
});
