import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Luiz Henrique • Contact",
};

export default function Contact() {
	return (
		<p className="text-muted-foreground leading-relaxed">
			Contact me at{" "}
			<Link
				href="mailto:7henrique18@gmail.com"
				className="text-primary underline underline-offset-2"
			>
				7henrique18@gmail.com
			</Link>
			, or follow me on{" "}
			<Link
				href="https://x.com/lui7henrique"
				target="_blank"
				rel="noopener noreferrer"
				className="text-primary underline underline-offset-2"
			>
				X
			</Link>
			.
		</p>
	);
}
