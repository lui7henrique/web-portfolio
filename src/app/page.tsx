import Image from "next/image";
import Link from "next/link";

const WORK_EXPERIENCE = [
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
		duration: "2024 - Present",
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

export default function Home() {
	return (
		<main className="min-h-screen py-12 px-4 flex justify-center">
			<div className="max-w-md w-full space-y-16 mx-auto">
				<section id="home">
					<h1 className="text-lg font-semibold">Luiz Henrique</h1>
					<h2 className="text-neutral-400">Software Engineer</h2>
				</section>

				<section id="about">
					<h2 className="text-lg font-semibold">About</h2>
					<p className="text-neutral-400">
						Software Engineer with 4+ years of experience, passionate about
						building products and continuous learning.
					</p>
				</section>

				<section id="work">
					<h2 className="text-lg font-semibold">Work Experience</h2>

					<div className="space-y-4 mt-2">
						{WORK_EXPERIENCE.map((work) => (
							<div className="flex justify-between" key={work.company}>
								<div className="flex items-start gap-4">
									<div className="size-10 bg-neutral-800 relative rounded-sm overflow-hidden border border-neutral-700">
										<Image
											src={work.icon}
											alt={work.company}
											className="object-cover"
											fill
										/>
									</div>

									<div className="">
										<div className="flex items-center gap-2">
											<h3 className="text font-medium">{work.company}</h3>
										</div>

										<p className="text-sm text-neutral-400">{work.role}</p>
									</div>
								</div>

								<div className="text-xs text-neutral-400">{work.duration}</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}
