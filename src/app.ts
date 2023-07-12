import express, { Request, Response } from "express";
import { router } from "./api/router";
import { supabase } from "./database";
import config from "./config";
const app = express();
const port = config.port;

app.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "Server is running",
  });
});

app.use(router);

app.listen(port, async () => {
  supabase;
  return console.log(`Express is listening at http://localhost:${port}`);
});
