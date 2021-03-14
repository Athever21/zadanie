import express, { Response } from "express";
import fs from "fs/promises";
import path from "path";

const app = express();
const cwd = process.cwd();

if (process.env.NODE_ENV !== "production") {
  require("./devBundle").default(app);
}

app.use("/build/", express.static(path.join(cwd, "build")));
(async () => {
  let srcs = "";
  if (process.env.NODE_ENV === "production") {
    const dir = await fs.readdir(path.join(cwd, "build"));
    dir.forEach((x) => {
      if (x.substr(-2) == "js" && x.substring(0, 4) == "dist") {
        srcs += `<script src="/build/${x}" async></script>\n`;
      }
    });
  } else {
    srcs = '<script src="/build/dist.js"></script>';
  }

  const template = `
  <!DOCTYPE HTML>
  <html lang="pl">
    <head>
      <title>Zadanie</title>
      <meta charset="utf-8">
    </head>
    <style>
      body {
        background: #101010;
      }
    </style>
    <body>
      <div id="root"></div>
      ${srcs}
    </body>
  </html>
`;

  app.get("*", async (_, res: Response) => {
    return res.send(template);
  });
})();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening at port ${port}`));
