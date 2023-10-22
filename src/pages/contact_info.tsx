import React from "react";
import { Card, Image, Text, Badge, Button, Group, Grid, CardSection } from "@mantine/core";

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
		title: "Registra",
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
	<Card withBorder className="flex rounded-lg p-10 flex-col gap-4 shadow">
		<CardSection>
			<div className="mx-2 mt-2">
		<Image className="rounded-lg w-full h-full" src={imgUrl} alt="Registra Img"   />
		</div>
		</CardSection>
		

		<CardSection className="flex text-white text-lg font-semibold font-['Open Sans']">{title}</CardSection>
		<CardSection className="flex items-center">{operationTitle}<br/>{operationTime}</CardSection>
		
		<Card.Section className="">
				<div className="w-full">
				<a href={`mailto:${email}`}>
						<Button className="w-full h-10 text-blue-300 bg-slate-800">Email</Button>
				</a>
				</div>
			</Card.Section>
		
	</Card>
);

// Export
export default function contactInfoPage() {
	return (
		<div className="container justify-center mx-auto mt-12">
			{/* Header */}
			<h1>
				<div className="flex flex-col justify-center items-center text-center">
					<div className="mb-4 text-5xl font-bold text-white">Contact Information</div>
				</div>
			</h1>

			{/* Header.Description */}
			<Text align="center">
				Explore the diverse departments below to find the contact information you need. Our dedicated staff is
				ready to help you on your educational journey. Feel free to reach out, and we'll ensure you get the
				support and information required to succeed during your time at Stamford
			</Text>
			<Group className="grid lg:grid-cols-3 justify-center items-center gap-14 m-14" >
				{contactCards.map((card) => (
					<ContactCard key={"contactcard" + card.title} {...card}/>
				))}
			</Group>
		</div>
	);
}
