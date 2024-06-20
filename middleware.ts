import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

export default async function middleware(req: NextRequest, event: any) {
  const { authMiddleware } = await import("@clerk/nextjs");
  return authMiddleware({
    publicRoutes: ["/", "/api/webhooks/stripe"],
  })(req, event);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};

export const intlMiddleware = createMiddleware({
  locales: ["en", "ru"],
  defaultLocale: "en",
});

export const intlConfig = {
  matcher: ["/", "/(ru|en)/:path*"],
};
