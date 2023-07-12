import express from "express";
import { router } from "./api/router";
import { supabase } from "./database";
import config from "./config";
const app = express();
const port = config.port;

app.use(router);

app.listen(port, async () => {
  supabase;
  return console.log(`Express is listening at http://localhost:${port}`);
});
