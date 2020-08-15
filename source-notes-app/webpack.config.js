const path = require("path");

module.exports = {
  entry: {
    index: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],
    edit: ['core-js/stable', 'regenerator-runtime/runtime', './src/edit.js']
  },
  output: {
    path: path.resolve(__dirname, "./public/scripts"),
    filename: "[name]-bundle.js",
  },
  module: {
    rules: [{
      test: /\.js$/, // to see if it's JavaScript files
      exclude: /node_modules/, // not our code, so it doesn't need to be translated by Babel
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
    }, ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/scripts/",
  },
  devtool: "source-map",
};