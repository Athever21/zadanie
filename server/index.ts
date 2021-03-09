import express, { Response } from "express";
import template from "../template";

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("./devBundle").default(app);
}

app.get("*", (_, res: Response) => {
  return res.send(template());
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening at port ${port}`));