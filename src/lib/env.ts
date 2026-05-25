import { z } from "zod";

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),

  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  ANTHROPIC_DEFAULT_MODEL: z.string().default("claude-haiku-4-5"),

  EXCHANGE_RATES_BASE_URL: z.string().url().default("https://api.frankfurter.app"),
  CRON_SECRET: z.string().min(16).optional(),
  RESEND_API_KEY: z.string().min(1).optional(),

  APP_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});

type ServerEnv = z.infer<typeof serverSchema>;

let cached: ServerEnv | null = null;

function loadEnv(): ServerEnv {
  if (cached) return cached;
  const parsed = serverSchema.safeParse(process.env);
  if (!parsed.success) {
    console.warn(
      "Environment validation produced warnings:",
      parsed.error.flatten().fieldErrors,
    );
    cached = serverSchema.parse({});
    return cached;
  }
  cached = parsed.data;
  return cached;
}

/**
 * Lazy-validated environment proxy. Reading any field triggers validation on
 * first access — keeps build-time clean when optional secrets are missing
 * (e.g. preview deploys without Supabase) while still surfacing problems at
 * runtime when the feature actually requires the variable.
 */
export const env: ServerEnv = new Proxy({} as ServerEnv, {
  get(_, prop: string) {
    return (loadEnv() as Record<string, unknown>)[prop];
  },
});

export function requireEnv<K extends keyof ServerEnv>(key: K): NonNullable<ServerEnv[K]> {
  const v = env[key];
  if (v === undefined || v === null || v === "") {
    throw new Error(`Missing required environment variable: ${String(key)}`);
  }
  return v as NonNullable<ServerEnv[K]>;
}

export function hasSupabase(): boolean {
  return Boolean(env.NEXT_PUBLIC_SUPABASE_URL && env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}
