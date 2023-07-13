import express from "express";
import { router } from "./api/router";
import config from "./config";
import database from "./database";
const app = express();
const port = config.port;

app.use(router);

app.listen(port, async () => {
  await database();
  return console.log(`Express is listening at http://localhost:${port}`);
});
