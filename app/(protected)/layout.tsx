// builtin

// external

// internal
import { AuthButton } from "@/components/(protected)/auth-button";
import { Suspense } from "react";

export default async function AuthLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <AuthButton />
            </Suspense>
            {children}
        </div>
    );
}
