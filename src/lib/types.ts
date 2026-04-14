export type Block =
  | { tag: 'p' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'li'; text: string }
  | { tag: 'pull-quote'; text: string }
  | { tag: 'emphasis-box'; text: string }
  | { tag: 'tl-dr'; items: string[] }
  | { tag: 'stat-callout'; stats: { value: string; label: string; color?: 'blue' | 'mint' | 'magenta' }[] }
  | { tag: 'callout'; label: string; text: string }
  | { tag: 'conclusion-box'; title: string; paragraphs: string[] }
  | { tag: 'faq'; question: string; answer: string }
  | { tag: 'image'; src: string; alt: string }
  | { tag: 'shipped-list'; title: string; items: string[] }
  | { tag: 'ol-item'; text: string }
  | { tag: 'html'; html: string }

export type Post = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categories?: string[];
  tags: string[];
  featured?: boolean;
  image?: string;
  dayNumber?: number;
  series?: string;
  seriesTotal?: number;
  author?: string;
};

export type CoachingSession = {
  id: string;
  created_at: string;
  updated_at: string;
  client_name: string;
  client_email?: string;
  client_company?: string;
  client_role?: string;
  session_date: string;
  session_type: 'group' | '1on1' | 'retreat' | 'workshop';
  session_number?: number;
  duration_minutes: number;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  topics?: string[];
  notes?: string;
  action_items?: string[];
  outcomes?: string;
  track?: 'executive' | 'hr-leader' | 'founder' | 'team';
};
