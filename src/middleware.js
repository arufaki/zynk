import { NextResponse } from "next/server";

export function middleware(req) {
    const token = req.cookies.get("sb-access-token");

    if (token && (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register")) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (!token && req.nextUrl.pathname !== "/login" && req.nextUrl.pathname !== "/register") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/register", "/", "/friends", "/messages", "/notification"],
};
