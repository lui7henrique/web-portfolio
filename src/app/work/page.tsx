import { BlurFade } from "@/components/magicui/blur-fade";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
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
		description: null,
	},
	{
		company: "Plotwist",
		role: "Founder",
		duration: "2023 - Present",
		icon: "/plotwist.jpeg",
		sideProject: true,
		description:
			"Built an open-source multilingual platform with Next.js, TypeScript, and modern UI stack. Developed high-performance backend with Fastify, PostgreSQL, and Redis. Implemented Stripe payments and scalable AWS infrastructure with Pulumi. Full-stack ownership from design to deployment.",
	},
	{
		company: "LeadMagic",
		role: "Software Engineer",
		duration: "2025 - 2025",
		icon: "/leadmagic.jpg",
		sideProject: true,
		description:
			"Led full development of a high-performance spreadsheet editor with Next.js 15 and React 19. Built offline-first architecture achieving sub-50ms hydration on 150k+ row datasets with virtualization. Integrated AI enrichment and smooth CSV/XLSX import using Web Workers. Sole frontend engineer managing architecture and agile delivery.",
	},
	{
		company: "Hyperlocal",
		role: "Frontend Engineer",
		duration: "2022 - 2024",
		icon: "/hyperlocal.jpeg",
		description:
			"Developed modular white-label banking platform using micro-frontends with Single-spa and React. Implemented role-based access control for enhanced security. Built dynamic design system with Radix UI and Tailwind CSS. Maintained high-quality standards through code reviews and team collaboration.",
	},
	{
		company: "hub xp",
		role: "Frontend Engineer",
		duration: "2021 - 2022",
		icon: "/hubxp.jpeg",
		description:
			"Developed air travel management and genetic testing e-commerce platforms with React, Next.js, and TypeScript. Optimized SEO and SSR strategies for enhanced performance. Implemented efficient data fetching with React Query and form validation. Maintained code quality with SonarQube and Cypress testing.",
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

			<Accordion type="single" collapsible className="space-y-2">
				{WORK_EXPERIENCE.map((work, index) => (
					<BlurFade key={work.company} delay={0.8 + index * 0.3}>
						<AccordionItem value={work.company}>
							<AccordionTrigger
								className="hover:bg-muted/30 p-0 -mx-2 px-2 py-2 hover:no-underline cursor-pointer"
								arrow={false}
							>
								<div className="flex justify-between rounded-sm w-full">
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
											<p className="text-sm text-muted-foreground">
												{work.role}
											</p>
										</div>
									</div>

									<div className="text-xs text-muted-foreground">
										{work.duration}
									</div>
								</div>
							</AccordionTrigger>

							<AccordionContent className="pb-0">
								{work.description ? (
									<p className="text-sm text-muted-foreground leading-relaxed">
										{work.description}
									</p>
								) : (
									<p className="text-sm text-muted-foreground">
										More details coming soon.
									</p>
								)}
							</AccordionContent>
						</AccordionItem>
					</BlurFade>
				))}
			</Accordion>
		</>
	);
}
