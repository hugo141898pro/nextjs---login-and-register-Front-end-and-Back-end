export {default} from 'next-auth/middleware';

export const config = { matcher: ["/dashboard/:path*"] }

/*
import {NextResponse} from 'next/server'

export function middleware(Request: request){
    return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
    matcher: ["/dashboard"]
}



*/