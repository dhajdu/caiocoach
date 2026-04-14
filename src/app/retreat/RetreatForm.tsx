"use client";

import { useState, useRef, FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";

const ERRORS: Record<string, string> = {
  name: "We'll need your name so we can say hi.",
  email: "Drop your email so we can get back to you.",
  emailFormat: "That email doesn't look quite right. Mind double-checking?",
  role: "Let us know which one fits you best.",
  company: "What company are you with? If you're between things, any name is fine.",
  retreat_date: "Pick the retreat you're interested in.",
  angle: "Pick the angle that pulls you most. Or both.",
  region: "Let us know how you feel about traveling.",
  ai_fluency: "Give us a sense of where you're at with AI. No wrong answer.",
  goal: "Tell us the one thing you'd love to walk out with.",
  interest: "Tick at least one so we know how to keep you in the loop.",
};

export default function RetreatForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(fd: FormData): Record<string, string> {
    const errors: Record<string, string> = {};
    const check = (name: string, errorKey: string, extraCheck?: (v: string) => string | null) => {
      const val = (fd.get(name) || "").toString().trim();
      if (!val) {
        errors[name] = ERRORS[errorKey];
        return;
      }
      if (extraCheck) {
        const extra = extraCheck(val);
        if (extra) errors[name] = extra;
      }
    };

    check("name", "name");
    check("email", "email", (v) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : ERRORS.emailFormat;
    });
    check("role", "role");
    check("company", "company");
    check("retreat_date", "retreat_date");
    check("angle", "angle");
    check("region", "region");
    check("ai_fluency", "ai_fluency");
    check("goal", "goal");

    const waitlist = fd.get("waitlist_june") === "yes";
    const notify = fd.get("notify_next_session") === "yes";
    if (!waitlist && !notify) {
      errors["interest"] = ERRORS.interest;
    }

    return errors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    const errors = validate(fd);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      const firstKey = Object.keys(errors)[0];
      const el = formRef.current.querySelector(`[data-field="${firstKey}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        const focusable = el.querySelector("input, select, textarea") as HTMLElement | null;
        if (focusable) setTimeout(() => focusable.focus({ preventScroll: true }), 300);
      }
      return;
    }

    setSubmitting(true);

    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      role: fd.get("role"),
      company: fd.get("company") || null,
      angle: fd.get("angle"),
      region: fd.get("region"),
      ai_fluency: fd.get("ai_fluency"),
      retreat_date: fd.get("retreat_date"),
      waitlist_june: fd.get("waitlist_june") === "yes",
      notify_next_session: fd.get("notify_next_session") === "yes",
      goal: fd.get("goal") || null,
      referral_source: fd.get("how_heard") || null,
      lead_status: "new",
      lead_source: "retreat_page",
    };

    try {
      const res = await fetch("https://www.ai-officer.com/api/notify-retreat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Server error");
    } catch (err) {
      console.error("[retreat form] submit failed", err);
      setSubmitting(false);
      alert(
        "Sorry, something went wrong saving your details. Please try again, or email dave@edge8.ai."
      );
      return;
    }

    setSuccess(true);
  }

  function clearFieldError(name: string) {
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  if (success) {
    return (
      <Card>
        <CardContent className="p-8 text-center bg-mint-dark/[0.08] border-mint-dark/30">
          <div className="text-[32px] mb-3">&#10003;</div>
          <h3 className="text-[20px] font-bold text-foreground mb-2">
            You&apos;re in the loop.
          </h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[480px] mx-auto">
            Thanks, we&apos;ll be in touch as the June 19 to 21, 2026 cohort
            firms up. In the meantime, reply to any email from us with questions.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6 md:p-9">
        <p className="text-[14px] text-muted-foreground leading-relaxed mb-6 max-w-[560px]">
          Seats are capped at 30 for the June 19 to 21, 2026 cohort. Drop your
          details and we&apos;ll be in touch as the programme firms up. Takes about
          90 seconds.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* Name */}
            <FormField
              name="name"
              label="Your name"
              error={fieldErrors.name}
              onClear={() => clearFieldError("name")}
            >
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Jane Doe"
                className="w-full bg-surface border border-border rounded-lg px-3.5 py-3 text-[14px] text-foreground focus:outline-none focus:border-blue focus:bg-white transition-colors"
                onChange={() => clearFieldError("name")}
              />
            </FormField>

            {/* Email */}
            <FormField
              name="email"
              label="Email"
              error={fieldErrors.email}
              onClear={() => clearFieldError("email")}
            >
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full bg-surface border border-border rounded-lg px-3.5 py-3 text-[14px] text-foreground focus:outline-none focus:border-blue focus:bg-white transition-colors"
                onChange={() => clearFieldError("email")}
              />
            </FormField>

            {/* Role */}
            <FormField
              name="role"
              label="Are you a..."
              error={fieldErrors.role}
              onClear={() => clearFieldError("role")}
              full
            >
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "founder", label: "Founder" },
                  { value: "executive", label: "Executive" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="inline-flex items-center gap-1.5 bg-surface border border-border rounded-lg px-4 py-2.5 text-[13px] font-semibold text-muted-foreground cursor-pointer transition-colors has-[:checked]:bg-navy has-[:checked]:border-navy has-[:checked]:text-white"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={opt.value}
                      required
                      className="sr-only"
                      onChange={() => clearFieldError("role")}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </FormField>

            {/* Company */}
            <FormField
              name="company"
              label="Company name"
              error={fieldErrors.company}
              onClear={() => clearFieldError("company")}
              full
            >
              <input
                type="text"
                name="company"
                required
                autoComplete="organization"
                placeholder="Acme Inc."
                className="w-full bg-surface border border-border rounded-lg px-3.5 py-3 text-[14px] text-foreground focus:outline-none focus:border-blue focus:bg-white transition-colors"
                onChange={() => clearFieldError("company")}
              />
            </FormField>

            {/* Retreat date */}
            <FormField
              name="retreat_date"
              label="Retreat date"
              error={fieldErrors.retreat_date}
              onClear={() => clearFieldError("retreat_date")}
              full
            >
              <select
                name="retreat_date"
                required
                defaultValue="2026-06-19-nha-trang"
                className="w-full bg-surface border border-border rounded-lg px-3.5 py-3 text-[14px] text-foreground focus:outline-none focus:border-blue focus:bg-white transition-colors"
                onChange={() => clearFieldError("retreat_date")}
              >
                <option value="2026-06-19-nha-trang">
                  June 19 to 21, 2026 &middot; Nha Trang
                </option>
              </select>
            </FormField>

            {/* Angle */}
            <FormField
              name="angle"
              label="Which angle is most interesting to you?"
              error={fieldErrors.angle}
              onClear={() => clearFieldError("angle")}
              full
            >
              <div className="flex flex-col gap-2.5">
                {[
                  { value: "build", label: "Begin working on a brand new AI-first company" },
                  { value: "reinvent", label: "Help me re-imagine a department's operations" },
                  { value: "both", label: "Or both" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-[13px] font-semibold text-muted-foreground cursor-pointer transition-colors has-[:checked]:bg-navy has-[:checked]:border-navy has-[:checked]:text-white"
                  >
                    <input
                      type="radio"
                      name="angle"
                      value={opt.value}
                      required
                      className="sr-only"
                      onChange={() => clearFieldError("angle")}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </FormField>

            {/* Region */}
            <FormField
              name="region"
              label="Preferred region"
              error={fieldErrors.region}
              onClear={() => clearFieldError("region")}
              full
            >
              <div className="flex flex-col gap-2.5">
                {[
                  { value: "excited_to_travel", label: "Traveling to a destination would allow me to focus" },
                  { value: "close_to_home", label: "I would prefer to do something closer to home" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-[13px] font-semibold text-muted-foreground cursor-pointer transition-colors has-[:checked]:bg-navy has-[:checked]:border-navy has-[:checked]:text-white"
                  >
                    <input
                      type="radio"
                      name="region"
                      value={opt.value}
                      required
                      className="sr-only"
                      onChange={() => clearFieldError("region")}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </FormField>

            {/* AI fluency */}
            <FormField
              name="ai_fluency"
              label="What's your AI fluency?"
              error={fieldErrors.ai_fluency}
              onClear={() => clearFieldError("ai_fluency")}
              full
            >
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "newbie", label: "Newbie" },
                  { value: "writing_prompts", label: "Writing prompts" },
                  { value: "built_agents", label: "Built agents" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="inline-flex items-center gap-1.5 bg-surface border border-border rounded-lg px-4 py-2.5 text-[13px] font-semibold text-muted-foreground cursor-pointer transition-colors has-[:checked]:bg-navy has-[:checked]:border-navy has-[:checked]:text-white"
                  >
                    <input
                      type="radio"
                      name="ai_fluency"
                      value={opt.value}
                      required
                      className="sr-only"
                      onChange={() => clearFieldError("ai_fluency")}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </FormField>

            {/* Goal */}
            <FormField
              name="goal"
              label="What's the #1 thing you'd want to walk out with?"
              error={fieldErrors.goal}
              onClear={() => clearFieldError("goal")}
              full
            >
              <textarea
                name="goal"
                required
                placeholder="e.g. A deployed marketing-ops agent, a hired AI engineer, a validated product idea..."
                className="w-full bg-surface border border-border rounded-lg px-3.5 py-3 text-[14px] text-foreground focus:outline-none focus:border-blue focus:bg-white transition-colors resize-y min-h-[90px] leading-relaxed"
                onChange={() => clearFieldError("goal")}
              />
            </FormField>

            {/* How heard */}
            <FormField
              name="how_heard"
              label="How did you hear about us?"
              error={fieldErrors.how_heard}
              onClear={() => clearFieldError("how_heard")}
              full
            >
              <select
                name="how_heard"
                required
                defaultValue=""
                className="w-full bg-surface border border-border rounded-lg px-3.5 py-3 text-[14px] text-foreground focus:outline-none focus:border-blue focus:bg-white transition-colors"
                onChange={() => clearFieldError("how_heard")}
              >
                <option value="" disabled>
                  Select one...
                </option>
                <option value="linkedin">LinkedIn</option>
                <option value="twitter">Twitter / X</option>
                <option value="friend_colleague">Friend or colleague</option>
                <option value="podcast">Podcast</option>
                <option value="search">Google / Search</option>
                <option value="event">Event or conference</option>
                <option value="newsletter">Newsletter</option>
                <option value="other">Other</option>
              </select>
            </FormField>

            {/* Interest checkboxes */}
            <FormField
              name="interest"
              label=""
              error={fieldErrors.interest}
              onClear={() => clearFieldError("interest")}
              full
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex items-start gap-3 p-3.5 bg-surface border border-border rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    name="waitlist_june"
                    value="yes"
                    className="w-[18px] h-[18px] mt-0.5 accent-blue flex-shrink-0"
                    onChange={() => clearFieldError("interest")}
                  />
                  <span>
                    <span className="text-[13px] font-semibold text-foreground block">
                      Put me on the June 19 to 21 waitlist
                    </span>
                    <span className="text-[12px] text-muted-foreground block mt-0.5">
                      First cohort, 30 seats, Nha Trang.
                    </span>
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3.5 bg-surface border border-border rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    name="notify_next_session"
                    value="yes"
                    className="w-[18px] h-[18px] mt-0.5 accent-blue flex-shrink-0"
                    onChange={() => clearFieldError("interest")}
                  />
                  <span>
                    <span className="text-[13px] font-semibold text-foreground block">
                      Notify me when the next session is ready
                    </span>
                    <span className="text-[12px] text-muted-foreground block mt-0.5">
                      We&apos;ll email you when future cohorts open.
                    </span>
                  </span>
                </label>
              </div>
            </FormField>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-1.5 bg-navy text-white text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-blue transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Saving..." : "Send it \u2192"}
            </button>
            <span className="text-[12px] text-muted-foreground leading-relaxed">
              We&apos;ll never share your info. One email when the cohort opens.
            </span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function FormField({
  name,
  label,
  error,
  full,
  children,
}: {
  name: string;
  label: string;
  error?: string;
  onClear: () => void;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      data-field={name}
      className={`flex flex-col ${full ? "md:col-span-2" : ""}`}
    >
      {label && (
        <label className="text-[12px] font-bold text-foreground tracking-wide mb-2">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p className="text-[13px] text-red-700 mt-1.5 leading-snug">{error}</p>
      )}
    </div>
  );
}
