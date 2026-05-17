import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://swvndiccsosfmtkgnnkn.supabase.co";

const supabaseKey =
  "sb_publishable_r78HIV81eHdI0LZiaqN_zw_hu3X4Se2";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);