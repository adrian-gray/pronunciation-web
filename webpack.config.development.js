const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

const publicPath = "dist";

module.exports = {
  context: __dirname,
  mode: "development",
  entry: ["./src/Index.tsx"],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, publicPath),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    port: 9999,
    contentBase: publicPath,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html")
    }),
    new CopyWebpackPlugin([
      { from: "./src/assets", to: "assets" },
      { from: "./src/styles", to: "styles" }
    ]),
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin({ algorithm: "gzip" })
  ]
};
