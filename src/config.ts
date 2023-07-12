import { config } from "dotenv";
config();

export default {
  /**
   * Port the app should run on
   */
  port: parseInt(process.env.PORT) || 3000,

  /**
   * Database the app should connect to
   */
  databaseURL: process.env.SUPABASE_URL,

  /**
   * The secret key for the database
   */
  apiKey: process.env.SUPABASE_API_KEY,
};
