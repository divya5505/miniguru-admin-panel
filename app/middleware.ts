// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { adminAuthGuard } from '@/utils/authGuard';

export function middleware(request: NextRequest) {
  // Public routes that don't require authentication
  const publicPaths = ['/login', '/unauthorized'];

  // Skip authentication for public paths
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Check for admin authentication on protected routes
  if (request.nextUrl.pathname.startsWith('/users')) {
    return adminAuthGuard(request) || NextResponse.next();
  }

  return NextResponse.next();
}

// Specify which routes to protect
export const config = {
  matcher: ['/users', '/users/:path*', '/dashboard']
}