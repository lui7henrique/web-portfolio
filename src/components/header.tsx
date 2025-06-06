import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";

export function Header() {
	return (
		<header id="about">
			<BlurFade delay={0.2}>
				<Link href="/" className="flex items-center gap-2">
					<div className="rounded-full border size-10 relative overflow-hidden">
						<Image
							src="/me.png"
							alt="Luiz Henrique"
							className="object-cover"
							fill
						/>
					</div>

					<div className="flex flex-col gap-0">
						<h1 className="text-lg font-semibold">Luiz Henrique</h1>
						<p className="text-sm text-muted-foreground">Design Engineer</p>
					</div>
				</Link>
			</BlurFade>
		</header>
	);
}
