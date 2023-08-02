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
			<div className="relative w-full">
				{/* Logo */}
				<div className="absolute right-0 hidden aspect-square h-[620px] w-[620px] 2xl:inline">
					<Image src="/assets/images/ssc-mascot-clearbg.png" alt="Stamford Syntax Club Mascot" fill />
				</div>

				{/* Header */}
				<h1>
					<div className="flex flex-col text-2xl md:text-4xl">
						<Text className="font-semibold text-white">Welcome to the</Text>
						<span className="-mt-4 text-5xl md:-mt-6 md:text-6xl">
							<Text c="blue.7">Stamford Center</Text>
						</span>
					</div>
				</h1>

				{/* Header.Description */}
				<div className="-mt-4">
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
			</div>
		</div>
	);
}
