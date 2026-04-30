import { supabase } from '@/lib/supabase';

export {
  AFF_REF_COOKIE,
  AFF_VISITOR_COOKIE,
  AFF_COOKIE_MAX_AGE_SECONDS,
} from '@/lib/affiliate-constants';

export type AffiliateCodeType = 'discount' | 'commission';

export type Affiliate = {
  id: string;
  code: string;
  code_discount: string;
  code_commission: string;
  rate: number;
  stripe_coupon_id: string;
  active: boolean;
  person_id: string | null;
};

export type ResolvedAffiliate = {
  affiliate: Affiliate;
  codeType: AffiliateCodeType;
};

// Resolve a referral code to an active affiliate. Tries the discount column
// first, then commission. Case-insensitive. Returns null if the code is
// unknown or the affiliate is inactive.
export async function resolveAffiliate(
  code: string | null | undefined,
): Promise<ResolvedAffiliate | null> {
  if (!code) return null;
  const trimmed = code.trim();
  if (!trimmed) return null;

  const { data, error } = await supabase
    .from('affiliates')
    .select('id, code, code_discount, code_commission, rate, stripe_coupon_id, active, person_id')
    .or(`code_discount.ilike.${trimmed},code_commission.ilike.${trimmed}`)
    .eq('active', true)
    .maybeSingle();

  if (error) {
    console.error('[affiliate] resolveAffiliate error:', error.message);
    return null;
  }
  if (!data) return null;

  const aff = data as Affiliate;
  const codeType: AffiliateCodeType =
    aff.code_discount.toLowerCase() === trimmed.toLowerCase() ? 'discount' : 'commission';
  return { affiliate: aff, codeType };
}
