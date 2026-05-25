import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/server/supabase/server-client";

export async function getSession() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function requireAuth() {
  const user = await getSession();
  if (!user) {
    redirect("/login");
  }
  return user;
}
