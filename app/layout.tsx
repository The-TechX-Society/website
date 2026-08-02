// builtin

// external
import { Geist } from "next/font/google";
import type { Metadata } from "next";

// internal
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(defaultUrl),
    title: "TechX",
    description: "Man idk, it's like late and thinking is hard, so we'll get back to you",
};

const geistSans = Geist({
    variable: "--font-geist-sans",
    display: "swap",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.className} antialiased`}>
                <div className="root">
                    {children}
                </div>
            </body>
        </html>
    );
}
