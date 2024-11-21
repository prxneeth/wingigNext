import { NextResponse } from "next/server";
import { getUserMeLoader } from "./app/services/get-user-me-loader";

const protectedRoutes = [
    "/dashboard",

];

function isProtectedRoute(path) {
    return protectedRoutes.some((route) => path.startsWith(route));
}


export async function middleware(request) {
    const user = await getUserMeLoader();
    const currentPath = request.nextUrl.pathname;

    // console.log("#################")
    // console.log(user)
    // console.log(currentPath)
    // console.log("#################")


    if (isProtectedRoute(currentPath) && user.ok === false) {
        return NextResponse.redirect(new URL("/seekerLogin", request.url));
    }

    return NextResponse.next();
}




// Optionally, you can add a matcher to optimize performance
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
