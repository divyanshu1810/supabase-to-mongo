import { createClient, SupabaseClient } from "@supabase/supabase-js";
import config from "./config";

const supabaseUrl = config.databaseURL;
const supabaseKey = config.apiKey;

let supabase: SupabaseClient | null = null;

const initializeSupabase = (): SupabaseClient => {
  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseKey);
  }
  return supabase;
};

// Call this function to initialize Supabase
export const connectToSupabase = (): SupabaseClient => {
  console.log("Connected to Supabase");
  return supabase || initializeSupabase();
};
