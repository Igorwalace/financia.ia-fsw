// import { NextRequest, NextResponse } from "next/server";
// import { getUrl } from "./app/services/get-url";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get(process.env.PATHNAME_COOKIES || "");
//   const pathname = request.nextUrl.pathname;

//   if (pathname === "/" && token) {
//     return NextResponse.redirect(new URL(getUrl("/app/dashboard")));
//   }

//   if (pathname.includes("/app") && !token) {
//     return NextResponse.redirect(new URL(getUrl("/")));
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
