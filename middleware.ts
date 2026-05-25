import { type NextRequest, NextResponse } from "next/server";
import { hasSupabase } from "@/lib/env";
import { updateSession } from "@/server/supabase/middleware-client";

const PROTECTED_PREFIXES = ["/app", "/onboarding"];
const AUTH_PAGES = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  // If Supabase isn't configured yet (e.g. preview without env vars),
  // skip session refresh entirely so the public site keeps working.
  if (!hasSupabase()) {
    return NextResponse.next({ request });
  }

  const { pathname } = request.nextUrl;
  const { response, user } = await updateSession(request);

  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  const isAuthPage = AUTH_PAGES.some((p) => pathname === p);

  if (isProtected && !user) {
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (isAuthPage && user) {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)"],
};
