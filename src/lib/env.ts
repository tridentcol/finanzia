import { z } from "zod";

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),

  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  ANTHROPIC_DEFAULT_MODEL: z.string().default("claude-haiku-4-5"),

  EXCHANGE_RATES_BASE_URL: z.string().url().default("https://api.frankfurter.app"),
  CRON_SECRET: z.string().min(16).optional(),
  RESEND_API_KEY: z.string().min(1).optional(),

  APP_URL: z.string().url().default("http://localhost:3000"),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});

const isServer = typeof window === "undefined";

function load(): z.infer<typeof serverSchema> | z.infer<typeof clientSchema> {
  if (isServer) {
    const parsed = serverSchema.safeParse(process.env);
    if (!parsed.success) {
      console.error("Invalid server environment variables:", parsed.error.flatten().fieldErrors);
      throw new Error("Invalid server environment configuration");
    }
    return parsed.data;
  }
  const publicEnv = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  };
  const parsed = clientSchema.safeParse(publicEnv);
  if (!parsed.success) {
    console.error("Invalid client environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid client environment configuration");
  }
  return parsed.data;
}

export const env = load();
