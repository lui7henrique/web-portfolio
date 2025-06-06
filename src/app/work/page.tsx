import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Luiz Henrique • Work",
};

const WORK_EXPERIENCE = [
	{
		company: "Open",
		role: "Design Engineer",
		duration: "2025 - Present",
		icon: "/open.svg",
		objectFit: "contain",
	},
	{
		company: "Plotwist",
		role: "Founder",
		duration: "2023 - Present",
		icon: "/plotwist.jpeg",
		sideProject: true,
	},
	{
		company: "LeadMagic",
		role: "Software Engineer",
		duration: "2024 - 2025",
		icon: "/leadmagic.jpg",
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

export default function Work() {
	return (
		<>
			<BlurFade delay={0.6}>
				<div className="space-y-1">
					<p className="text-muted-foreground">
						From frontend engineering to design and founding side projects, I've
						worked across different scales and industries, building products
						that solve real problems.
					</p>
				</div>
			</BlurFade>

			<div className="space-y-2 ">
				{WORK_EXPERIENCE.map((work, index) => (
					<BlurFade key={work.company} delay={0.8 + index * 0.3}>
						<div className="flex justify-between -mx-2 hover:bg-muted/30 px-2 py-2 rounded-sm">
							<div className="flex items-start gap-4">
								<div
									className={cn(
										"size-10 bg-accent relative rounded-sm overflow-hidden border border-border",
										work.objectFit === "contain" && "bg-white",
									)}
								>
									<Image
										src={work.icon}
										alt={work.company}
										className={cn(
											"object-cover",
											work.objectFit === "contain" && "object-contain",
										)}
										fill
									/>
								</div>

								<div className="">
									<h3 className="text font-medium">{work.company}</h3>
									<p className="text-sm text-muted-foreground">{work.role}</p>
								</div>
							</div>

							<div className="text-xs text-muted-foreground">
								{work.duration}
							</div>
						</div>
					</BlurFade>
				))}
			</div>
		</>
	);
}
