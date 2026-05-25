import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

/**
 * Service-role client. Bypasses RLS — use ONLY in trusted server contexts
 * (cron jobs, webhooks, OCR uploads) and never expose to the client.
 */
export function createSupabaseServiceClient() {
  if (!env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is required for service client");
  }
  return createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
