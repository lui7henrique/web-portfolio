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
		"Hey, I'm Luiz Henrique, a Design Engineer passionate about building		products and continuous learning.",
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
			<body className="bg-background text-foreground min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
				<main className="max-w-lg space-y-8 mx-auto py-32 px-4">
					<Header />
					{children}
				</main>
				<Analytics />
			</body>
		</html>
	);
}
