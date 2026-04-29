import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Click logger. Called by the proxy whenever a request arrives with ?ref=.
// Writes to the shared affiliate_clicks table (owned by aio-website).

export async function POST(request: NextRequest) {
  let body: {
    code?: unknown;
    visitor_id?: unknown;
    source_site?: unknown;
    landing_path?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }

  const code = typeof body.code === 'string' ? body.code.trim() : '';
  if (!code) {
    return NextResponse.json({ error: 'code required' }, { status: 400 });
  }

  const visitorId = typeof body.visitor_id === 'string' ? body.visitor_id : null;
  const sourceSite = typeof body.source_site === 'string' ? body.source_site : null;
  const landingPath = typeof body.landing_path === 'string' ? body.landing_path : null;
  const userAgent = request.headers.get('user-agent');
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : null;

  const { data: affiliate } = await supabase
    .from('affiliates')
    .select('id')
    .ilike('code', code)
    .maybeSingle();

  const { error } = await supabase.from('affiliate_clicks').insert({
    affiliate_id: affiliate?.id ?? null,
    code,
    visitor_id: visitorId,
    source_site: sourceSite,
    landing_path: landingPath,
    user_agent: userAgent,
    ip,
  });

  if (error) {
    console.error('[affiliate-click] insert failed:', error.message);
    return NextResponse.json({ error: 'insert failed' }, { status: 500 });
  }

  return new NextResponse(null, { status: 204 });
}
