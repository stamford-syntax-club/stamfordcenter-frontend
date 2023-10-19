import { ActionIcon, Button, Card, Group, Tooltip } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface QuickLinkCardProps {
	title: string;
	description: string;
	link: string;
	originalLink: string;
	imgUrl: string;
}

const quickLinkCards = [
	{
		imgUrl: "/assets/images/logos/blackboard-logo.png",
		title: "Blackboard",
		description:
			"A platform to find your study material from your instructors, including submitting your assignment.",
		link: "https://learn.stamford.edu/",
		originalLink: "https://learn.stamford.edu/",
	},
	{
		imgUrl: "/assets/images/logos/registrar.png",
		title: "Registrar",
		description: "A platform to perform ADD/DROP, payment, check GPA, and many more.",
		link: "https://reg.stamford.edu/registrar/login.asp",
		originalLink: "https://reg.stamford.edu/registrar/login.asp",
	},
	{
		imgUrl: "/assets/images/logos/microsoft.png",
		title: "Microsoft365",
		description: "A main platform provide by STIU for you to use the Microsoft cloud-base products for free.",
		link: "https://www.microsoft365.com/",
		originalLink: "https://www.microsoft365.com/",
	},
	{
		imgUrl: "/assets/images/logos/van.png",
		title: "Van Schedule",
		description: "A transportation provide by STIU for the students and staff each term.",
		link: "https://center-be.stamford.dev/api/get_files/1_2023_van_schedule.pdf",
		originalLink:
			"https://learn.stamford.edu/bbcswebdav/library/Library%20Content/Share%20Content/Welcome%20Page%20%28UG%29/Files/Term1-2023/van%20schedule%20TERM%201.2023%20-%2024July%20-%2020OCT23.pdf",
	},
	{
		imgUrl: "/assets/images/logos/calender.png",
		title: "Academic Calendar",
		description:
			"The calendar that tell you about important academic day in each term, including holidays, exam days, and many more.",
		link: "https://center-be.stamford.dev/api/get_files/1_2023_academic_calendar.pdf",
		originalLink:
			"https://learn.stamford.edu/bbcswebdav/library/Library%20Content/Share%20Content/Welcome%20Page%20%28UG%29/Files/Term1-2023/1-2023_UG_Academic%20Calendar_Student%20Version_Updated%2021%20April%202023.pdf",
	},
	{
		imgUrl: "/assets/images/logos/student-council.png",
		title: "Student Council",
		description: "Follow up the events and activities organized and cooperate by the Student Council team.",
		link: "https://www.instagram.com/studentcouncilstiu/",
		originalLink: "https://www.instagram.com/studentcouncilstiu/",
	},
	{
		imgUrl: "/assets/images/logos/registrar.png",
		title: "Student Instagram",
		description: "An official Instagram of Stamford that regularly update the important activities and events.",
		link: "https://www.instagram.com/stamfordthailand/",
		originalLink: "https://www.instagram.com/stamfordthailand/",
	},
	{
		imgUrl: "/assets/images/logos/student-engagement.png",
		title: "Student Engagement",
		description:
			"A department that mainly responsible for the student activities and development, including Scholarship.",
		link: "https://www.instagram.com/studentengagementstiu/",
		originalLink: "https://www.instagram.com/studentengagementstiu/",
	},
	{
		imgUrl: "/assets/images/logos/study-plan.png",
		title: "Study Plan (Curriculum)",
		description:
			"A PDF file that contain all of the subject that your need to study depending on which curriculum you are in.",
		link: "study_plans",
		originalLink:
			"https://learn.stamford.edu/webapps/portal/execute/tabs/tabAction?action=preview&tabId=_96358_1&roles=Student-UG",
	},
];

function QuickLinkCard({ title, description, originalLink, link, imgUrl }: QuickLinkCardProps) {
	return (
		<Card withBorder className="flex h-[30rem] w-96 max-w-sm flex-col md:h-[22rem] md:max-w-[16rem]">
			<Card.Section>
				<div className="relative mx-2 mt-2 aspect-video">
					<Image className="rounded-sm object-cover" src={imgUrl} alt={"something"} fill />
				</div>
			</Card.Section>

			<Card.Section className="flex items-center p-2 font-bold">{title}</Card.Section>

			<Card.Section className="flex items-center px-2 pb-2">{description}</Card.Section>

			<Card.Section className="row mt-auto flex items-center gap-x-2 px-2 pb-2">
				<div className="w-full">
					<Link target="_blank" href={link}>
						<Button className="w-full">Open</Button>
					</Link>
				</div>
				<Tooltip label="open source">
					<Link target="_blank" href={originalLink}>
						<ActionIcon variant="outline" color="blue" size="lg">
							<FaArrowUpRightFromSquare />
						</ActionIcon>
					</Link>
				</Tooltip>
			</Card.Section>
		</Card>
	);
}

export default function QuickLinksSection() {
	return (
		<div className="container mx-auto">
			<h2 className="flex items-center justify-center text-center text-5xl text-white md:text-6xl">
				Quick Links
			</h2>
			<div className="mx-auto justify-center pb-8 text-center text-2xl 2xl:px-64">
				Your <span className="font-bold text-white">one-stop access</span> to essential online platforms and
				tools. From your course material on Blackboard to student registration on reg and easy access to
				Microsoft tools, social media, and more. Explore these quick links and stay connected with
				Stamford&apos;s digital world.
			</div>
			<Group position="center">
				{quickLinkCards.map((card) => (
					<QuickLinkCard key={"quicklinkcard" + card.title} {...card} />
				))}
			</Group>
		</div>
	);
}
