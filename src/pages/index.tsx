import QuickLinksSection from "@components/page_sections/QuickLinksSection";
import { Stack, Text, ThemeIcon } from "@mantine/core";
import Image from "next/image";

import { FaCheck } from "react-icons/fa";

const talkingPoints = [
	{
		point: "Find",
		description: "essential academic resources, updates, and opportunities all in one place.",
	},
	{
		point: "Connect",
		description:
			"with our community through official social media channels, including the Student Engagement and Student Council teams.",
	},
	{
		point: "Explore",
		description: "internships, exchange programs, student engagement, and more.",
	},
	{
		point: "Quick",
		description: "access to Blackboard, reg, Microsoft 365, and other vital platforms.",
	},
];

export default function Home() {
	return (
		<div className="container mx-auto mt-12">
			<section className="relative w-full">
				{/* Logo */}
				<div className="absolute right-20 hidden aspect-[1213/2210] w-1/4 2xl:inline">
					<Image src="/assets/images/logos/ssc-mascot-new.png" alt="Stamford Syntax Club Mascot" fill />
				</div>

				{/* Header */}
				<h1>
					<div className="flex flex-col">
						<Text className="text-2xl font-semibold text-white md:text-4xl">Welcome to the</Text>
						<Text className="gradient-span mr-2 w-fit cursor-pointer bg-clip-text text-5xl font-extrabold uppercase text-transparent md:text-6xl">
							Stamford Center
						</Text>
					</div>
				</h1>

				{/* Header.Description */}
				<div>
					<Text c="dimmed" className="w-full max-w-xl text-2xl">
						Your hub for student success at Stamford International University.
					</Text>
				</div>

				{/* Talking Points */}
				<div className="flex flex-col">
					{/* Talking Points */}
					<div className="mt-8">
						<Stack>
							{talkingPoints.map(({ point, description }) => (
								<div key={"talkingpoint" + point} className="flex flex-row items-start">
									<div className="flex max-w-4xl flex-row">
										<span className="text-2xl">
											<span className="float-left flex flex-row items-center">
												<ThemeIcon radius="xl" className="text-base">
													<FaCheck />
												</ThemeIcon>
												&nbsp;
												<span className="font-bold text-white">{point}</span>
											</span>
											&nbsp;
											{description}
										</span>
									</div>
								</div>
							))}
						</Stack>
					</div>

					{/* Explore bottom tagline */}
					<div className="mt-8 w-full">
						<Text c="dimmed" className="w-full text-2xl">
							Explore now and make the most of your Stamford experience!
						</Text>
					</div>
				</div>
			</section>

			{/* Quick Links Section */}
			<section className="mt-80">
				<QuickLinksSection />
			</section>
		</div>
	);
}
