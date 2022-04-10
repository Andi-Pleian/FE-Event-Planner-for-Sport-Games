const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const production = process.env.NODE_ENV === "production";
const mode = production ? "production" : "development";

const port = process.env.PORT || 3000;

module.exports = {
  entry: "./src/index.js",
  mode,
  output: {
    filename: "./build/bundle.[hash].js",
    publicPath: "/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".css", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
    new ESLintPlugin(),
  ],
  devServer: {
    host: "localhost",
    port,
    historyApiFallback: true,
    open: true,
  },
};
