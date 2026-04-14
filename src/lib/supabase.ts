import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_SECRET_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});
