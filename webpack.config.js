// @ts-check
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreactRefreshPlugin = require("@prefresh/webpack");

const makeConfig = () => {
  const { NODE_ENV } = process.env;
  const isProduction = NODE_ENV === "production";

  // Build plugins
  const WEBPACK_PLUGINS = [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
  ];

  if (!isProduction) {
    //WEBPACK_PLUGINS.push(new webpack.SourceMapDevToolPlugin());
    WEBPACK_PLUGINS.push(new PreactRefreshPlugin());
    WEBPACK_PLUGINS.push(new webpack.HotModuleReplacementPlugin());
  }

  /** @type {import("webpack").Configuration & { devServer: import("webpack-dev-server").Configuration}}*/
  var config = {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.tsx",
    stats: "normal",
    devServer: {
      //contentBase: path.join(__dirname, "dist"),
      host: "localhost",
      port: 3000,
      historyApiFallback: true,
      hot: true,
      inline: true,
      //publicPath: "/",
      clientLogLevel: "none",
      open: true,
      overlay: true,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      //publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs", ".json"],
    },
    plugins: WEBPACK_PLUGINS,
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          include: [path.resolve(__dirname, "src")],
          loader: "babel-loader",
        },
      ],
    },
  };

  return config;
};

module.exports = makeConfig();
