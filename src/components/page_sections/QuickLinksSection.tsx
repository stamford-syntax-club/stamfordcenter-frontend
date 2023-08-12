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
		originalLink: "https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/5da96a61b2455/3072688?X-Blackboard-S3-Bucket=learn-ap-southeast-1-prod-fleet02-xythos&X-Blackboard-Expiration=1691863200000&X-Blackboard-Signature=vqcnpl576PS%2FCAQsNWNzjSQKeNJkyaWTA8Mf%2Fa2s8ig%3D&X-Blackboard-Client-Id=447391&X-Blackboard-S3-Region=ap-southeast-1&response-cache-control=private%2C%20max-age%3D21600&response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27van%2520schedule%2520TERM%25201.2023%2520-%252024July%2520-%252020OCT23.pdf&response-content-type=application%2Fpdf&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaDmFwLXNvdXRoZWFzdC0xIkcwRQIgX9tKvKBonjtWSmO1NsvVU%2BjM5t2%2BCJz7pJ3A9RyhjB0CIQDiz3MaeLfJw3%2BiTlIEM6jlC4PSdMrG88oE8scHNTWIMyrMBQjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDYzNTU2NzkyNDE4MyIMI0JjfeEPulAKSnxMKqAFkjQjtFMMu1J7zRt9T0SS3wmJX1zLhp0JqcwOCUEvkxQhIJAEXqzS41jaC8nVga4qLkw5lCKSPpjQhPD%2FDKsoE%2BgPgKeubfB%2BqQTdaUM0YMJefrCgGOwWo41G3qsSJYQ9s2SsDxUuZJsgOGwjZlJHAaKmbJL5moDMHZQkA0WFkaMBBaolbKTG66alkBc1Ef2BPj%2BPHT6MvwccP5E8xghy1lbaLY9WCOW9aaHK95Q1kCfhuriY779gEeSoZzDEtpGIfgG4gUn04N3qhZo%2FMb%2FzDu%2B%2F0X2EXGHoieeYjuzxL9wNg61fPgb7hrJflyiqgS6KKQaJVKYztVwCi%2FN53a2XxEaTAQV3AuQQiI0ncex324tBNIq4FqgPd4Vyha01MSRw99J4yRbMdLgcUgVI%2Bh4%2FWt9E1jAJzbbBv%2FqsD7nQC1mnB1zOyDbAw%2FXP8MRUyEm7JW0IVVBuPE51oYlpo85yFUFO%2FJ3Rrp%2FOdXUtuclAWMcRm2%2FUUpUBcA6682qH6YBh8huXL5LSAn%2FAL%2FUmlWr4s%2FWiNAui9XLR%2F2Oa6Fdg4feMXBzfhXz6HiU63LIAdcZ5YrRgMt4T%2FsVtrvkfmccSEUUWxle44kHZp5ltGMhvVmPfFjND%2FpNs9p2ijccFhk0DrB%2BjMb1fGkyzNZN2NOCmSwAvZ55NzfOkf1ZlLNifN4nMZXwnzbno84BR1mKVRDfFfFD4DkRtAEkW9CbFb%2BlJytpJ54lgpsqyL43qGrjejR%2FZJuxnLCXxuaotu1ynNT5ZyzPV18rHIKTQTwicVtq0WV1JX1A0p%2FcEiHqKsOf%2BmC8f3vHC13AvHRmLsIkK9003Q5iCHmgNcIhSQMYB5HaHD%2BLnxalGzQR9sva3MRzJPTULvrkbSI4oGDPHPFs8IPrWMLKj3qYGOrEBirPbaQl1FAIQpfzfD%2BTi5f0HmsbR6hLoCHZxDsrSVDzMF2NzoBJxaYNQJ1NXDMakKSXvnKuu3%2BNnIpbIwJMrOGv3XB%2BIrVznHf3WGudtqvoWEL3hLxa%2FtFll25RGdsPGm2x5HdsI4IbO4QWXBnuG27tdr%2Bc%2BpcIp2HVC62qG8J11a1eeQFKSN%2FL0FS014MdAKKkuTD9QCh0F50yoge7G2JQJfItuE0%2BBLZAbGriaHOgW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230812T120000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Credential=ASIAZH6WM4PLQARZ2A64%2F20230812%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=ccc0da67f2d4d6fb5b6f14e894595a65986f60cf5fa63270bc6af33f4c100f98",
	},
	{
		imgUrl: "/assets/images/logos/calender.png",
		title: "Academic Calendar",
		description:
			"The calendar that tell you about important academic day in each term, including holidays, exam days, and many more.",
		link: "https://center-be.stamford.dev/api/get_files/1_2023_academic_calendar.pdf",
		originalLink: "https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/5da96a61b2455/2901373?X-Blackboard-S3-Bucket=learn-ap-southeast-1-prod-fleet02-xythos&X-Blackboard-Expiration=1691863200000&X-Blackboard-Signature=zypLqDwzwG07oS%2FkBThNimUjBzCnsHJUqsvorJHOn%2Bo%3D&X-Blackboard-Client-Id=447391&X-Blackboard-S3-Region=ap-southeast-1&response-cache-control=private%2C%20max-age%3D21600&response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%271-2023_UG_Academic%2520Calendar_Student%2520Version_Updated%252021%2520April%25202023.pdf&response-content-type=application%2Fpdf&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaDmFwLXNvdXRoZWFzdC0xIkcwRQIgIg%2Fr%2B%2FNzNJkmBUeFjWB1c1sUVdxDSt3dTxfXoKRXtxACIQDZtpx3WI2pazPxmR4%2BiZkSXN6LzIq8ukk0GDP9a4Ew0yrMBQjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDYzNTU2NzkyNDE4MyIM1eywjhkCKnU%2BaD%2BSKqAFc3VJCDSqxuTP1sIdVx1eRoFxeigL8Oia2HcBLwq%2Br7Eat9DYmcU4FgXcK%2FmItaMeLByoFGsYCfiLTAFAV71keDb1GNJ50SVkXh%2BxMYcP4URw1iVWVnXl3dwGBu3hMLx7PkUibTdPFSQwNgo0Ju1fHvnWQbuD5DtHSvAkDXbJdfGsNPmh9ksbBp%2FHEWNrCxplFZba2gu3Ds8Ql53D4GuueBXOoAfbxQnrbw8efbshB%2BF3S1plen%2FnnaXP3SvpIkg8SVD2H4EADezyr5fEWp%2BlPR5xCYXq1L2HY8lsbISLvo2mZtzlFEnJCo6O4vgCbeZUVbEqM4NIxunKQcEwO1qXLqp4JWBJ9gnYF4eZXhUQAfhL4WWeiDk6EkXlWTeyV34paVYyr%2B3QylAIfUoBtDjDdEQ%2B%2FNnzFz1eQ3mkVSAzsNcG4LhYqJzGzzrMVA%2BoaCv4p5U1Fk7phWHrcByEDwdYHX2MN53hPBIOsv6PHdPzkKSg3IcfRr9%2F%2Fv2RRe1Owh5f%2FP9HGcF4i7SgWG7mTdSu8%2BYBuPM0hFRECzdXD%2Bd%2Fs3uOjEsN8wZAADwp76%2BLoTOA%2FeKxdCHXuIw725%2FzbM%2Bw4WUDiMlehbSax2zijyVpcZuEUW1h1dkM3fvifyw8QP%2F6VWPadqXW8Ys%2FTXP1TxCY8gRrHp2j4BGVWcCeJwlzbZLDx9Hj1%2Fg%2FevtUtIakLlnp7I%2FAW81lxBZtIDUDxwNRrJZ3Q1lVL31WJcyXe3tNRvh164d0vNRn8m0iejFLRqZW9QU2jACAte1BFc4s1Gig8ZfsVbRzGLHEQrrcnwhJkC8mnfeKEv%2BUglLi1pa9bRhnv9wM4qnmlW1Oz9giYjq4BhPQi1DxVn9to7nhi3TtjjdAQ0sp9mRBBNil6CqZP7Z5MMCY3qYGOrEBq%2FJ7Zcerrc1kJy8J9VkfsodRc1xWvNQDKkcqtNpst2OxeiX%2BjRDKIHI9RtD0%2F84B5duzgyiWMx4HzO8vEK3wyUWYEAh59fjMU3RPt8qs9G0v9fRN33kTy5WMIfn8joF6gzbJN%2BhjRQAyrxQnk7m44WqbH71FGFNWu6X5LHgRoeFChkaGFs6lNknj27qEJK0oD2WY%2Bqz0M%2FSZ6oXBSZLadhNwU7tJrpjTvGiJOG4TYzqo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230812T120000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Credential=ASIAZH6WM4PLSNPDXZ4N%2F20230812%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=34b0bed55229b6fb3747f61f3208d45a64283234f081cd2bca40192fd2fb801e",
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
