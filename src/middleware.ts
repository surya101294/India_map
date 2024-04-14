import { NextRequest, NextResponse } from "next/server";
import { sessionStatus } from "./utils/session";

const protectedRoutes = ["/contact", "/registration", "/dashboard"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("pathnamepathname", pathname, req.nextUrl);
  if (isProtectedRoute(pathname) && !sessionStatus) {
    const redirectURL = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(redirectURL.toString());
  }
  return NextResponse.next();
}

function isProtectedRoute(pathname: string) {
  return protectedRoutes.some((route) => pathname.startsWith(route));
}
