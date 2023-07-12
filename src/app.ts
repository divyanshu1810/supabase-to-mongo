import express, { Request, Response } from "express";
import { router } from "./api/router";
import { connectToSupabase } from "./database";
const app = express();
const port = 3000;

app.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "Server is running",
  });
});

app.use(router);

app.listen(port, async () => {
  await connectToSupabase();
  return console.log(`Express is listening at http://localhost:${port}`);
});
