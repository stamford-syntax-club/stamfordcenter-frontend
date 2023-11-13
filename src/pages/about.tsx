import Link from "next/link";
import { Divider, Stack, Text } from "@mantine/core";
import { ClubActivities } from "@ourtypes/about_page_types/ClubAchievement";
import ClubActivitySlideShow from "@components/page_components/about/ClubActivitySlideShow";
import ClubActivityAccordion from "@components/page_components/about/ClubActivityAccordion";

const activities: ClubActivities[] = [
	{
		title: "Git & GitHub for Software Engineer Workshop",
		description:
			"A practical workshop with more than 40+ attendees that teaches students and lecturers how to use Git and GitHub to manage code and collaborate with others.",
	},
	{
		title: "Student Club Fair Term 1-2023",
		description:
			"Showcasing our vibrant booth at the Student Club Fair where we enthusiastically promoted our club, engaged visitors in coding-related mini-games, and welcomed new members to join our coding community.",
	},
	{
		title: "Stamford Syntax Club Orientations",
		description:
			"Welcoming new members at our club orientations, we introduced them to the club's mission, explained our projects, and provided hands-on assistance in setting up their computers for programming. Discover how you can contribute to our collaborative coding journey!",
	},
];

const carouselImages = [
	{
		src: "/assets/images/about/github-workshop1.png",
		alt: "Participants at Git & GitHub for Software Engineer Workshop",
	},
	{
		src: "/assets/images/about/github-workshop2.png",
		alt: "Git & GitHub for Software Engineer Workshop Session",
	},
	{
		src: "/assets/images/about/syntax-orientation1.png",
		alt: "1st Stamford Syntax Orientation Meeting",
	},
	{
		src: "/assets/images/about/syntax-orientation2.png",
		alt: "2nd Stamford Syntax Orientation Meeting",
	},
	{
		src: "/assets/images/about/clubfair.png",
		alt: "Stamford Student Club Fair",
	},
	{
		src: "/assets/images/about/clubfair2.png",
		alt: "Stamford Syntax Club Booth during Club Fair",
	},
];

export default function AboutUsPage() {
	return (
		<div className="container mx-auto mt-8 text-center">
			<Stack>
				<Text className="text-2xl font-bold text-white">Stamford Center</Text>
				<Text>
					Stamford Center was conceived to address the pain point that many new students face when trying to
					locate essential resources on official university websites. Recognizing the frustration of
					navigating through various platforms for registration, learning tools, and university department
					communication channels, we set out to create a centralized solution. Stamford Center aims to
					alleviate this pain point by providing students with a user-friendly hub, simplifying the process of
					finding critical information and ensuring a smoother transition into university life.
				</Text>

				<Text className="text-lg font-bold text-white">Resources on our website</Text>
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

				<ClubActivityAccordion activities={activities} />

				<ClubActivitySlideShow carouselImages={carouselImages} />
			</Stack>
		</div>
	);
}
