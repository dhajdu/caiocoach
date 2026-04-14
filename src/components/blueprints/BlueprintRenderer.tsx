import type { Block } from '@/lib/types';
import BlockRenderer from '@/components/BlockRenderer';
import EoArchitecture from './diagrams/EoArchitecture';
import ContentStudioWorkflow from './diagrams/ContentStudioWorkflow';
import WebDeveloperWorkflow from './diagrams/WebDeveloperWorkflow';

const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  EoArchitecture,
  ContentStudioWorkflow,
  WebDeveloperWorkflow,
};

type StepCardBlock = Extract<Block, { tag: 'step-card' }>;
type PhaseLaneBlock = Extract<Block, { tag: 'phase-lane' }>;
type DiagramRefBlock = Extract<Block, { tag: 'diagram-ref' }>;

const NEW_TAGS = new Set(['step-card', 'phase-lane', 'diagram-ref']);

export default function BlueprintRenderer({ blocks }: { blocks: Block[] }) {
  // Render by walking the block list, grouping runs of shared-blocks so BlockRenderer
  // handles them contiguously, and rendering blueprint-specific blocks inline.
  const rendered: React.ReactNode[] = [];
  let buffer: Block[] = [];
  let key = 0;

  const flush = () => {
    if (buffer.length === 0) return;
    rendered.push(<BlockRenderer key={`shared-${key++}`} blocks={buffer} />);
    buffer = [];
  };

  for (const block of blocks) {
    if (!NEW_TAGS.has(block.tag)) {
      buffer.push(block);
      continue;
    }
    flush();

    if (block.tag === 'step-card') {
      rendered.push(<StepCard key={`step-${key++}`} block={block} />);
    } else if (block.tag === 'phase-lane') {
      rendered.push(<PhaseLane key={`phase-${key++}`} block={block} />);
    } else if (block.tag === 'diagram-ref') {
      rendered.push(<DiagramRef key={`diagram-${key++}`} block={block} />);
    }
  }
  flush();

  return <>{rendered}</>;
}

function StepCard({ block }: { block: StepCardBlock }) {
  return (
    <section className="my-8 rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm">
      {block.eyebrow && (
        <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-blue mb-3">
          <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-md bg-blue/10 text-blue text-[11px] font-bold">
            {block.eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-[1.4rem] md:text-[1.6rem] font-extrabold text-foreground tracking-tight mb-4">
        {block.title}
      </h2>
      <div className="[&>*:first-child]:mt-0">
        <BlockRenderer blocks={block.body} />
      </div>
    </section>
  );
}

function PhaseLane({ block }: { block: PhaseLaneBlock }) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {block.lanes.map((lane, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-white p-5 flex flex-col gap-3"
        >
          <div className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-blue">
            Phase {i + 1}
          </div>
          <div className="text-[15px] font-bold text-foreground leading-tight">
            {lane.title}
          </div>
          <ul className="space-y-1.5 mt-1">
            {lane.items.map((item, j) => (
              <li
                key={j}
                className="flex gap-2 text-[13px] text-muted-foreground leading-relaxed"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-mint-dark flex-shrink-0 mt-[7px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function DiagramRef({ block }: { block: DiagramRefBlock }) {
  const Diagram = DIAGRAM_REGISTRY[block.component];
  if (!Diagram) {
    return (
      <div className="my-8 rounded-xl border border-dashed border-border bg-surface p-6 text-center text-muted-foreground text-[13px] font-mono">
        Unknown diagram: {block.component}
      </div>
    );
  }
  return <Diagram />;
}
