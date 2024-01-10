// import { NextRequest, NextResponse } from 'next/server';

// const isAuthPaths = (path: string) => ['/Login'].some((e) => path.includes(e));

// export async function middleware(request: NextRequest) {
//   if (!request.cookies.get('token')?.value) {
//     if (!isAuthPaths(request.nextUrl.pathname)) {
//       return NextResponse.redirect(new URL('/Login', request.url));
//     }
//   } else {
//     if (isAuthPaths(request.nextUrl.pathname)) {
//       return NextResponse.redirect(new URL('/', request.url));
//     }

//     if (request.nextUrl.pathname === '/api/logout') {
//       const res = NextResponse.redirect(new URL('/Login', request.url), {
//         status: 301,
//       });
//       res.cookies.delete('token');
//       return res;
//     }
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/', '/Login', '/api/logout'],
// };
