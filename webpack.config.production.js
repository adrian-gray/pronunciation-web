const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const publicPath = 'dist'

module.exports = {
  context: __dirname,
  mode: 'production',
  entry: [
    'babel-polyfill',
    './src/Index.jsx',
    './src/scss/main.scss'
  ],
  output: {
    path: path.join(__dirname, publicPath),
    filename: 'bundle.js'
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
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFileName: '[id].css'
    })
  ]
}
