import { Links } from "@/components/links";
import { BlurFade } from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Luiz Henrique",
};

export default function Home() {
	return (
		<>
			<BlurFade delay={0.4}>
				<p className="text-muted-foreground">
					Hey, I'm Luiz Henrique, a Design Engineer passionate about building
					products and continuous learning.
				</p>
			</BlurFade>

			<Links />
		</>
	);
}
