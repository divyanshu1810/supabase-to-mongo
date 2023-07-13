import { config } from "dotenv";
config();

export default {
  /**
   * Port the app should run on
   */
  port: process.env.PORT,

  /**
   * MongoDB the app should connect to
   */
  mongoURL: process.env.MONGODB_URI,

  /**
   * Supabase the app should connect to
   */
  databaseURL: process.env.SUPABASE_URL,

  /**
   * The secret key for the database
   */
  apiKey: process.env.SUPABASE_API_KEY,

  /**
   * The supabase bucket name
   */
  bucketName: process.env.SUPABASE_BUCKET_NAME,
};
