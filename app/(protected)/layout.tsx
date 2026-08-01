// builtin

// external

// internal
import { AuthButton } from "@/components/(protected)/auth-button";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<AuthButton />
			{children}
		</div>
	);
}
