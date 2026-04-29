import { supabase } from '@/lib/supabase';

export {
  AFF_REF_COOKIE,
  AFF_VISITOR_COOKIE,
  AFF_COOKIE_MAX_AGE_SECONDS,
} from '@/lib/affiliate-constants';

export type AffiliateProgramType = 'discount' | 'commission';

export type Affiliate = {
  id: string;
  code: string;
  program_type: AffiliateProgramType;
  rate: number;
  stripe_coupon_id: string | null;
  active: boolean;
  person_id: string | null;
};

// Resolve a referral code to an active affiliate record. Case-insensitive.
// Returns null if the code is unknown or the affiliate is inactive.
export async function resolveAffiliate(code: string | null | undefined): Promise<Affiliate | null> {
  if (!code) return null;
  const trimmed = code.trim();
  if (!trimmed) return null;

  const { data, error } = await supabase
    .from('affiliates')
    .select('id, code, program_type, rate, stripe_coupon_id, active, person_id')
    .ilike('code', trimmed)
    .eq('active', true)
    .maybeSingle();

  if (error) {
    console.error('[affiliate] resolveAffiliate error:', error.message);
    return null;
  }
  return (data as Affiliate | null) ?? null;
}
