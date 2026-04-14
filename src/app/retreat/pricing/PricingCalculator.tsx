"use client";

import { useState, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

interface CityInputs {
  hotel: number;
  fb: number;
  transport: number;
  activities: number;
  swag: number;
  engFlights: number;
  engHotel: number;
  venue: number;
  av: number;
  staffCount: number;
  staffRate: number;
}

const defaultCity: CityInputs = {
  hotel: 150,
  fb: 50,
  transport: 150,
  activities: 50,
  swag: 75,
  engFlights: 100,
  engHotel: 50,
  venue: 500,
  av: 500,
  staffCount: 2,
  staffRate: 500,
};

function fmt(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function calcCity(
  c: CityInputs,
  attendees: number,
  engineers: number,
  nights: number,
  days: number,
  ticket: number,
  commPct: number,
  contPct: number
) {
  const grossRevenue = attendees * ticket;
  const commission = grossRevenue * commPct;
  const netRevenue = grossRevenue - commission;

  const attHotel = attendees * c.hotel * nights;
  const attFB = attendees * c.fb * days;
  const attTransport = attendees * c.transport * 2;
  const attActivities = attendees * c.activities * 2;
  const attSwag = attendees * c.swag;
  const attendeeCost = attHotel + attFB + attTransport + attActivities + attSwag;

  const engFlightsCost = engineers * c.engFlights;
  const engHotelCost = engineers * c.engHotel * nights;
  const engFB = engineers * c.fb * days;
  const engActivities = engineers * c.activities * 2;
  const engineerCost = engFlightsCost + engHotelCost + engFB + engActivities;

  const venueCost = c.venue * days;
  const avCost = c.av * days;
  const staffCost = c.staffCount * c.staffRate;
  const fixedCost = venueCost + avCost + staffCost;

  const subtotal = attendeeCost + engineerCost + fixedCost;
  const contingency = subtotal * contPct;
  const totalCost = subtotal + contingency;
  const profit = netRevenue - totalCost;
  const margin = netRevenue > 0 ? (profit / netRevenue) * 100 : 0;
  const costPerAttendee = attendees > 0 ? totalCost / attendees : 0;

  return {
    grossRevenue,
    commission,
    netRevenue,
    attendeeCost,
    engineerCost,
    fixedCost,
    subtotal,
    contingency,
    totalCost,
    profit,
    margin,
    costPerAttendee,
  };
}

function NumberInput({
  value,
  onChange,
  narrow,
  wide,
}: {
  value: number;
  onChange: (n: number) => void;
  narrow?: boolean;
  wide?: boolean;
}) {
  const w = narrow ? "w-14" : wide ? "w-24" : "w-20";
  return (
    <input
      type="number"
      value={value}
      min={0}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      className={`${w} bg-surface border border-border rounded-md px-2 py-1 font-mono text-[13px] text-foreground text-right focus:outline-none focus:border-blue focus:bg-white transition-colors`}
    />
  );
}

function CostRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center py-1.5 text-[13px] text-muted-foreground">
      <span className="flex-1">{label}</span>
      <div className="flex items-center justify-end gap-0.5 min-w-[200px] text-right">
        {children}
      </div>
    </div>
  );
}

function CostSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground mb-2.5 pb-1.5 border-b border-border">
        {title}
      </div>
      {children}
    </div>
  );
}

function SummaryRow({
  label,
  value,
  isTotal,
  isProfit,
}: {
  label: string;
  value: string;
  isTotal?: boolean;
  isProfit?: number;
}) {
  const totalCls = isTotal
    ? "border-t-2 border-navy mt-2 pt-2.5 font-bold text-foreground text-[14px]"
    : "";
  const profitCls =
    isProfit !== undefined
      ? isProfit >= 0
        ? "text-green-600"
        : "text-red-600"
      : "";
  return (
    <div
      className={`flex justify-between items-center py-1 text-[13px] text-muted-foreground ${totalCls}`}
    >
      <span>{label}</span>
      <span className={`font-mono text-[13px] font-semibold text-foreground ${profitCls}`}>
        {value}
      </span>
    </div>
  );
}

export default function PricingCalculator() {
  const [attendees, setAttendees] = useState(30);
  const [ticket, setTicket] = useState(3000);
  const [commissionPct, setCommissionPct] = useState(20);
  const [engineers, setEngineers] = useState(10);
  const [nights, setNights] = useState(2);
  const [days, setDays] = useState(3);
  const [contingencyPct, setContingencyPct] = useState(10);

  const [sg, setSg] = useState<CityInputs>({ ...defaultCity });
  const [nt, setNt] = useState<CityInputs>({ ...defaultCity });

  const updateSg = useCallback(
    (key: keyof CityInputs, val: number) => setSg((prev) => ({ ...prev, [key]: val })),
    []
  );
  const updateNt = useCallback(
    (key: keyof CityInputs, val: number) => setNt((prev) => ({ ...prev, [key]: val })),
    []
  );

  const commPct = commissionPct / 100;
  const contPct = contingencyPct / 100;

  const sgTotals = useMemo(
    () => calcCity(sg, attendees, engineers, nights, days, ticket, commPct, contPct),
    [sg, attendees, engineers, nights, days, ticket, commPct, contPct]
  );
  const ntTotals = useMemo(
    () => calcCity(nt, attendees, engineers, nights, days, ticket, commPct, contPct),
    [nt, attendees, engineers, nights, days, ticket, commPct, contPct]
  );

  function exportCSV() {
    const summaryKeys = [
      ["Gross Revenue", "grossRevenue"],
      ["Referral Commission", "commission"],
      ["Net Revenue", "netRevenue"],
      ["Attendee Costs", "attendeeCost"],
      ["Engineer Costs", "engineerCost"],
      ["Fixed Costs", "fixedCost"],
      ["Subtotal Costs", "subtotal"],
      ["Contingency", "contingency"],
      ["Total Costs", "totalCost"],
      ["Profit", "profit"],
      ["Margin", "margin"],
      ["Cost per Attendee", "costPerAttendee"],
    ] as const;

    const rows: string[][] = [
      ["Retreat Price Model", "", ""],
      ["", "Saigon", "Nha Trang"],
      [""],
      ["P&L SUMMARY", "Saigon", "Nha Trang"],
    ];

    for (const [label, key] of summaryKeys) {
      const sgVal = key === "margin" ? sgTotals[key].toFixed(1) + "%" : fmt(sgTotals[key as keyof typeof sgTotals] as number);
      const ntVal = key === "margin" ? ntTotals[key].toFixed(1) + "%" : fmt(ntTotals[key as keyof typeof ntTotals] as number);
      rows.push([label, sgVal, ntVal]);
    }

    const csv = rows
      .map((r) => r.map((c) => '"' + String(c).replace(/"/g, '""') + '"').join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "retreat-pricing-model.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  function renderCityCard(
    title: string,
    city: CityInputs,
    update: (key: keyof CityInputs, val: number) => void
  ) {
    return (
      <Card className="overflow-hidden">
        <div className="bg-navy text-white px-5 py-4 text-[16px] font-bold tracking-tight">
          {title}
        </div>
        <CardContent className="p-5">
          <CostSection title="Attendee Costs (per person)">
            <CostRow label="Hotel">
              <span className="text-muted-foreground">$</span>
              <NumberInput value={city.hotel} onChange={(v) => update("hotel", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">/night</span>
            </CostRow>
            <CostRow label="Food & Drink">
              <span className="text-muted-foreground">$</span>
              <NumberInput value={city.fb} onChange={(v) => update("fb", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">/day</span>
            </CostRow>
            <CostRow label="Transport + VIP Immigration">
              <span className="text-muted-foreground">$</span>
              <NumberInput value={city.transport} onChange={(v) => update("transport", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">&times; 2 ways</span>
            </CostRow>
            <CostRow label="Activities (after dinner)">
              <span className="text-muted-foreground">$</span>
              <NumberInput value={city.activities} onChange={(v) => update("activities", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">/night &times; 2</span>
            </CostRow>
            <CostRow label="Swag Bag">
              <span className="text-muted-foreground">$</span>
              <NumberInput value={city.swag} onChange={(v) => update("swag", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">/person</span>
            </CostRow>
          </CostSection>

          <CostSection title="Engineer Costs (per engineer)">
            <CostRow label="Flights">
              <span className="text-muted-foreground">$</span>
              <NumberInput value={city.engFlights} onChange={(v) => update("engFlights", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">/each</span>
            </CostRow>
            <CostRow label="Hotel">
              <span className="text-muted-foreground">$</span>
              <NumberInput value={city.engHotel} onChange={(v) => update("engHotel", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">/night</span>
            </CostRow>
          </CostSection>

          <CostSection title="Fixed Costs (flat)">
            <CostRow label="Venue / Conference Room">
              <span className="text-muted-foreground">$</span>
              <NumberInput value={city.venue} onChange={(v) => update("venue", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">/day</span>
            </CostRow>
            <CostRow label="AV / Tech Equipment">
              <span className="text-muted-foreground">$</span>
              <NumberInput value={city.av} onChange={(v) => update("av", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">/day</span>
            </CostRow>
            <CostRow label="Staff Assistants">
              <NumberInput narrow value={city.staffCount} onChange={(v) => update("staffCount", v)} />
              <span className="text-[11px] text-muted-foreground mx-1">ppl &times; $</span>
              <NumberInput value={city.staffRate} onChange={(v) => update("staffRate", v)} />
              <span className="text-[11px] text-muted-foreground ml-1">each</span>
            </CostRow>
          </CostSection>
        </CardContent>
      </Card>
    );
  }

  function renderTotalsCol(title: string, t: ReturnType<typeof calcCity>) {
    return (
      <div className="p-5">
        <h4 className="text-[13px] font-bold text-foreground mb-3">{title}</h4>
        <SummaryRow label="Gross Revenue" value={fmt(t.grossRevenue)} />
        <SummaryRow label="Referral Commission" value={"(" + fmt(t.commission) + ")"} />
        <SummaryRow label="Net Revenue" value={fmt(t.netRevenue)} />
        <div className="mt-2">
          <SummaryRow label="Attendee Costs" value={fmt(t.attendeeCost)} />
          <SummaryRow label="Engineer Costs" value={fmt(t.engineerCost)} />
          <SummaryRow label="Fixed Costs" value={fmt(t.fixedCost)} />
          <SummaryRow label="Subtotal Costs" value={fmt(t.subtotal)} />
          <SummaryRow label="Contingency" value={fmt(t.contingency)} />
        </div>
        <SummaryRow label="Total Costs" value={fmt(t.totalCost)} isTotal />
        <SummaryRow
          label="Profit"
          value={fmt(t.profit)}
          isTotal
          isProfit={t.profit}
        />
        <SummaryRow
          label="Margin"
          value={t.margin.toFixed(1) + "%"}
          isProfit={t.profit}
        />
        <SummaryRow label="Cost per Attendee" value={fmt(t.costPerAttendee)} />
      </div>
    );
  }

  return (
    <>
      {/* Global Controls */}
      <Card className="mb-7">
        <CardContent className="p-4 md:p-5 flex flex-wrap gap-x-6 gap-y-3 items-center">
          {[
            { label: "Attendees", value: attendees, set: setAttendees, narrow: true },
            { label: "Ticket Price", value: ticket, set: setTicket, prefix: "$" },
            { label: "Referral Commission", value: commissionPct, set: setCommissionPct, narrow: true, suffix: "%" },
            { label: "Engineers", value: engineers, set: setEngineers, narrow: true },
            { label: "Nights", value: nights, set: setNights, narrow: true },
            { label: "Days", value: days, set: setDays, narrow: true },
            { label: "Contingency", value: contingencyPct, set: setContingencyPct, narrow: true, suffix: "%" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-2">
              <label className="text-[12px] font-bold text-foreground tracking-wide whitespace-nowrap">
                {f.label}
              </label>
              {f.prefix && (
                <span className="text-[13px] text-muted-foreground">{f.prefix}</span>
              )}
              <NumberInput
                value={f.value}
                onChange={f.set}
                narrow={f.narrow}
              />
              {f.suffix && (
                <span className="text-[11px] text-muted-foreground">{f.suffix}</span>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* City Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
        {renderCityCard("Saigon (Ho Chi Minh City)", sg, updateSg)}
        {renderCityCard("Nha Trang", nt, updateNt)}
      </div>

      {/* P&L Summary */}
      <Card className="overflow-hidden mb-5">
        <div className="bg-navy text-white px-5 py-4 text-[16px] font-bold">
          P&amp;L Summary
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {renderTotalsCol("Saigon", sgTotals)}
          {renderTotalsCol("Nha Trang", ntTotals)}
        </div>
      </Card>

      {/* Export */}
      <div className="flex gap-2.5">
        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue transition-colors"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>
    </>
  );
}
