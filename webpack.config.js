const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const prodUrl = "/missiontomars";

const srcPath = path.resolve(__dirname, "./src");
const distPath = path.resolve(__dirname, "./dist");

module.exports = (env) => ({
  entry: path.resolve(srcPath, "App.tsx"),
  output: {
    path: distPath,
    filename: "js/[name].js",
    publicPath: env.mode === "production" ? prodUrl : "/",
  },
  mode: env.mode,
  target: "web",
  devtool: env.mode === "production" ? "eval-source-map" : false,
  resolve: {
    alias: {
      "@components": path.resolve(srcPath, "js/components"),
      "@pages": path.resolve(srcPath, "js/pages"),
      "@landmarks": path.resolve(srcPath, "js/landmarks"),
      "@utils": path.resolve(srcPath, "js/utils"),
      "@scss": path.resolve(srcPath, "scss/"),
      "@assets": path.resolve(srcPath, "assets/"),
      "@scss-variables": path.resolve(srcPath, "scss/variables"),
      "@images": path.resolve(srcPath, "assets/images"),
      "@fonts": path.resolve(srcPath, "assets/fonts"),
      "@newsletter": path.resolve(srcPath, "js/components/newsletter"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, "./index.html"),
      inject: "body",
    }),
    new webpack.DefinePlugin({
      BASENAME: JSON.stringify(env.mode === "production" ? prodUrl : "/"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { esModule: false } },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[folder]/[name].[ext]",
              outputPath: "assets/",
              publicPath: env.mode === "production" ? `${prodUrl}/assets` : "/assets",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    static: distPath,
    historyApiFallback: true,
    port: "8080",
    devMiddleware: {
      writeToDisk: true,
    },
  },
});
