const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require("compression-webpack-plugin")

const publicPath = 'dist'

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: [
    './src/Index.jsx',
    './src/scss/main.scss'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, publicPath),
    publicPath: '/',
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
    new CompressionPlugin({ algorithm: 'gzip' }) 
  ]
}
