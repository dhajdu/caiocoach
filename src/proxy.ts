import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  AFF_REF_COOKIE,
  AFF_VISITOR_COOKIE,
  AFF_COOKIE_MAX_AGE_SECONDS,
} from '@/lib/affiliate-constants';

const AFF_COOKIE_OPTS = {
  httpOnly: true,
  secure: true,
  sameSite: 'lax' as const,
  path: '/',
  maxAge: AFF_COOKIE_MAX_AGE_SECONDS,
};

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const response = NextResponse.next({ request: { headers: request.headers } });

  const ref = searchParams.get('ref');
  if (!ref || !ref.trim()) return response;

  const code = ref.trim().slice(0, 64);
  response.cookies.set(AFF_REF_COOKIE, code, AFF_COOKIE_OPTS);

  let visitorId = request.cookies.get(AFF_VISITOR_COOKIE)?.value;
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    response.cookies.set(AFF_VISITOR_COOKIE, visitorId, AFF_COOKIE_OPTS);
  }

  // Fire the click logger. Awaited so the click is recorded before the
  // proxy returns — adds latency only on requests with ?ref=, which is rare.
  try {
    await fetch(`${request.nextUrl.origin}/api/affiliate/click`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': request.headers.get('user-agent') ?? '',
        'x-forwarded-for': request.headers.get('x-forwarded-for') ?? '',
      },
      body: JSON.stringify({
        code,
        visitor_id: visitorId,
        source_site: request.nextUrl.host,
        landing_path: pathname,
      }),
    });
  } catch (err) {
    console.error('[proxy] affiliate click fetch failed:', err);
  }

  return response;
}

export const config = {
  matcher: [
    // All paths except Next internals, favicon, and api routes.
    '/((?!_next/static|_next/image|favicon\\.ico|api/).*)',
  ],
};
