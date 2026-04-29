import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import { sendLarkMessage } from "@/lib/lark";
import { resolveAffiliate, AFF_REF_COOKIE } from "@/lib/affiliate";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.session_date || !body.topic) {
      return NextResponse.json(
        { error: "Name, email, session date, and topic are required" },
        { status: 400 }
      );
    }

    const manualCode = typeof body.ref_code === "string" ? body.ref_code : null;
    const cookieStore = await cookies();
    const affiliate = await resolveAffiliate(manualCode ?? cookieStore.get(AFF_REF_COOKIE)?.value);

    const { data: inquiryId, error } = await supabase.rpc("submit_inquiry", {
      p_name: body.name,
      p_email: body.email,
      p_type: "coaching",
      p_subject: "Coaching Session Signup",
      p_message: body.topic,
      p_source: "coaching_page_caiocoach",
      p_source_site: "caiocoach.com",
      p_date_requested: body.session_date,
      p_affiliate_id: affiliate?.id ?? null,
    });

    if (error) {
      console.error("[coaching-signup] submit_inquiry failed", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const readableDate = new Date(body.session_date).toLocaleString("en-US", {
      timeZone: "Asia/Bangkok",
      dateStyle: "full",
      timeStyle: "short",
    });

    const notification = [
      "🎯 New Coaching Signup (caiocoach.com)",
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Session: ${readableDate} GMT+7`,
      `Topic: ${body.topic}`,
      `Inquiry ID: ${inquiryId}`,
    ].join("\n");

    await sendLarkMessage(notification);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[coaching-signup] failed", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
