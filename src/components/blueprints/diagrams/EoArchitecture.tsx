export default function EoArchitecture() {
  return (
    <div className="my-8 mx-auto w-full max-w-[920px]">
      <h3 className="text-center text-[15px] font-bold tracking-wide text-navy mb-6">
        EO Global, System Architecture Overview
      </h3>

      <div className="flex flex-col gap-0">
        {/* Layer 1 - Upper */}
        <div className="rounded-xl border-2 border-mint-dark bg-mint/10 p-5 md:p-6">
          <div className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-mint-dark mb-3 opacity-80">
            Upper Layer, Chapter User Interfaces
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white border-[1.5px] border-mint-dark rounded-lg p-4">
              <h4 className="text-[13px] font-bold text-mint-dark mb-1.5">Hivebrite</h4>
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                <strong className="text-foreground">All 220 Chapters</strong>
              </p>
              <p className="mt-1.5 text-[12px] text-muted-foreground leading-relaxed">
                Chapter Managers and Member Leaders interact with chapter operations, membership data, and community tools through Hivebrite.
              </p>
              <div className="inline-block mt-2 text-[10px] font-bold rounded bg-mint/20 text-mint-dark px-1.5 py-0.5">
                Standard, All Chapters
              </div>
            </div>

            <div className="bg-white border-[1.5px] border-magenta rounded-lg p-4">
              <h4 className="text-[13px] font-bold text-magenta mb-1.5">HubSpot Brands</h4>
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                <strong className="text-foreground">~60 Power User Chapters</strong>
              </p>
              <p className="mt-1.5 text-[12px] text-muted-foreground leading-relaxed">
                Advanced chapters get dedicated HubSpot Brands for marketing, communications, and deeper process management.
              </p>
              <ul className="mt-2 pl-4 list-disc text-[12px] text-muted-foreground leading-relaxed space-y-0.5">
                <li>1 Core License</li>
                <li>1 Sales License</li>
                <li>1 Marketing License</li>
              </ul>
              <div className="inline-block mt-2 text-[10px] font-bold rounded bg-magenta/10 text-magenta px-1.5 py-0.5">
                EO Global Allocation, ~60 of 220
              </div>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col items-center justify-center py-2 gap-1">
          <div className="w-px h-4 bg-border" />
          <div className="font-mono text-[10px] font-bold tracking-wide text-muted-foreground bg-surface px-2 py-0.5 rounded">
            Surfaced through Middleware
          </div>
          <div className="w-px h-4 bg-border" />
        </div>

        {/* Layer 2 - Middleware */}
        <div className="rounded-xl border-2 border-blue bg-blue/5 p-5 md:p-6">
          <div className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-blue mb-3 opacity-80">
            Middleware Layer, Custom Code
          </div>
          <div className="bg-white border-[1.5px] border-blue/40 rounded-lg p-4 flex flex-col md:flex-row items-start gap-4">
            <div className="text-[26px] leading-none mt-0.5 text-blue font-bold">{'{ }'}</div>
            <div className="flex-1">
              <h4 className="text-[14px] font-bold text-blue mb-1">Admin Control Plane</h4>
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                Custom-built middleware that allows authorized admins to read and write data directly into either system. Acts as the integration and management layer between HubSpot and Altai.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <div className="text-[11px] font-semibold px-3 py-1 rounded-full border-[1.5px] border-magenta text-magenta bg-magenta/5">
                  Update HubSpot
                </div>
                <div className="text-[11px] font-semibold px-3 py-1 rounded-full border-[1.5px] border-blue text-blue bg-blue/5">
                  Update Altai
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col items-center justify-center py-2 gap-1">
          <div className="w-px h-4 bg-border" />
          <div className="font-mono text-[10px] font-bold tracking-wide text-muted-foreground bg-surface px-2 py-0.5 rounded">
            Read / Write Access
          </div>
          <div className="w-px h-4 bg-border" />
        </div>

        {/* Layer 3 - Data Stores */}
        <div className="rounded-xl border-2 border-navy/30 bg-navy/5 p-5 md:p-6">
          <div className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-navy mb-3 opacity-80">
            Bottom Layer, Data Stores
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className="bg-white border-2 border-magenta rounded-xl p-4 shadow-sm">
              <h4 className="text-[15px] font-bold text-magenta mb-0.5">HubSpot</h4>
              <div className="text-[10.5px] italic text-muted-foreground mb-2">Lead to Deal Close</div>
              <ul className="pl-4 list-disc text-[12px] text-foreground leading-relaxed space-y-0.5">
                <li>Member Acquisition</li>
                <li>Strategic Alliance Partner Acquisition</li>
                <li>Non-Member Programs</li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="font-mono text-[10px] font-bold text-blue bg-blue/10 px-2 py-0.5 rounded tracking-wide">
                API
              </div>
              <div className="w-12 h-px bg-blue/60" />
              <div className="text-[9.5px] text-muted-foreground text-center max-w-[120px] leading-tight">
                Deal close triggers sync to Altai
              </div>
            </div>

            <div className="bg-white border-2 border-blue rounded-xl p-4 shadow-sm">
              <h4 className="text-[15px] font-bold text-blue mb-0.5">Altai</h4>
              <div className="text-[10.5px] italic text-muted-foreground mb-2">Post-Close Operations</div>
              <ul className="pl-4 list-disc text-[12px] text-foreground leading-relaxed space-y-0.5">
                <li>Member records</li>
                <li>Chapter management</li>
                <li>Post-deal lifecycle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
