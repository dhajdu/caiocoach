import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_SECRET_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

// Query builder scoped to the `company_os` schema — the canonical Edge8
// Company OS (people, inquiries, affiliates, ...) shared across all sites.
export const companyOs = supabase.schema('company_os');
