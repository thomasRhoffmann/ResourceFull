var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'whatwg-fetch',
    path.resolve(__dirname, 'client/App.jsx')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client/'),
          path.resolve(__dirname, 'test/')
        ],
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }

    ]
  }
};