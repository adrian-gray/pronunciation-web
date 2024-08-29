const isDevelopment = true;

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    port: 8000,
    static: "./",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss"]
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
        use: { loader: "babel-loader" }
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html")
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "assets" },
        { from: "./src/styles", to: "styles" }
      ]
    }),
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin({ algorithm: "gzip" }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
    })
  ]
};
