import React from "react";
import { Card, Image, Text, Badge, Button, Group, Grid, CardSection } from "@mantine/core";

interface ContactCardProps {
	title: string;
	operationTitle: string;
	operationTime: string;
	imgUrl: string;
}

const imageUrl = "/assets/images/logos/registrar.png";

const contactCards = [
	{
		imgUrl: imageUrl,
		title: "Academic Support",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
	},
	{
		imgUrl: imageUrl,
		title: "Registra",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
	},
	{
		imgUrl: imageUrl,
		title: "Library",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
	},
	{
		imgUrl: imageUrl,
		title: "Finance",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
	},
	{
		imgUrl: imageUrl,
		title: "IT Support",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
	},
	{
		imgUrl: imageUrl,
		title: "Student Service",
		operationTitle: "Operation Hours:",
		operationTime: "Mon-Fri 08:30 - 17.30",
	},
];

const ContactCard = ({ title, operationTime, operationTitle, imgUrl }: ContactCardProps) => (
	<Card withBorder className="flex h-100 w-80 my-10  p-10 rounded-lg shadow max-w-sm flex-col gap-4">
		<CardSection>
			<div className="mx-2 mt-2">
		<Image className="rounded-sm w-full h-full" src={imgUrl} alt="Registra Img"   />
		</div>
		</CardSection>
		

		<CardSection className="flex text-white text-lg font-semibold font-['Open Sans']">{title}</CardSection>
		<CardSection className="flex items-center">{operationTitle}<br/>{operationTime}</CardSection>
		
		<Card.Section className="">
				<div className="w-full">
					
						<Button className="w-full h-10 text-blue-300 bg-slate-800">Email</Button>
					
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
					<div className="mb-4 text-5xl font-bold">Contact Information</div>
				</div>
			</h1>

			{/* Header.Description */}
			<Text align="center">
				Explore the diverse departments below to find the contact information you need. Our dedicated staff is
				ready to help you on your educational journey. Feel free to reach out, and we'll ensure you get the
				support and information required to succeed during your time at Stamford
			</Text>
			<Group className="grid lg:grid-cols-3 justify-center items-center gap-x-48 gap-y-0" >
				{contactCards.map((card) => (
					<ContactCard key={"contactcard" + card.title} {...card}/>
				))}
			</Group>
		</div>
	);
}
