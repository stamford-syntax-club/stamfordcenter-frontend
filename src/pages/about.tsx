import Link from "next/link";
import { Text, Accordion, Stack, Divider } from "@mantine/core";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import AutoPlay from "embla-carousel-autoplay";
import { ClubActivities } from "@ourtypes/about_page_types/ClubAchievement";
import { useRef } from "react";

const activities: ClubActivities[] = [
	{
		title: "Git & GitHub for Software Engineer Workshop",
		description:
			"A practical workshop with more than 40+ attendees that teaches students and lecturers how to use Git and GitHub to manage code and collaborate with others.",
	},
	{
		title: "Student Club Fair Term 1-2023",
		description: "Something club fair",
	},
	{
		title: "Stamford Syntax Club Orientations",
		description: "Something orientation meetings",
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
			<Stack>
				<Text className="text-3xl font-bold uppercase text-white">About us</Text>
				<Text className="text-2xl font-bold text-white">Stamford Center</Text>
				<Text>
					Stamford Center was conceived to address the pain point that many new students face when trying to
					locate essential resources on official university websites. Recognizing the frustration of
					navigating through various platforms for registration, learning tools, and university department
					communication channels, we set out to create a centralized solution. Stamford Center aims to
					alleviate this pain point by providing students with a user-friendly hub, simplifying the process of
					finding critical information and ensuring a smoother transition into university life.
				</Text>

				<Text className="text-lg font-bold text-white"> Resources on our website</Text>
				<Text>
					Resources on our website are taken from official university websites and are updated regularly to be
					as accurate as possible. We also provide a search function to help you find the information you
					need. If the resource you are looking for is not available on our website, please inform us by
					submitting{" "}
					<Link href="https://forms.office.com/r/z48ExG8dPs" target="_blank">
						<span className="text-blue-400">a feedback form here</span>
					</Link>
				</Text>

				<Divider size="md" my="xl" />

				<Text className="text-2xl font-bold text-white">Stamford Syntax Club</Text>
				<Text>
					Stamford Syntax Club is a student-run club at Stamford International University that aims to use
					technology to improve the lives of students and faculty members. We are a group of students who are
					passionate about technology and want to make a difference in the Stamford community.
				</Text>
				<Text className="text-lg font-bold text-white">Our Past Activities</Text>

				<Accordion multiple variant="filled">
					{activities.map((achievement, index) => (
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
			</Stack>
		</div>
	);
}
