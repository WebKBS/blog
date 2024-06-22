import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // X-Frame-Options 헤더 설정
  response.headers.set("X-Frame-Options", "DENY");

  // Content-Security-Policy 헤더 설정
  response.headers.set("Content-Security-Policy", "frame-ancestors 'none'");

  return response;
}

export const config = {
  matcher: "/:path*",
};
