const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")

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
    publicPath: '/',
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
        loader: 'babel-loader',
        exclude: /node_modules/
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
      { from: './src/assets', to: 'assets' },
      { from: './src/sitemap.xml', to: 'sitemap.xml' }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFileName: '[id].css'
    }),
    new BundleAnalyzerPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false // remove comments
        },
        compress: {
          unused: true,
          dead_code: true, // big one--strip code that will never execute
          warnings: false, // good for prod apps so users can't peek behind curtain
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: true, // strips console statements
          sequences: true,
          booleans: true
        }
      }
    }),
    new CompressionPlugin({ algorithm: 'gzip' })
  ]
}
