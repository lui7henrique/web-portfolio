import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";

import { Header } from "@/components/header";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
	title: "Luiz Henrique",
	description:
		"Design Engineer passionate about building products and continuous learning.",
	icons: {
		icon: [
			{
				url: "data:image/svg+xml;charset=utf-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>",
				sizes: "any",
				type: "image/svg+xml",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${spaceGrotesk.variable} dark`}>
			<body className="bg-background text-foreground min-h-screen relative">
				<div
					className="fixed inset-0 z-0"
					style={{
						backgroundImage: `
							linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
							linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)
						`,
						backgroundSize: "20px 20px",
					}}
				/>
				<main className="max-w-lg space-y-8 mx-auto py-32 px-4 relative z-10">
					<Header />
					{children}
				</main>
				<Analytics />
			</body>
		</html>
	);
}
