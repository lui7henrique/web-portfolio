import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";

export function Links() {
	return (
		<section id="links" className="flex gap-2">
			<BlurFade delay={0.6}>
				<Link
					href="/work"
					className="text-primary underline underline-offset-2"
				>
					Work
				</Link>
			</BlurFade>

			<BlurFade delay={0.8}>
				<Link
					href="/books"
					className="text-primary underline underline-offset-2"
				>
					Books
				</Link>
			</BlurFade>

			<BlurFade delay={1.0}>
				<Link
					href="/contact"
					className="text-primary underline underline-offset-2"
				>
					Contact
				</Link>
			</BlurFade>
		</section>
	);
}
