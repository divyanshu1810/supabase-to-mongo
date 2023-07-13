import { createClient } from "@supabase/supabase-js";
import { Db, MongoClient } from "mongodb";
import config from "./config";

export const supabase = createClient(config.databaseURL, config.apiKey);

let db: Db;

async function initializeClient(): Promise<Db> {
  const client = await MongoClient.connect(config.mongoURL);
  return client.db();
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }
  return db;
};
