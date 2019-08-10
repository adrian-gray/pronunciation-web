const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

const publicPath = "dist";

module.exports = {
  context: __dirname,
  mode: "development",
  entry: ["./src/Index.jsx"],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, publicPath),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    port: 9000,
    contentBase: publicPath,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html")
    }),
    new CopyWebpackPlugin([{ from: "./src/assets", to: "assets" }]),
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin({ algorithm: "gzip" })
  ]
};
