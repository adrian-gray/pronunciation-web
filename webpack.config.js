const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: ['babel-polyfill', './ClientApp.jsx'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './assets', to: './assets' },
      { from: './src/styles.css', to: './styles.css' },
      { from: './src/index.html', to: './index.html' }
    ])
  ]
}
