const path = require("path");
const cwd = process.cwd();

module.exports = {
  name: "browser",
  mode: "production",
  entry: [path.join(cwd, "client", "index.tsx")],
  output: {
    path: path.join(cwd, "build"),
    filename: "dist.js",
    publicPath: "/build/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: [path.join(cwd, "client")],
      },
      {
        test: /\.scss$/,
        include: [path.join(cwd, "client")],
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    emitOnErrors: false,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
