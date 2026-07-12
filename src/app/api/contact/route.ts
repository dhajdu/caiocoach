import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { companyOs } from '@/lib/supabase';
import { getOrCreatePerson } from '@/lib/company-os';
import { sendLarkMessage } from '@/lib/lark';
import { resolveAffiliate, AFF_REF_COOKIE } from '@/lib/affiliate';

const INTEREST_TYPES = [
  'consultation',
  'coaching',
  'keynote',
  'retreat',
  'general',
] as const;

type InterestType = (typeof INTEREST_TYPES)[number];

function normalizeType(value: unknown): InterestType {
  const v = String(value || 'general').toLowerCase();
  return (INTEREST_TYPES as readonly string[]).includes(v)
    ? (v as InterestType)
    : 'general';
}

function subjectFor(type: InterestType): string {
  switch (type) {
    case 'consultation':
      return 'Consultation inquiry';
    case 'coaching':
      return 'Coaching inquiry';
    case 'keynote':
      return 'Keynote speaking inquiry';
    case 'retreat':
      return 'AI retreat inquiry';
    default:
      return 'General inquiry';
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = body.phone ? String(body.phone).trim() : null;
    const company = body.company ? String(body.company).trim() : null;
    const role = body.role ? String(body.role).trim() : null;
    const message = body.message ? String(body.message).trim() : null;
    const type = normalizeType(body.type);

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Name and a valid email are required' },
        { status: 400 }
      );
    }

    const manualCode = typeof body.ref_code === 'string' ? body.ref_code : null;
    const cookieStore = await cookies();
    const resolved = await resolveAffiliate(manualCode ?? cookieStore.get(AFF_REF_COOKIE)?.value);

    const person = await getOrCreatePerson({
      email,
      name,
      phone,
      source: 'caiocoach.com',
    });
    if (!person.ok) {
      console.error('[contact] getOrCreatePerson failed', person.error);
      return NextResponse.json({ error: person.error }, { status: 500 });
    }

    const { data: inquiry, error } = await companyOs
      .from('inquiries')
      .insert({
        person_id: person.id,
        type,
        subject: subjectFor(type),
        message,
        source: 'contact_page_caiocoach',
        source_site: 'caiocoach.com',
        status: 'new_lead',
        metadata: {
          company,
          role,
          // Affiliate codes aren't resolved to a company_os affiliate id yet
          // (caio-coach's affiliate data hasn't been migrated there) -
          // kept here as text so nothing is lost.
          affiliate_code: resolved?.affiliate.code_discount ?? manualCode ?? null,
        },
      })
      .select('id')
      .single();

    if (error) {
      console.error('[contact] inquiries insert failed', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    const inquiryId = inquiry.id;

    const notification = [
      `📨 New contact inquiry (caiocoach.com · ${type})`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      role ? `Role: ${role}` : null,
      message ? `Message: ${message}` : null,
      `Inquiry ID: ${inquiryId}`,
    ]
      .filter(Boolean)
      .join('\n');

    await sendLarkMessage(notification).catch(() => {
      /* non-fatal */
    });

    return NextResponse.json({ ok: true, id: inquiryId });
  } catch (err) {
    console.error('[contact] failed', err);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
