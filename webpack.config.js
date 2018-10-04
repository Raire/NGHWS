const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './client/start.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /.js$/,
      loader: 'babel-loader'
    }]
  }
}