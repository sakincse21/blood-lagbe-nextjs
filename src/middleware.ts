import {  clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)'
])

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();
  console.log(userId);
  
  const currentUrl = new URL(request.url);
  if(userId && isPublicRoute(request)){
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  // if (!isPublicRoute(request)) {
  //   await auth.protect()
  // }
  if(currentUrl.pathname === '/dashboard' && !userId){
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }
  if(currentUrl.pathname === '/api/donors' && !userId){
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }
  return NextResponse.next();
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
