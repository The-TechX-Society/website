/** biome-ignore-all lint/style/noNonNullAssertion: Supabase generated template file */

// builtin

// external
import { createBrowserClient } from "@supabase/ssr";

// internal

export function createClient() {
	return createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
	);
}
