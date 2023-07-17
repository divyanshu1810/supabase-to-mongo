import express from "express";
import { router } from "./api/router";
import config from "./config";
import database from "./database";
import { errorHandler } from "./shared/errorHandler";
const app = express();
const port = config.port;

app.use(router);
app.use(errorHandler);

app.listen(port, async () => {
  await database();
  return console.log(`Express is listening at http://localhost:${port}`);
});
