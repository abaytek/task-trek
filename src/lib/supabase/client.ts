import { ENV_CONFIG } from "@/config/env.config";
import { createBrowserClient } from "@supabase/ssr";

const supabaseClient = createBrowserClient(
  ENV_CONFIG.SUPABASE_URL,
  ENV_CONFIG.SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: 'pkce', 
      detectSessionInUrl: false,
      persistSession: true, 
    },
  }
);

export default supabaseClient;
