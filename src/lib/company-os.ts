import { companyOs } from './supabase';

// Shared write helper for the `company_os` schema, ported from edge8-web so
// caio-coach's forms persist through the same person-centric model.

type Ok<T> = { ok: true } & T;
type Err = { ok: false; error: string };

// Get-or-create a person by email (unique, citext). Uses ON CONFLICT DO NOTHING
// so we never clobber existing CRM data, then reads back the id. Race-safe.
export async function getOrCreatePerson(input: {
  email: string;
  name?: string | null;
  phone?: string | null;
  source?: string | null;
}): Promise<Ok<{ id: string }> | Err> {
  const email = input.email.trim().toLowerCase();
  if (!email || !email.includes('@')) {
    return { ok: false, error: 'A valid email is required.' };
  }

  const { error: upErr } = await companyOs.from('people').upsert(
    {
      email,
      full_name: input.name ?? null,
      phone: input.phone ?? null,
      source: input.source ?? null,
    },
    { onConflict: 'email', ignoreDuplicates: true },
  );
  if (upErr) {
    console.error('[company-os] people upsert failed:', upErr.message);
    return { ok: false, error: 'Could not save your details. Please try again.' };
  }

  const { data, error } = await companyOs
    .from('people')
    .select('id')
    .eq('email', email)
    .single();
  if (error || !data) {
    console.error('[company-os] people select failed:', error?.message);
    return { ok: false, error: 'Could not save your details. Please try again.' };
  }
  return { ok: true, id: data.id };
}
