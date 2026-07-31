// builtin

// external
import type { SupabaseClient } from "@supabase/supabase-js";

// internal

export interface UserClient {
	client: SupabaseClient;
	userId: string;
}
