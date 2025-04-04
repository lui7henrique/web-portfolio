import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const WORK_EXPERIENCE = [
	{
		company: "LeadMagic",
		role: "Software Engineer",
		duration: "2024 - Present",
		icon: "/leadmagic.jpg",
		sideProject: true,
	},
	{
		company: "Plotwist",
		role: "Founder",
		duration: "2023 - Present",
		icon: "/plotwist.jpeg",
		sideProject: true,
	},
	{
		company: "Afya",
		role: "Software Engineer",
		duration: "2024 - 2025",
		icon: "/afya.jpeg",
	},

	{
		company: "Hyperlocal",
		role: "Frontend Engineer",
		duration: "2022 - 2024",
		icon: "/hyperlocal.jpeg",
	},
	{
		company: "hub xp",
		role: "Frontend Engineer",
		duration: "2021 - 2022",
		icon: "/hubxp.jpeg",
	},
];

function Divider() {
	return <div className="border-b border-dashed -mx-4 sm:-mx-8" />;
}

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen justify-center">
			<div
				className={cn(
					"max-w-xl space-y-8 mx-auto py-8 px-4 flex flex-col rounded-sm",
					"sm:border sm:rounded-sm sm:px-8 sm:py-8",
				)}
			>
				<section id="home">
					<BlurFade delay={0.2}>
						<h1 className="text-lg font-semibold">Luiz Henrique</h1>
					</BlurFade>

					<BlurFade delay={0.5}>
						<h2 className="text-muted-foreground">Software Engineer</h2>
					</BlurFade>
				</section>

				<Divider />

				<section id="about">
					<BlurFade delay={0.8}>
						<h2 className="text-lg font-semibold">About</h2>
					</BlurFade>

					<BlurFade delay={1.1}>
						<p className="text-muted-foreground">
							Software Engineer with 4+ years of experience, passionate about
							building products and continuous learning.
						</p>
					</BlurFade>
				</section>

				<Divider />

				<section id="work">
					<BlurFade delay={1.4}>
						<h2 className="text-lg font-semibold">Work Experience</h2>
					</BlurFade>

					<div className="space-y-2 mt-2">
						{WORK_EXPERIENCE.map((work, index) => (
							<BlurFade key={work.company} delay={1.7 + index * 0.3}>
								<div className="flex justify-between -mx-2 hover:bg-muted/30 px-2 py-2 rounded-sm">
									<div className="flex items-start gap-4">
										<div className="size-10 bg-accent relative rounded-sm overflow-hidden border border-border">
											<Image
												src={work.icon}
												alt={work.company}
												className="object-cover"
												fill
											/>
										</div>

										<div className="">
											<h3 className="text font-medium">{work.company}</h3>
											<p className="text-sm text-muted-foreground">
												{work.role}
											</p>
										</div>
									</div>

									<div className="text-xs text-muted-foreground">
										{work.duration}
									</div>
								</div>
							</BlurFade>
						))}
					</div>
				</section>

				<Divider />

				<section id="contact">
					<BlurFade delay={2.9}>
						<h2 className="text-lg font-semibold">Contact</h2>
					</BlurFade>

					<BlurFade delay={3.2}>
						<p className="text-muted-foreground leading-relaxed">
							Connect with me on{" "}
							<Link
								href="https://www.linkedin.com/in/luiz-henrique7/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
							>
								LinkedIn
							</Link>
							, check out my projects on{" "}
							<Link
								href="https://github.com/lui7henrique"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
							>
								GitHub
							</Link>
							, or follow me on{" "}
							<Link
								href="https://x.com/lui7henrique"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
							>
								X
							</Link>
							. Looking forward to connecting with you.
						</p>
					</BlurFade>
				</section>
			</div>
		</main>
	);
}
