import { Text, Center, rem, Accordion, Stack } from "@mantine/core";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import AutoPlay from "embla-carousel-autoplay";
import { ClubAchievement } from "@ourtypes/about_page_types/ClubAchievement";
import { useRef } from "react";

const achievements: ClubAchievement[] = [
	{
		title: "Git & GitHub for Software Engineer Workshop",
		description:
			"A practical workshop with more than 40+ attendees that teaches students and lecturers how to use Git and GitHub to manage code and collaborate with others.",
	},
	{
		title: "Club Fair",
		description: "Something club fair",
	},
];

const carouselImages = [
	{
		src: "/assets/images/about/github-workshop1.png",
		alt: "Git & GitHub for Software Engineer Workshop",
	},
	{
		src: "/assets/images/about/github-workshop2.png",
		alt: "Git & GitHub for Software Engineer Workshop 2",
	},
	{
		src: "/assets/images/logos/study-plan.png",
		alt: "Club Fair",
	},
];

export default function AboutUsPage() {
	const autoplay = useRef(AutoPlay({ delay: 2000 }));

	return (
		<div className="container mx-auto mt-8 text-center">
			<Stack className="mb-6">
				<Text className="text-3xl font-bold uppercase text-white">About us</Text>
				<Text className="text-xl font-bold text-white">Stamford Syntax Club</Text>
				<Text>
					Stamford Syntax Club is a student-run club at Stamford International University that aims to use
					technology to improve the lives of students and faculty members. We are a group of students who are
					passionate about technology and want to make a difference in the Stamford community.
				</Text>
				<Text className="text-lg font-semibold">Our Past Activities</Text>

				<Accordion multiple transitionDuration={1000}>
					{achievements.map((achievement, index) => (
						<Accordion.Item key={`achievement-${index}`} value={`achievemment-${index}`}>
							<Accordion.Control>
								<Text className="mb-2 text-lg">{achievement.title}</Text>
							</Accordion.Control>
							<Accordion.Panel>
								<Text className="mb-4">{achievement.description}</Text>
							</Accordion.Panel>
						</Accordion.Item>
					))}
				</Accordion>

				<Center>
					<Carousel
						loop
						plugins={[autoplay.current]}
						onMouseEnter={autoplay.current.stop}
						onMouseLeave={autoplay.current.reset}
					>
						{carouselImages.map((image, index) => (
							<Carousel.Slide key={`carouselImages-${index}`}>
								<Image height={300} width={300} src={image.src} alt={image.alt} />
							</Carousel.Slide>
						))}
					</Carousel>
				</Center>
			</Stack>

			<div className="mb-6">
				<Text className="mb-4 text-lg font-bold text-white">About Stamford Center</Text>
				<Text>
					Stamford Center was conceived to address the pain point that many new students face when trying to
					locate essential resources on official university websites. Recognizing the frustration of
					navigating through various platforms for registration, learning tools, and university department
					communication channels, we set out to create a centralized solution. Stamford Center aims to
					alleviate this pain point by providing students with a user-friendly hub, simplifying the process of
					finding critical information and ensuring a smoother transition into university life.
				</Text>
			</div>
		</div>
	);
}
