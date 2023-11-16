import { Card, Image, Text, Button, Group, CardSection } from "@mantine/core";

interface ContactCardProps {
	title: string;
	operationTitle: string;
	operationTime: string;
	imgUrl: string;
	email: string;
}

const imageUrl = "/assets/images/logos/registrar.png";

const contactCards = [
	{
		imgUrl: imageUrl,
		title: "Academic Support",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "ug_academic@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "Registrar",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "registrar.bkk@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "Library",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "library@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "Finance",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "cashier_rm9@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "IT Support",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "support@stamford.edu",
	},
	{
		imgUrl: imageUrl,
		title: "Student Service",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
		email: "international-service@stamford.edu",
	},
];

const ContactCard = ({ title, operationTime, operationTitle, imgUrl, email }: ContactCardProps) => (
	<Card className="mx-auto max-w-xs rounded-lg p-10 md:p-10 lg:p-10">
		<CardSection className="max-w-xs">
			<Image className="h-full w-full rounded-lg" src={imgUrl} alt="Contact Img" />
		</CardSection>

		<CardSection className="font-open-sans mt-4 flex text-lg font-semibold text-white md:mt-6 lg:mt-8">
			{title}
		</CardSection>

		<CardSection className="mt-2 flex items-center text-sm md:mt-4 md:text-base lg:mt-6">
			{operationTitle}
			<br />
			{operationTime}
		</CardSection>

		<Card.Section className="mt-4">
			<div className="w-full">
				<a href={`mailto:${email}`}>
					<Button className="h-10 w-full bg-slate-800 text-blue-300">Email</Button>
				</a>
			</div>
		</Card.Section>
	</Card>
);

const ContactInfoPage = () => (
	<div className="container mx-auto mt-12 justify-center">
		{/* Header */}
		<h1>
			<div className="flex flex-col items-center justify-center text-center">
				<div className="mb-4 text-5xl font-bold text-white">Contact Information</div>
			</div>
		</h1>

		{/* Header.Description */}
		<Text className="text-center">
			Explore the diverse departments below to find the contact information you need. Our dedicated staff is ready
			to help you on your educational journey. Feel free to reach out, and we&apos;ll ensure you get the support and
			information required to succeed during your time at Stamford
		</Text>

		<Grid justify="center" align="center" className="my-8 px-0 md:px-16 lg:px-32">
			{contactCards.map((card) => (
				<Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={`contactcard-${card.title}`}>
					<ContactCard {...card} />
				</Grid.Col>
			))}
		</Grid>
	</div>
);
export default ContactInfoPage;
