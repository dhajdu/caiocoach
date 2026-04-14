"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@supabase/supabase-js";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Download,
  LogOut,
} from "lucide-react";

const SUPABASE_URL = "https://pjecfbywrawpuutswvrb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_kYjgPfDeMaVSatFG12XGwA_3uy9YODL";
const TABLE = "retreat_participants";

const STATUS_OPTIONS = [
  "new",
  "contacted",
  "qualified",
  "waitlisted",
  "confirmed",
  "attended",
  "declined",
  "lost",
] as const;

type Status = (typeof STATUS_OPTIONS)[number];

const STATUS_COLORS: Record<Status, string> = {
  new: "bg-gray-400",
  contacted: "bg-blue",
  qualified: "bg-purple-500",
  waitlisted: "bg-amber-500",
  confirmed: "bg-emerald-500",
  attended: "bg-emerald-600",
  declined: "bg-gray-500",
  lost: "bg-red-500",
};

interface Participant {
  id: string;
  name: string;
  email: string;
  role: string;
  company: string;
  angle: string;
  region: string;
  ai_fluency: string;
  retreat_date: string;
  waitlist_june: boolean;
  notify_next_session: boolean;
  referral_source: string;
  lead_status: Status;
  lead_source: string;
  goal: string;
  notes: string;
  created_at: string;
}

function useSupabase() {
  return useMemo(
    () =>
      createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
        auth: { persistSession: true, autoRefreshToken: true },
      }),
    []
  );
}

// ── Login View ──────────────────────────────────────
function LoginView({
  onLogin,
}: {
  onLogin: (email: string) => void;
}) {
  const sb = useSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: err } = await sb.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (err) {
      setError(err.message || "Sign-in failed.");
      return;
    }

    onLogin(data.user.email || email);
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-[400px]">
        <CardContent className="p-8">
          <h2 className="text-[20px] font-bold text-foreground mb-1.5">
            Retreat Participants
          </h2>
          <p className="text-[13px] text-muted-foreground mb-5">
            Sign in to view and manage signups.
          </p>
          <form onSubmit={handleSubmit}>
            <label className="block text-[12px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-[15px] text-foreground mb-3.5 focus:outline-none focus:border-blue focus:bg-white transition-colors"
            />
            <label className="block text-[12px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-[15px] text-foreground mb-3.5 focus:outline-none focus:border-blue focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue text-white text-[14px] font-semibold py-3 rounded-lg hover:bg-blue/80 transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
            {error && (
              <div className="mt-2.5 p-2.5 bg-red-50 border border-red-200 rounded-lg text-red-800 text-[13px]">
                {error}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// ── Main dashboard ──────────────────────────────────
export default function ParticipantsDashboard() {
  const sb = useSupabase();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [rows, setRows] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(false);

  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterSearch, setFilterSearch] = useState("");
  const [sortKey, setSortKey] = useState<keyof Participant>("created_at");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Check session on mount
  useEffect(() => {
    sb.auth.getSession().then(({ data: { session } }) => {
      if (session) setUserEmail(session.user.email || "");
      setCheckingSession(false);
    });
  }, [sb]);

  // Load rows when authenticated
  useEffect(() => {
    if (userEmail) loadRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail]);

  async function loadRows() {
    setLoading(true);
    const { data, error } = await sb
      .from(TABLE)
      .select("*")
      .order("created_at", { ascending: false });

    setLoading(false);
    if (error) {
      console.error(error);
      return;
    }
    setRows((data as Participant[]) || []);
  }

  async function handleSignOut() {
    await sb.auth.signOut();
    setRows([]);
    setUserEmail(null);
    setSelectedId(null);
  }

  // Filtering + sorting
  const dateOptions = useMemo(() => {
    const dates = [...new Set(rows.map((r) => r.retreat_date).filter(Boolean))].sort();
    return dates;
  }, [rows]);

  const filteredRows = useMemo(() => {
    let result = rows;
    if (filterDate) result = result.filter((r) => r.retreat_date === filterDate);
    if (filterStatus) result = result.filter((r) => r.lead_status === filterStatus);
    if (filterSearch) {
      const q = filterSearch.toLowerCase();
      result = result.filter((r) => {
        const hay = [r.name, r.email, r.company, r.goal, r.notes]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
    }
    result = [...result].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return result;
  }, [rows, filterDate, filterStatus, filterSearch, sortKey, sortDir]);

  function handleSort(key: keyof Participant) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "created_at" ? "desc" : "asc");
    }
  }

  function exportCSV() {
    if (filteredRows.length === 0) return;
    const cols: (keyof Participant)[] = [
      "created_at",
      "name",
      "email",
      "role",
      "company",
      "angle",
      "region",
      "ai_fluency",
      "retreat_date",
      "waitlist_june",
      "notify_next_session",
      "referral_source",
      "lead_status",
      "lead_source",
      "goal",
      "notes",
    ];
    const csvCell = (v: unknown) => {
      if (v == null) return "";
      const s = String(v);
      if (s.includes(",") || s.includes('"') || s.includes("\n")) {
        return '"' + s.replace(/"/g, '""') + '"';
      }
      return s;
    };
    const header = cols.join(",");
    const body = filteredRows
      .map((r) => cols.map((c) => csvCell(r[c])).join(","))
      .join("\n");
    const csv = header + "\n" + body;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download =
      "retreat-participants-" + new Date().toISOString().slice(0, 10) + ".csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ── Detail view ──
  const selectedRow = selectedId
    ? rows.find((r) => r.id === selectedId) || null
    : null;

  const selectedIdx = selectedId
    ? filteredRows.findIndex((r) => r.id === selectedId)
    : -1;

  if (checkingSession) return null;
  if (!userEmail) return <LoginView onLogin={setUserEmail} />;

  // Detail view
  if (selectedRow) {
    return (
      <div className="min-h-screen px-4 md:px-6 py-10">
        <div className="max-w-[1400px] mx-auto">
          <DetailView
            row={selectedRow}
            index={selectedIdx}
            total={filteredRows.length}
            onBack={() => setSelectedId(null)}
            onPrev={() => {
              if (selectedIdx > 0)
                setSelectedId(filteredRows[selectedIdx - 1].id);
            }}
            onNext={() => {
              if (selectedIdx < filteredRows.length - 1)
                setSelectedId(filteredRows[selectedIdx + 1].id);
            }}
            onUpdate={(updated) => {
              setRows((prev) =>
                prev.map((r) => (r.id === updated.id ? updated : r))
              );
            }}
          />
        </div>
      </div>
    );
  }

  // List view
  return (
    <div className="min-h-screen px-4 md:px-6 py-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[28px] font-bold text-foreground tracking-tight leading-tight">
              Retreat Participants
            </h1>
            <p className="text-[13px] text-muted-foreground mt-1">
              Signed in as {userEmail}
            </p>
          </div>
          <div className="flex gap-2.5 items-center">
            <button
              onClick={loadRows}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg border border-border bg-white text-foreground hover:bg-surface transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Refresh
            </button>
            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg border border-border bg-white text-foreground hover:bg-surface transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg text-muted-foreground hover:bg-surface transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign out
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <Card className="rounded-b-none border-b-0">
          <CardContent className="p-3.5 flex flex-wrap gap-3 items-center">
            <div className="flex gap-2 items-center text-[13px] text-muted-foreground">
              <label htmlFor="fd">Retreat date</label>
              <select
                id="fd"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="text-[13px] px-2.5 py-1.5 border border-border rounded-md bg-white text-foreground focus:outline-none focus:border-blue"
              >
                <option value="">All</option>
                {dateOptions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 items-center text-[13px] text-muted-foreground">
              <label htmlFor="fs">Status</label>
              <select
                id="fs"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="text-[13px] px-2.5 py-1.5 border border-border rounded-md bg-white text-foreground focus:outline-none focus:border-blue"
              >
                <option value="">All</option>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 items-center text-[13px] text-muted-foreground">
              <label htmlFor="fq">Search</label>
              <input
                id="fq"
                type="text"
                value={filterSearch}
                onChange={(e) => setFilterSearch(e.target.value)}
                placeholder="Name, email, company..."
                className="text-[13px] px-2.5 py-1.5 border border-border rounded-md bg-white text-foreground focus:outline-none focus:border-blue min-w-[180px]"
              />
            </div>
            <div className="flex-1" />
            <span className="text-[13px] text-muted-foreground font-medium">
              {filteredRows.length} {filteredRows.length === 1 ? "row" : "rows"}
            </span>
          </CardContent>
        </Card>

        {/* Table */}
        <Card className="rounded-t-none overflow-auto">
          <table className="w-full border-collapse text-[13px]">
            <thead className="bg-surface sticky top-0 z-[2]">
              <tr>
                {(
                  [
                    ["name", "Name"],
                    ["email", "Email"],
                    ["role", "Role"],
                    ["company", "Company"],
                    ["angle", "Angle"],
                    ["referral_source", "How heard"],
                    ["lead_status", "Status"],
                  ] as [keyof Participant, string][]
                ).map(([key, label]) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key)}
                    className="text-left px-3.5 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border whitespace-nowrap cursor-pointer select-none hover:bg-surface/80"
                  >
                    {label}{" "}
                    <span
                      className={`text-[10px] ml-1 ${sortKey === key ? "text-blue opacity-100" : "opacity-40"}`}
                    >
                      {sortKey === key
                        ? sortDir === "asc"
                          ? "\u2191"
                          : "\u2193"
                        : "\u2195"}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && filteredRows.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-10 text-muted-foreground"
                  >
                    Loading...
                  </td>
                </tr>
              )}
              {!loading && filteredRows.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-10 text-muted-foreground"
                  >
                    No participants match your filters.
                  </td>
                </tr>
              )}
              {filteredRows.map((r) => (
                <tr
                  key={r.id}
                  onClick={() => setSelectedId(r.id)}
                  className="border-b border-border hover:bg-surface/50 cursor-pointer"
                >
                  <td className="px-3.5 py-3 whitespace-nowrap font-semibold">
                    {r.name}
                  </td>
                  <td className="px-3.5 py-3 whitespace-nowrap">{r.email}</td>
                  <td className="px-3.5 py-3">
                    {r.role && (
                      <Badge variant="secondary" className="text-[11px] capitalize">
                        {r.role}
                      </Badge>
                    )}
                  </td>
                  <td className="px-3.5 py-3">{r.company}</td>
                  <td className="px-3.5 py-3">
                    {r.angle && (
                      <Badge variant="secondary" className="text-[11px] capitalize">
                        {r.angle}
                      </Badge>
                    )}
                  </td>
                  <td className="px-3.5 py-3">{r.referral_source}</td>
                  <td className="px-3.5 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block w-2 h-2 rounded-full mr-1.5 ${STATUS_COLORS[r.lead_status || "new"]}`}
                    />
                    <InlineStatusSelect
                      value={r.lead_status || "new"}
                      onChange={async (newStatus) => {
                        const { error } = await sb
                          .from(TABLE)
                          .update({ lead_status: newStatus })
                          .eq("id", r.id);
                        if (!error) {
                          setRows((prev) =>
                            prev.map((row) =>
                              row.id === r.id
                                ? { ...row, lead_status: newStatus }
                                : row
                            )
                          );
                        }
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}

// ── Inline status select ────────────────────────────
function InlineStatusSelect({
  value,
  onChange,
}: {
  value: Status;
  onChange: (s: Status) => Promise<void>;
}) {
  const [saving, setSaving] = useState(false);

  return (
    <select
      value={value}
      onClick={(e) => e.stopPropagation()}
      onChange={async (e) => {
        const newVal = e.target.value as Status;
        setSaving(true);
        await onChange(newVal);
        setSaving(false);
      }}
      className={`text-[12px] font-semibold bg-transparent border border-transparent rounded-md px-1 py-0.5 focus:outline-none focus:border-blue transition-colors ${saving ? "bg-yellow-100 border-yellow-300" : ""}`}
    >
      {STATUS_OPTIONS.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}

// ── Detail view ─────────────────────────────────────
function DetailView({
  row,
  index,
  total,
  onBack,
  onPrev,
  onNext,
  onUpdate,
}: {
  row: Participant;
  index: number;
  total: number;
  onBack: () => void;
  onPrev: () => void;
  onNext: () => void;
  onUpdate: (updated: Participant) => void;
}) {
  const sb = useSupabase();
  const notesRef = useRef<HTMLTextAreaElement>(null);

  async function updateField(field: string, value: unknown) {
    const { error } = await sb
      .from(TABLE)
      .update({ [field]: value })
      .eq("id", row.id);
    if (!error) {
      onUpdate({ ...row, [field]: value } as Participant);
    }
  }

  const displayVal = (v: string | null | undefined) =>
    v ? v.replace(/_/g, " ") : "\u2014";

  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg border border-border bg-white text-foreground hover:bg-surface transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to list
        </button>
        <div className="flex items-center gap-2.5">
          <button
            onClick={onPrev}
            disabled={index <= 0}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg border border-border bg-white text-foreground hover:bg-surface transition-colors disabled:opacity-40"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Previous
          </button>
          <span className="font-mono text-[13px] text-muted-foreground min-w-[70px] text-center">
            {index + 1} of {total}
          </span>
          <button
            onClick={onNext}
            disabled={index >= total - 1}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg border border-border bg-white text-foreground hover:bg-surface transition-colors disabled:opacity-40"
          >
            Next
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <Card>
        <CardContent className="p-7 md:p-8">
          {/* Hero */}
          <div className="flex flex-wrap justify-between items-start gap-5 pb-5 mb-6 border-b border-border">
            <div>
              <h2 className="text-[24px] font-bold text-foreground tracking-tight mb-1">
                {row.name || "(no name)"}
              </h2>
              <p className="text-[13px] text-muted-foreground">
                {row.email && (
                  <a
                    href={`mailto:${row.email}`}
                    className="text-blue hover:underline"
                  >
                    {row.email}
                  </a>
                )}
                {row.created_at && (
                  <>
                    {" "}
                    &middot;{" "}
                    <span className="text-muted-foreground">
                      Signed up{" "}
                      {new Date(row.created_at).toLocaleString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </>
                )}
              </p>
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Status
              </label>
              <div className="inline-flex items-center gap-1.5 bg-surface border border-border rounded-lg px-3 py-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${STATUS_COLORS[row.lead_status || "new"]}`}
                />
                <select
                  value={row.lead_status || "new"}
                  onChange={(e) => updateField("lead_status", e.target.value)}
                  className="text-[13px] font-semibold bg-transparent border-none focus:outline-none"
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Detail grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
            {[
              ["Role", displayVal(row.role)],
              ["Company", displayVal(row.company)],
              ["Angle", displayVal(row.angle)],
              ["Region", displayVal(row.region)],
              ["AI fluency", displayVal(row.ai_fluency)],
              ["Retreat date", row.retreat_date || "\u2014"],
              [
                "Waitlist (Jun 19-21)",
                row.waitlist_june ? "Yes" : "No",
              ],
              [
                "Notify next session",
                row.notify_next_session ? "Yes" : "No",
              ],
              [
                "How heard",
                displayVal(row.referral_source),
              ],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  {label}
                </p>
                <p className="text-[14px] text-foreground font-medium">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Goal */}
          <div className="pt-5 mt-5 border-t border-border">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Goal
            </p>
            <p
              className={`text-[14px] leading-relaxed whitespace-pre-wrap ${row.goal?.trim() ? "text-foreground" : "text-muted-foreground italic"}`}
            >
              {row.goal?.trim() || "No goal shared."}
            </p>
          </div>

          {/* Notes */}
          <div className="pt-5 mt-5 border-t border-border">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Notes{" "}
              <span className="font-normal text-muted-foreground">
                (click to edit)
              </span>
            </p>
            <textarea
              ref={notesRef}
              defaultValue={row.notes || ""}
              placeholder="Add a note about this person..."
              onBlur={(e) => {
                const newNotes = e.target.value;
                if ((row.notes || "") !== newNotes) {
                  updateField("notes", newNotes);
                }
              }}
              className="w-full min-h-[90px] bg-surface border border-border rounded-lg px-3.5 py-3 text-[14px] text-foreground leading-relaxed resize-y focus:outline-none focus:border-blue focus:bg-white transition-colors"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
