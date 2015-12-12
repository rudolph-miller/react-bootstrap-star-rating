var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: "umd",
    library: "Foo",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  resolveLoader: {
    modulesDirectories: [ "node_modules" ]
  }
}
