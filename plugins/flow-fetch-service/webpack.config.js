/* eslint-env node */
const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const plugin = require("./src/plugin.json");

module.exports = {
  entry: path.resolve(__dirname, "src/module.js"),
  output: {
    filename: "module.js",
    library: plugin.id,
    libraryTarget: "amd",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, "node_modules"), /\.krem.css$/],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [require("autoprefixer")];
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "node_modules")],
        exclude: [/\.krem.css$/],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.krem.css$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: [
          {
            loader: "kremling-loader",
            options: {
              namespace: "app-dashboard-ui",
              postcss: {
                plugins: {
                  autoprefixer: {},
                },
              },
            },
          },
        ],
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto", // This line is important for Webpack 5+
      },
    ],
  },
  resolve: {
    modules: [__dirname, "node_modules"],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    CopyWebpackPlugin([{ from: path.resolve(__dirname, "src/module.js") }]),
    CopyWebpackPlugin([{ from: path.resolve(__dirname, "src/plugin.json") }]),
  ],
  devtool: "source-map",
  externals: [/^rxjs\/?.*$/],
};
