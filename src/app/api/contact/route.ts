import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendLarkMessage } from '@/lib/lark';

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

    const { data: inquiryId, error } = await supabase.rpc('submit_inquiry', {
      p_name: name,
      p_email: email,
      p_type: type,
      p_phone: phone,
      p_company: company,
      p_role: role,
      p_subject: subjectFor(type),
      p_message: message,
      p_source: 'contact_page_caiocoach',
      p_source_site: 'caiocoach.com',
    });

    if (error) {
      console.error('[contact] submit_inquiry failed', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

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
