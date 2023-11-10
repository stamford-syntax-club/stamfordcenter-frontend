import { Text, Center, Card, Image, Grid, rem } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { ClubAchievement } from "@ourtypes/about_page_types/ClubAchievement";

const achievements: ClubAchievement[] = [
	{
		title: "Git & GitHub for Software Engineer Workshop",
		description:
			"A practical workshop with more than 40+ attendees that teaches students and lecturers how to use Git and GitHub to manage code and collaborate with others.",
		images: [
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
		],
	},
	{
		title: "Club Fair",
		description: "Something ",
		images: [
			{
				src: "/assets/images/logos/study-plan.png",
				alt: "Club Fair",
			},
		],
	},
];

export default function AboutUsPage() {
	return (
		<div className="container mx-auto mt-8 text-center">
			<div className="mb-6">
				<Text className="mb-4 text-3xl font-bold uppercase text-white">About us</Text>
				<Text className="mb-4 text-xl font-bold text-white">Stamford Syntax Club</Text>
				<Text className="mb-4">
					Stamford Syntax Club is a student-run club at Stamford International University that aims to use
					technology to improve the lives of students and faculty members. We are a group of students who are
					passionate about technology and want to make a difference in the Stamford community.
				</Text>
				<Text className="mb-4 text-lg font-semibold">Our Past Activities</Text>

				{achievements.map((achievement, index) => (
					<Card key={`achievement-${index}`} className="mx-10 mb-8 p-6">
						<Grid align="center">
							<Grid.Col span={{ base: 12, md: 4, lg: 4, xl: 4 }}>
								<Carousel mx="auto" loop>
									{achievement.images.map((image, imageIndex) => (
										<Carousel.Slide key={`achievement-${index}-image-${imageIndex}`}>
											<Center>
												<Image
													radius="md"
													style={{ width: rem(300), height: rem(300) }}
													src={image.src}
													alt={image.alt}
												/>
											</Center>
										</Carousel.Slide>
									))}
								</Carousel>
							</Grid.Col>
							<Grid.Col span={{ base: 12, md: 8, lg: 8, xl: 8 }}>
								<Text className="mb-2 text-xl font-bold text-white">{achievement.title}</Text>
								<Text className="mb-4">{achievement.description}</Text>
							</Grid.Col>
						</Grid>
					</Card>
				))}
			</div>

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
