import { ENV_CONFIG } from "@/config/env.config";
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/dashboard"];
const PUBLIC_ROUTES = "/auth";

export async function updateSession(request: NextRequest) {

  let supabaseResponse = NextResponse.next({
    request,
  });

 

  const supabase = createServerClient(
    ENV_CONFIG.SUPABASE_URL!,
    ENV_CONFIG.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request, 
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
    error
  } = await supabase.auth.getUser();


  const pathname = request.nextUrl.pathname;
  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);
  const isPublicRoute = pathname.startsWith(PUBLIC_ROUTES);

  if (user && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!user && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return supabaseResponse;
}
