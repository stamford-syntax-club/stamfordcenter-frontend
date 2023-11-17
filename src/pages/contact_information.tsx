import { Card, Image, Text, Button, Grid, CardSection, CopyButton } from "@mantine/core";
import NextImage from "next/image";
import React, { useState } from "react";

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

const ContactCard = ({ title, operationTime, operationTitle, imgUrl, email }: ContactCardProps) => {
	return (
		<Card className="mx-auto max-w-xs rounded-lg p-10 md:p-10 lg:p-10">
			<CardSection className="max-w-xs">
				<Image
					component={NextImage}
					className="h-full w-full rounded-lg"
					src={imgUrl}
					alt="Stamford Logo"
					width={384}
					height={216}
				/>
			</CardSection>

			<CardSection className="font-open-sans mt-4 flex text-lg font-semibold text-white md:mt-6 lg:mt-8">
				{title}
			</CardSection>

			<Card.Section className="text-gray-500">{email}</Card.Section>

			<CardSection className="mt-2 flex items-center text-sm md:mt-4 md:text-base lg:mt-6">
				{operationTitle}
				<br />
				{operationTime}
			</CardSection>

			<Card.Section className="mt-4">
				<Button component="a" href={`mailto:${email}`} className="h-10 w-full">
					Email
				</Button>

				<CopyButton value={email}>
					{({ copied, copy }) => (
						<Button
							className="mt-2 h-10 w-full"
							color={copied ? "green" : ""}
							variant={copied ? "filled" : "light"}
							onClick={copy}
						>
							{copied ? "Copied" : "Copy Email Address"}
						</Button>
					)}
				</CopyButton>
			</Card.Section>
		</Card>
	);
};

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
			to help you on your educational journey. Feel free to reach out, and we&apos;ll ensure you get the support
			and information required to succeed during your time at Stamford
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
