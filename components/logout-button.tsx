"use client";

// builtin

// external
import { useRouter } from "next/navigation";

// internal
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
	const router = useRouter();

	const logout = async () => {
		const supabase = createClient();
		await supabase.auth.signOut();
		router.push("/auth/login");
	};

	return (
		<button type="button" onClick={logout}>
			Logout
		</button>
	);
}
