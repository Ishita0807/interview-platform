import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "@/lib/actions/auth.action";

export async function middleware(req: NextRequest) {
  const isUserAuthenticated = await isAuthenticated();

  // Exclude the /sign-in route from authentication checks
  if (req.nextUrl.pathname === "/sign-in") {
    return NextResponse.next();
  }

  if (!isUserAuthenticated) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/((?!sign-in).*)"], // Match all routes except /sign-in
};