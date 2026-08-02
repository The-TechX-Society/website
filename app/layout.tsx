// builtin

// external
import localFont from "next/font/local";
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

const satoshi = localFont({
	src: [
		{
			path: "./fonts/Satoshi-Variable.woff2",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi-VariableItalic.woff2",
			style: "italic",
		},
	],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${satoshi.className} antialiased`}>
				<div className="root">{children}</div>
			</body>
		</html>
	);
}
