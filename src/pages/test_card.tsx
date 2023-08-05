import { ActionIcon, Button, Card, Group, Tooltip } from "@mantine/core";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface QuickLinkCardProps {
	title: string;
	description: string;
	link: string;
	imgUrl: string
}

function QuickLinkCard({ title, description, link, imgUrl }: QuickLinkCardProps) {
	return (
		<Card withBorder className="flex h-[30rem] w-96 max-w-sm flex-col md:h-[22rem] md:max-w-[16rem]">
			<Card.Section>
				<div className="relative mx-2 mt-2 aspect-video">
					<Image className="rounded-sm object-cover" src={imgUrl} alt={"something"} fill />
				</div>
			</Card.Section>

			<Card.Section className="flex items-center p-2 font-bold">{title}</Card.Section>

			<Card.Section className="flex items-center px-2 pb-2">
				{description}
			</Card.Section>

			<Card.Section className="row mt-auto flex items-center gap-x-2 px-2 pb-2">
				<Button className="w-full">Open</Button>
				<Tooltip label="open source">
					<ActionIcon variant="outline" color="blue" size="lg">
						<FaArrowUpRightFromSquare />
					</ActionIcon>
				</Tooltip>
			</Card.Section>
		</Card>
	);
}

export default function TestCardPage() {
	return (
		<div className="container mx-auto">
			<h2 className="flex justify-center items-center text-center text-5xl md:text-6xl text-white">
				Quick Links
			</h2>
			<div className="justify-center text-2xl text-center mx-auto 2xl:px-64 pb-8">
				Your <span className="font-bold text-white">one-stop access</span> to essential online platforms and tools. From your course material
				on Blackboard to student registration on reg and easy access to Microsoft tools, social media,
				and more. Explore these quick links and stay connected with Stamford's digital world.
			</div>
			<Group position="center">
				<QuickLinkCard imgUrl="/assets/images/logos/blackboard-logo.png" title="Blackboard" description="A platform to find your study material from your instructors, including submitting your assignment." link="eee" />
				<QuickLinkCard imgUrl="/assets/images/logos/registrar.png" title="Registrar" description="A platform to perform ADD/DROP, payment, check GPA, and many more." link="eee" />
				<QuickLinkCard imgUrl="/assets/images/logos/microsoft.png" title="Microsoft365" description="A main platform provide by STIU for you to use the Microsoft cloud-base products for free." link="eee" />
				<QuickLinkCard imgUrl="/assets/images/logos/van.png" title="Van Schedule" description="A transportation provide by STIU for the students and staff each term." link="eee" />
				<QuickLinkCard imgUrl="/assets/images/logos/calender.png" title="Acadamic Calendar" description="The calendar that tell you about important academic day in each term, including holidays, exam days, and many more." link="eee" />
				<QuickLinkCard imgUrl="/assets/images/logos/student-council.png" title="Student Council" description="Follow up the events and activities organized and cooperate by the Student Council team." link="eee" />
				<QuickLinkCard imgUrl="/assets/images/logos/registrar.png" title="Student Instagram" description="An official Instagram of Stamford that regularly update the important activities and events." link="eee" />
				<QuickLinkCard imgUrl="/assets/images/logos/student-engagment.png" title="Student Engagement" description="A department that mainly responsible for the student activities and development, including Scholarship." link="eee" />
				<QuickLinkCard imgUrl="/assets/images/logos/study-plan.png" title="Study Plan(Curriculum)" description="A PDF file that contain all of the subject that your need to study depending on which curriculum you are in.." link="eee" />
			</Group>
		</div>
	);
}
