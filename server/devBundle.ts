import { Express } from "express";

import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackDevMiddlware from "webpack-dev-middleware";
import webpackConfig from "../webpack.client";

export default (app: Express) => {
  const compiler = webpack(webpackConfig as any);
  const middleware = webpackDevMiddlware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
};
