import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import { sendLarkMessage } from "@/lib/lark";
import { resolveAffiliate, AFF_REF_COOKIE } from "@/lib/affiliate";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const email = String(body.email || "").trim();
    const source = String(body.source || "caiocoach_newsletter").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 }
      );
    }

    const manualCode = typeof body.ref_code === "string" ? body.ref_code : null;
    const cookieStore = await cookies();
    const resolved = await resolveAffiliate(manualCode ?? cookieStore.get(AFF_REF_COOKIE)?.value);

    const { data: inquiryId, error } = await supabase.rpc("submit_inquiry", {
      p_name: email.split("@")[0],
      p_email: email,
      p_type: "newsletter",
      p_subject: "Newsletter signup",
      p_message: "50/50 memo subscription",
      p_source: source,
      p_source_site: "caiocoach.com",
      p_affiliate_id: resolved?.affiliate.id ?? null,
    });

    if (error) {
      console.error("[newsletter-signup] submit_inquiry failed", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const notification = [
      "📬 New 50/50 Memo Signup (caiocoach.com)",
      `Email: ${email}`,
      `Source: ${source}`,
      `Inquiry ID: ${inquiryId}`,
    ].join("\n");

    await sendLarkMessage(notification).catch(() => {
      /* non-fatal */
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter-signup] failed", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
