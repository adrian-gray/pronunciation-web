const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const publicPath = 'dist'

module.exports = {
  context: __dirname,
  entry: ['babel-polyfill', './src/Index.jsx'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, publicPath),
    filename: 'bundle.js'
  },
  devServer: {
    port: 9000,
    contentBase: publicPath,
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' },
      { from: './src/styles.css', to: 'styles.css' }
    ])
  ]
}
