import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
	title: "Luiz Henrique • Software Engineer",
	description:
		"Software Engineer with 4+ years of experience, passionate about building products and continuous learning.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={spaceGrotesk.variable}>
			<body className="bg-neutral-950 text-neutral-50">{children}</body>
		</html>
	);
}
